"use client";
import { useState } from "react";
import UserInfo from "./UserInfo";

const index = () => {
  const initialUsers = [
    { name: "ali", age: 22, email: "alihossseini82@gmail.com" },
    { name: "hasan", age: 33, email: "hasanhossseini82@gmail.com" },
    { name: "hossein", age: 32, email: "hosseinhossseini82@gmail.com" },
    { name: "javad", age: 26, email: "javadhossseini82@gmail.com" },
  ];
  const [users,setUsers] = useState(initialUsers);
  const handleDelete = (name) => { 
    const newUser = users.filter((user) => user.name !==name)
    setUsers(newUser)
  }
  return (
    <div>
      {users.map((user) => {
        return (
          <UserInfo
            key={user.name}
            {...user}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default index;
