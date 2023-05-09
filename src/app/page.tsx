'use client';
import React, { useState, useEffect } from 'react';

const SiderContentLayout = () => {
  const [showSider, setShowSider] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth >= 768) {
        setShowSider(true);
      } else {
        setShowSider(false);
      }
    };

    handleResize(); // 初始化时调用，确保初始状态正确
    window.addEventListener('resize', handleResize);

    // 当组件卸载时，移除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sider */}
      <div
        className={`bg-gray-800 w-64 p-4 text-white fixed left-0 top-0 min-h-screen z-10 transition-all duration-300 ${
          showSider ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <h1 className="text-xl mb-4">Sider</h1>
        {/* 在此处添加 Sider 的内容 */}
      </div>

      {/* Content */}
      <div className="md:ml-64 flex-1 p-4 relative">
        {/* Mobile header button */}
        <button
          className="md:hidden text-xl px-4 py-2 mb-4 bg-blue-500 text-white rounded"
          onClick={() => setShowSider(!showSider)}
        >
          {showSider ? 'Close' : 'Open'} Sider
        </button>

        {/* Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0 ${
            showSider && isMobile ? 'block' : 'hidden'
          }`}
          onClick={() => setShowSider(false)}
        ></div>

        <h1 className="text-2xl mb-4">Content</h1>
        {/* 在此处添加 Content 的内容 */}
      </div>
    </div>
  );
};

export default SiderContentLayout;
