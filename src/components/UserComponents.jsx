import React from "react";
import { useDispatch, useSelector } from "react-redux";
import getUsers from "../redux/user/userAction";

const UserComponents = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleGetUsers = () => {
    dispatch(getUsers())
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 px-4 py-12 font-sans">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">لیست کاربران</h1>
          <p className="mt-2 text-sm text-slate-500">
            برای دریافت اطلاعات کاربران روی دکمه زیر کلیک کنید
          </p>

          <button
            onClick={handleGetUsers}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 active:scale-95"
          >
            دریافت اطلاعات
          </button>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-14 shadow-sm">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />
              <span className="text-sm text-slate-500">در حال دریافت اطلاعات...</span>
            </div>
          ) : data.length > 0 ? (
            <ul className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {data.map((u) => (
                <li
                  key={u.id}
                  className="flex items-center gap-3 px-5 py-3.5 transition hover:bg-slate-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
                    {u.username?.charAt(0).toUpperCase()}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{u.username}</span>
                </li>
              ))}
            </ul>
          ) : error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-8 text-center">
              <h4 className="text-sm font-medium text-rose-600">{error}</h4>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
              <h4 className="text-sm text-slate-400">کاربران را دریافت کنید</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserComponents;