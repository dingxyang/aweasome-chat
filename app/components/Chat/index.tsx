'use client';
import React from 'react';


function Chat(props) {

  const { isMobile, setShowSider, showSider } = props;

  return (
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
    </div>
  )
}
export default Chat;