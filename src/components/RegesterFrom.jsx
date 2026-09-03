import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup"

const initialValues={
  name: "",
  email: "",
  password: "",
};

const onSubmit = values=>{
  console.log(values)
}
const validate= values=>{
  let errors = {};
      if (!values.name) {
        errors.name = "یک نام وارد کنید";
      }
      if (!values.email) {
        errors.email = "یک ایمیل وارد کنید";
      }else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
        errors.email = " لطفا قالب ایمیل را درست وارد کنید مثال : aaa@example.bbb"
      }
      if (!values.password) {
        errors.password = "یک پسورد وارد کنید";
      }
      return errors;
}

const validationSchema = Yup.object({
  name : Yup.string().required('لطفا این قسمت را پر کنید'),
  email : Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb") ,
  password : Yup.string().required('لطفا این قسمت را پر کنید')
})
const RegesterFrom = () => {
  const fromik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  })
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 sm:p-10">
          <form action="" className="space-y-6" onSubmit={fromik.handleSubmit}>
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              ثبت نام
            </h1>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                ایمیل :
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="example@email.com"
                {...fromik.getFieldProps('email')}
              />
              {fromik.errors.email && fromik.touched.email ? (
                <small className="black text-center text-red-600">
                  {fromik.errors.email}
                </small>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                نام و نام خوانوادگی :
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="حسین جعفری"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                {...fromik.getFieldProps('name')}

              />
              {fromik.errors.name && fromik.touched.name ? (
                <small className="black text-center text-red-600">
                  {fromik.errors.name}
                </small>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                 رمز عبور :
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                {...fromik.getFieldProps('password')}

              />
              {fromik.errors.password && fromik.touched.password ? (
                <small className="black text-center text-red-600">
                  {fromik.errors.password}
                </small>
              ) : null}
            </div>

            <div className="pt-2">
              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-200">
               ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegesterFrom;
