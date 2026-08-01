import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4">
      <p className="text-sm font-medium tracking-widest text-gray-500 mb-4">
        خطای 404
      </p>

      <h1 className="text-7xl md:text-9xl font-bold mb-4">404</h1>

      <p className="text-gray-400 text-center max-w-md mb-10">
        صفحه‌ای که دنبالش می‌گردید پیدا نشد. ممکنه آدرس اشتباه باشه یا این
        صفحه حذف شده باشه.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <Link
          to="/posts"
          className="flex-1 text-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
        >
          بازگشت به پست‌ها
        </Link>

        <Link
          to="/users"
          className="flex-1 text-center px-6 py-3 rounded-lg border border-gray-700 text-white font-medium hover:bg-gray-900 transition-colors"
        >
          بازگشت به کاربران
        </Link>
      </div>
    </div>
  );
}