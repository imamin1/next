"use client"
import { useState } from "react";
import Users from "./users";
import Posts from "./posts";

const index = () => {
  const [page, setPage] = useState("users");
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6"></div>
          <h1 className="text-3xl text-center font-bold text-indigo-800 bm-6">
            React app
          </h1>
          <div className="flex justify-center mb-8 mt-3 gap-4">
            <button
              onClick={() => setPage("users")}
              className={` ${
                page === "users"
                  ? "bg-indigo-600 p-3 rounded-lg text-white shadow-md"
                  : "bg-gray-100 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
              }`}
            >
              کاربران
            </button>
            <button
              onClick={() => setPage("posts")}
              className={`${
                page === "posts"
                  ? "bg-indigo-600 rounded-lg p-3 text-white shadow-md"
                  : "bg-gray-100 p-3 rounded-lg text-gray-700 hover:bg-gray-200"
              }`}
            >
              پشت ها
            </button>
          </div>
          <div className="">
            {page === "users" && <Users/>}
            {page === "posts" && <Posts/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
