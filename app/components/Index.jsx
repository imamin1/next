"use client";
import { useState } from 'react';

const index = () => {
    const [text,setText] = useState('hello what is your name ?');
    const handlechange = ()=>{
        setText('im amin')
    }
    return (
        <div className='flex text-center'>
            <button onClick={handlechange} className='p-4 bg-red-500 rounded-lg m-7'>click me</button>
            <span>{text}</span>
        </div>
    );
};

export default index;