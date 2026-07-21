"use client"
import React, { useState } from 'react';
import GuestComponent from './GuestComponent';
import UserInfo from './UserComponent';
const index = () => {
  const [isLogined , setIsLogined] = useState(false);
  return (
    <div>
      <button onClick={()=> setIsLogined(!isLogined)}>
        {isLogined ? 'logout' : 'login'}
      </button>
        {isLogined ? <UserInfo/> : <GuestComponent/>}
    </div>
  );
};

export default index;