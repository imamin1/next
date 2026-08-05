import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import Counter from './Counter';

const App = () => {
  const [count ,setCount] =useState(0);
  console.log("app component")
  return (
    <div className='flex flex-col justify-center items-center w-1/2 mx-auto h-screen m-12 gap-5'>
      <ChildComponent/>
      <Counter count={count} setCount={setCount}/>
    </div>
  );
};

export default App;