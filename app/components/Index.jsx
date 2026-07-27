"use client";
import { useEffect, useReducer } from "react";

const initinalState = {
  data: null,
  loading: true,
  error: null,
};
const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { loading: true, data: null, error: null };
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
const index = () => {
  const [state, dispatch] = useReducer(dataReducer, initinalState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch(() =>
        dispatch({ type: "FETCH_ERROR", payload: "خطا در گرفتن اطلاعات" })
      );
  }, []);

  if (state.loading)
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-300 to-blue-400">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full h-16 w-16 bg-indigo-500 mb-4"></div>
          <p className="text-indigo-700 text-xl">در حال دریافت اطلاعات</p>
        </div>
      </div>
    );
  if (state.error)
    return (
      <div className="h-screen flex justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center gap-y-6 text-center shadow-lg w-60 h-60 bg-white border -2 border-red-400 rounded-lg ">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#EF4444" />
            <rect x="11" y="6" width="2" height="8" rx="1" fill="white" />
            <rect x="11" y="16" width="2" height="2" rx="1" fill="white" />
          </svg>
          <p className="text-red-700 text-lg font-medium">{state.error}</p>
        </div>
      </div>
    );
  return (
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {state.data.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-lg font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold text-lg">{user.name}</h3>
                  <p className="text-indigo-500 text-sm">@{user.username}</p>
                </div>
              </div>
    
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-500">ایمیل:</span>
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-500">تلفن:</span>
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-500">وبسایت:</span>

                    {user.website}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default index;
