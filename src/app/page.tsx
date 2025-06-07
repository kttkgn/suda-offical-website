import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 英雄区域 */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            同城速达 - 您的一站式新零售服务平台
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            线上线下深度融合，为您提供便捷、高效、优质的商品与服务
          </p>
          <div className="flex gap-4">
            <Link 
              href="/products" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              了解服务
            </Link>
          </div>
        </div>
      </section>

      {/* 我们的优势 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的优势</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 线上线下一体化 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">线上线下一体化</h3>
              <p className="text-gray-600">自有电商APP，线上线下无缝衔接，提供便捷购物体验</p>
            </div>

            {/* 品质保证 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">品质保证</h3>
              <p className="text-gray-600">正规渠道采购，证件齐全，品质有保障</p>
            </div>

            {/* 专业服务 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">专业服务</h3>
              <p className="text-gray-600">专业团队，提供全方位解决方案</p>
            </div>

            {/* 快速配送 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">快速配送</h3>
              <p className="text-gray-600">同城速达，高效配送，及时送达</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
