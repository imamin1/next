import { Link, useLocation } from "react-router";

const UserDetails = () => {

  const location = useLocation()
  const { user: selectedUser } = location.state || {};

  if (!selectedUser)
    return (
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="rounded-xl border border-red-500/20 bg-red-950/40 px-6 py-4 text-center text-red-300 shadow-lg shadow-red-950/30">
          خطا: اطلاعاتی برای نمایش پیدا نشد
        </div>
      </div>
    );
  
  const initials = selectedUser.name
    .split(" ")
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
                {selectedUser.name}
              </h2>
              <p className="text-sm text-amber-200/70">{selectedUser.company.name}</p>
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
                  {selectedUser.username}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">ایمیل</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {selectedUser.email}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">تلفن</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {selectedUser.phone}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">وبسایت</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {selectedUser.website}
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
                  {selectedUser.address.street}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">شهر</span>
                <span className="text-sm font-medium text-zinc-100">
                  {selectedUser.address.city}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">کدپستی</span>
                <span className="text-sm font-medium text-zinc-100" dir="ltr">
                  {selectedUser.address.zipcode}
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
                  {selectedUser.company.name}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-sm text-zinc-400">شعار</span>
                <span className="text-sm font-medium italic text-zinc-100">
                  {selectedUser.company.catchPhrase}
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