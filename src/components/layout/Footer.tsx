'use client';

import React from 'react';
import Link from 'next/link';

const footerLinks = [
  {
    title: '关于我们',
    links: [
      { href: '/licenses', label: '资质证书' },
      { href: '/contact', label: '联系我们' },
    ],
  },
  {
    title: '产品服务',
    links: [
      { href: '/products', label: '酒类与保健食品' },
      { href: '/products', label: '预包装食品与日用百货' },
      { href: '/products', label: '珠宝首饰服务' },
      { href: '/products', label: '办公设备耗材' },
      { href: '/products', label: '广告服务' },
      { href: '/products', label: '小商品服务' },
    ],
  },
  {
    title: '联系方式',
    links: [
      { href: '/contact', label: '地址：甘肃省天水市秦州区解放路金怡园1号商铺' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-500 text-sm border-t pt-8">
          <p>© {new Date().getFullYear()} 天水市同城速达新零售有限公司 | 保留所有权利</p>
          <p className="mt-2">陇ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
} 