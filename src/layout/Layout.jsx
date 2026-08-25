import React from 'react';
import Navbar from './navbar/Navbar';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';

const Layout = () => {
    const titleBar=[
        {name : "کاربران"},
        {name : "پست ها"},
        {name : "کاربران"},
        {name : "کاربران"},
        
    ]
    return (
        // Layout اصلی
<div className="flex flex-col h-screen">
  <Navbar />
  <div className="flex flex-1 overflow-hidden">
    <Sidebar />
    <main className="flex-1 overflow-y-auto">
        <Content/>
    </main>
  </div>
</div>
    );
};

export default Layout;