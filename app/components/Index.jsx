"use client";
import UserInfo from "./UserInfo";

const index = () => {
  const userInfo = [
    { name: "ali", age: 22, email: "alihossseini82@gmail.com" },
    { name: "hasan", age: 33, email: "hasanhossseini82@gmail.com" },
    { name: "hossein", age: 32, email: "hosseinhossseini82@gmail.com" },
    { name: "javad", age: 26, email: "javadhossseini82@gmail.com" },
  ];
  return (
    <div>
      {userInfo.map((user) => {
        return (
          <UserInfo
            key={user.name}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default index;
