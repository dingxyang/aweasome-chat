'use client';
import React, { useState, useEffect } from 'react';
import SiderBar from '../SiderBar';
import dynamic from "next/dynamic";

const Chat = dynamic(async () => (await import("../Chat")).default, {
  loading: () => <>loading</>,
});

const Home = () => {
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
      <SiderBar showSider={showSider}/>

      {/* Content */}
      <Chat isMobile={isMobile} showSider={showSider} setShowSider={setShowSider}/>
    </div>
  );
};

export default Home;
