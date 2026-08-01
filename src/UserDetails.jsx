import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("خطا در دریافت اطلاعات");
        return res.json();
      })
      .then((user) => {
        setUser(user);
        setLoading(false);
        console.log(user);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);
  if (!user) return null
  if (loading)
    return (
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-3">
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-amber-400/30 border-t-amber-400"></span>
          <span className="text-sm font-medium tracking-wide text-amber-200/80">
            در حال دریافت اطلاعات...
          </span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="rounded-xl border border-red-500/20 bg-red-950/40 px-6 py-4 text-center text-red-300 shadow-lg shadow-red-950/30">
          خطا: {error}
        </div>
      </div>
    );
  // if (!user) return null;
  const initials = userId
    .split(0)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div
      dir="rtl"
      className="fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-2xl shadow-black/50">
        {/* subtle top accent */}
        <div className="h-1 w-full shrink-0 bg-gradient-to-l from-amber-300 via-amber-400 to-amber-500" />

        <div className="overflow-y-auto p-7 [scrollbar-color:rgba(251,191,36,0.4)_transparent] [scrollbar-width:thin]">
          {/* Header */}
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20 ring-2 ring-amber-300/30">
              <span className="text-2xl font-bold text-zinc-900">
                {initials}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                {user.name}
              </h2>
              <p className="text-sm text-amber-200/70">{user.company.name}</p>
            </div>
          </div>

          {/* اطلاعات شخصی */}
          <div className="border-t border-white/10 pt-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-300/80">
              اطلاعات شخصی
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">نام کاربری</span>
                <span className="text-sm font-medium text-zinc-100">
                  {user.username}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">ایمیل</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {user.email}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">تلفن</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {user.phone}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">وبسایت</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {user.website}
                </span>
              </div>
            </div>
          </div>

          {/* آدرس */}
          <div className="mt-5 border-t border-white/10 pt-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-300/80">
              آدرس
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">نام خیابان</span>
                <span className="text-sm font-medium text-zinc-100">
                  {user.address.street}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">شهر</span>
                <span className="text-sm font-medium text-zinc-100">
                  {user.address.city}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">کدپستی</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {user.address.zipcode}
                </span>
              </div>
            </div>
          </div>

          {/* شرکت */}
          <div className="mt-5 border-t border-white/10 pt-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-300/80">
              شرکت
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">نام</span>
                <span className="text-sm font-medium text-zinc-100">
                  {user.company.name}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">شعار</span>
                <span className="text-sm font-medium italic text-zinc-100">
                  {user.company.catchPhrase}
                </span>
              </div>
            </div>
          </div>

          {/* بازگشت */}
          <div className="mt-8 flex justify-end">
            <Link
              to={"/users"}
              className="!no-underline rounded-lg bg-gradient-to-l from-amber-400 to-orange-500 px-5 py-2 text-sm font-semibold text-zinc-900 shadow-md shadow-amber-500/20 transition hover:brightness-110"
            >
              بازگشت
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;