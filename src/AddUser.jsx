import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="fixed h-screen w-full left-0 top-0 z-28 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-1/3 py-5 rounded-2xl shadow">
        <h2 className="text-2xl text-center font-bold">افزودن کاربر</h2>
        <form className="mx-8 mt-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="">نام کاربر</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-lg pr-6 py-2"
              placeholder="لطفا یک نام وارد کنید"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="">ایمیل کاربر</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-lg pr-6 py-2"
              placeholder="لطفا یک ایمیل وارد کنید"
            />
          </div>
        </form>
        <div className="text-center mt-10 ">
          <Link
            to={"/users"}
            className="py-3 px-6 rounded-lg bg-blue-500 text-white hover:bg-blue-500/80"
          >
            بازگشت
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
