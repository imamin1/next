import UserList from "./UserList";
const App = ()=> {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800">
        سامانه هوشمند مدیریت یکپارچه
      </h1>
      <UserList />
    </div>
  );
}

export default App;