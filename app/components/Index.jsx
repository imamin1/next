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
  const [users, setUsers] = useState(initialUsers);
  // this is delete Users
  const handleDelete = (name) => {
    setUsers((prevUsers) => {
      const newUser = prevUsers.filter((user) => user.name !== name);
      return newUser;
    });
  };
  // this is filter Users
  const setSearch = (char) => {
    const newUsers = initialUsers.filter((user) => user.name.toLocaleLowerCase().includes(char.toLocaleLowerCase()));
    setUsers(newUsers);
  };
  return (
    <div >
      <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="جستوجو ..." />
      {users.map((user) => (
        <UserInfo key={user.name} {...user} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default index;
