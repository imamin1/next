import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { createPortal } from "react-dom";
import  permissionHOC  from "./permissionHOC";

const AddUserModal = () => {
  const { addUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "کاربر" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    addUser({ ...form, id: Date.now() });
    setForm({ name: "", email: "", role: "کاربر" });
    setOpen(false);
  };

  const modalRoot =
    typeof document !== "undefined" ? document.getElementById("modal-root") : null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mx-6 my-4 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm"
      >
        کاربر جدید
      </button>

      {open &&
        modalRoot &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                افزودن کاربر جدید
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-gray-600">نام</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="مثلاً امین رضایی"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm text-gray-600">ایمیل</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    ذخیره
                  </button>
                </div>
              </form>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
};

export default permissionHOC(AddUserModal);