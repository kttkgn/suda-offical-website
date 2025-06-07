import Image from 'next/image';
import React from 'react';

const productCategories = [
  {
    title: '酒类与保健食品',
    description: '提供各类酒水及保健食品的批发零售服务，正规渠道采购，证件齐全。',
    image: '/images/services/wine.jpg',
    features: ['白酒、红酒、洋酒', '保健食品', '营养补充剂'],
    license: true,
    color: 'blue',
  },
  {
    title: '预包装食品与日用百货',
    description: '提供各类预包装食品及日用百货的批发零售服务，品质保证。',
    image: '/images/services/food.jpg',
    features: ['预包装食品', '日用百货', '生活用品'],
    license: true,
    color: 'green',
  },
  {
    title: '珠宝首饰服务',
    description: '提供各类珠宝首饰的销售及定制服务，专业鉴定，品质保证。',
    image: '/images/services/jewelry.jpg',
    features: ['黄金首饰', '钻石饰品', '珠宝定制'],
    license: false,
    color: 'purple',
  },
  {
    title: '办公设备耗材',
    description: '提供办公设备及耗材的销售服务，一站式采购，专业支持。',
    image: '/images/services/office.jpg',
    features: ['办公设备', '办公耗材', '设备维护'],
    license: false,
    color: 'yellow',
  },
  {
    title: '广告服务',
    description: '提供专业的广告设计及营销服务，助力企业品牌推广。',
    image: '/images/services/advertising.jpg',
    features: ['广告设计', '营销策划', '品牌推广'],
    license: false,
    color: 'red',
  },
  {
    title: '小商品服务',
    description: '提供各类小商品的批发零售服务，精选优质商品。',
    image: '/images/services/retail.jpg',
    features: ['生活日用品', '家居小物件', '创意礼品'],
    license: false,
    color: 'indigo',
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    hover: 'hover:bg-blue-600',
    border: 'border-blue-200',
    gradient: 'from-blue-600/80 to-blue-900/80',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    hover: 'hover:bg-green-600',
    border: 'border-green-200',
    gradient: 'from-green-600/80 to-green-900/80',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    hover: 'hover:bg-purple-600',
    border: 'border-purple-200',
    gradient: 'from-purple-600/80 to-purple-900/80',
  },
  yellow: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    hover: 'hover:bg-yellow-600',
    border: 'border-yellow-200',
    gradient: 'from-yellow-600/80 to-yellow-900/80',
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    hover: 'hover:bg-red-600',
    border: 'border-red-200',
    gradient: 'from-red-600/80 to-red-900/80',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
    hover: 'hover:bg-indigo-600',
    border: 'border-indigo-200',
    gradient: 'from-indigo-600/80 to-indigo-900/80',
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">产品与服务</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            提供全方位的商业服务，满足您的多样化需求
          </p>
        </div>

        {/* 产品服务网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, idx) => {
            const colors = colorClasses[cat.color as keyof typeof colorClasses];
            return (
              <div 
                key={idx} 
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border ${colors.border}`}
              >
                {/* 图片区域 */}
                <div className="relative h-56">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`} />
                  {cat.license && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      持证经营
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
                  </div>
                </div>

                {/* 内容区域 */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{cat.description}</p>
                  <div className="space-y-3">
                    {cat.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <svg className={`w-5 h-5 ${colors.text} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 