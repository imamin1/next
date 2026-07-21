"use client";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [age, setAge] = useState(20);
  useEffect(() => {
    // mounting
    console.log("send a request ti the server");
    return () => {
      // unmounting
      console.log("nice to meet you");
    };
  }, []);
  
  useEffect(() => {
    console.log(age);
    if (age === 30) {
      console.log("age is 30");
    }
  }, [age]);
  return (
    <div>
      <h1>userComponents</h1>
      <button onClick={() => setAge((prev) => prev + 1)}>Change Age</button>
      <ul>
        <li>name : amin</li>
        <li>age : {age}</li>
        <li>email : mohammadaminshirzad09@gmail.com</li>
      </ul>
    </div>
  );
};

export default UserInfo;
