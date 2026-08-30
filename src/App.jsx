
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './layout/Layout';
 const App = () => {
const {darkmode}= useSelector(state=>state.darkmode);


useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkmode);
    localStorage.setItem('theme', darkmode);
}, [darkmode]);

    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <Layout/>
        </div>
    );
};

export default App;