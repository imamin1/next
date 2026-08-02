import { createContext, useState } from "react";


export const UserContext = createContext();
const initialUsers = [
  { id: 1, name: "علی رضایی", email: "ali.rezaei@example.com" },
  { id: 2, name: "زهرا احمدی", email: "zahra.ahmadi@example.com" },
  { id: 3, name: "محمد کریمی", email: "mohammad.karimi@example.com" },
  { id: 4, name: "فاطمه موسوی", email: "fatemeh.mousavi@example.com" },
  { id: 5, name: "حسین حسینی", email: "hossein.hosseini@example.com" },
  { id: 6, name: "مریم صادقی", email: "maryam.sadeghi@example.com" },
  { id: 7, name: "امیر جعفری", email: "amir.jafari@example.com" },
  { id: 8, name: "سارا نوری", email: "sara.noori@example.com" },
  { id: 9, name: "رضا قاسمی", email: "reza.ghasemi@example.com" },
  { id: 10, name: "نیلوفر رستمی", email: "niloufar.rostami@example.com" },
];
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const addUser = (user) => setUsers([...users, user]);


return (
  <UserContext.Provider value={{ users, setUsers, deleteUser, addUser }}>
    {children}
  </UserContext.Provider>
);
};
export default UserContextProvider;
