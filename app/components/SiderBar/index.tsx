'use client';
import React from 'react';


function Sider(props) {

  const { showSider } = props;

  return (
    <div
      className={`bg-gray-800 w-64 p-4 text-white fixed left-0 top-0 min-h-screen z-10 transition-all duration-300 ${showSider ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
    >
      <h1 className="text-xl mb-4">Sider</h1>
      {/* 在此处添加 Sider 的内容 */}
    </div>
  )
}
export default Sider;