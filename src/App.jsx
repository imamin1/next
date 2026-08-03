import UserContextProvider from "./UserContext";
import UserList from "./UserList";

function App() {
  return (
    <UserContextProvider>
      <div className="max-w-5xl mx-auto p-4 h-screen">
        <UserList />
        <div className="fixed left-0 right-0 botton-0 bg-blue-200 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo porro necessitatibus recusandae assumenda magni nisi eaque molestias quo dolorem? Deleniti aliquam et assumenda provident laudantium earum minus vitae ea obcaecati!</div>
      </div>
    </UserContextProvider>
  );
}

export default App;
