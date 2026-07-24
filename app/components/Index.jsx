"use client"
import React, { useEffect, useState } from 'react';

const index = () => {
  const [count , setCount] = useState(0);
  const [notification,setNotification] =useState(null);


  useEffect(() => {
    if (count % 10 == 0 && count !== 0  ) {
      setNotification(`تبریک شما به عدد ${count} رسیدید`);
      setTimeout(() => {
        setNotification(null)
      }, 3000);
    }

  }, [count]);
  return (
    <div className='flex justify-center  content-center relative h-screen bg-gradient-to-br from-sky-400 to-lime-300'>
      <div className="self-center border-2 border-white p-10 rounded-lg text-center bg-gray-950 text-white">
        <h1 className='text-2xl'>شمارنده هوشمند</h1>
        <div className="p-5 border-2 border-white rounded-lg relative m-3">
          <span className='text-2xl font-bold'>{count}</span>
          {count !== 0 && (
            <span className='absolute top-2 right-2'>
              {count % 2 == 0 ? 'زوج' : 'فرد' }
            </span>
          )}
        </div>
        <div className='flex gap-2'>
          <button className='p-2 border-blue-700 rounded-lg text-white border-2 bg-indigo-800' onClick={()=> setCount(count-1)}> کاهش عدد</button>
          <button className='p-2 border-blue-700 rounded-lg text-white border-2 bg-indigo-800' onClick={()=> setCount(count+1)}>  افزایش عدد</button>
        </div>
       <div className="mt-6">
       <button className='' onClick={()=>setCount(0)}>

بازنشانی
</button>
       </div>
      </div>
      <div className='absolute right-10 bottom-5 '>
        {notification}
      </div>
    </div>
  );
};

export default index;