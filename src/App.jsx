import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6"></div>
          <h1 className="text-3xl text-center font-bold text-indigo-800 bm-6">
            React app
          </h1>
          <div className="flex justify-center mb-8 mt-3  gap-12">
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-600 p-3 rounded-lg text-white shadow-md mx-5"
                  : "bg-gray-100 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
              }
            >
              کاربران
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-600 p-3 mx-4 rounded-lg text-white shadow-md"
                  : "bg-gray-100 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
              }
            >
              پست‌ها
            </NavLink>
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Navigate to="/users" />} />
              <Route path="/users" element={<Users/>}/>
              <Route path="/posts" element={<Posts/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;