# 使用 Node.js 18 作为基础镜像
FROM node:18-alpine AS base

# 设置工作目录
WORKDIR /app

# 安装依赖阶段
FROM base AS deps
# 复制 package.json 和 package-lock.json
COPY package.json package-lock.json ./
# 安装所有依赖（包括开发依赖）
RUN npm ci && \
    npm cache clean --force

# 构建阶段
FROM base AS builder
# 复制依赖
COPY --from=deps /app/node_modules ./node_modules
# 复制源代码
COPY . .
# 构建应用
RUN npm run build

# 生产阶段
FROM base AS runner
# 设置环境变量
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    mkdir -p /app/.next/cache && \
    chown -R nextjs:nodejs /app

# 切换到非 root 用户
USER nextjs

# 复制必要的文件
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "server.js"] 