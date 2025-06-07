import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 公司简介 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              同城速达是一家专注于新零售服务的综合性企业
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                同城速达成立于2023年，是一家专注于新零售服务的综合性企业。我们致力于通过线上线下深度融合的方式，为客户提供便捷、高效、优质的商品与服务。
              </p>
              <p className="mb-6">
                公司拥有专业的运营团队和完善的服务体系，在酒类、预包装食品、日用百货等多个领域具有丰富的经营经验。我们始终坚持"诚信经营、品质至上"的服务理念，为客户提供优质的商品和专业的服务。
              </p>
              <p>
                未来，我们将继续深耕新零售领域，不断创新服务模式，提升服务质量，为客户创造更大的价值。
              </p>
            </div>
          </div>
        </section>

        {/* 企业文化 */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">企业文化</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              诚信经营，品质至上，创新发展
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">诚信经营</h3>
              <p className="text-gray-600">
                坚持诚信为本，以诚待人，以信立业，赢得客户信任
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">品质至上</h3>
              <p className="text-gray-600">
                追求卓越品质，提供优质服务，满足客户需求
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">创新发展</h3>
              <p className="text-gray-600">
                勇于创新，持续改进，引领行业发展
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 