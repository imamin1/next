// pages/users/Users.jsx
import { useState } from "react";
import useManagmentData from "../../hooks/useManagmentData";

function Users() {
  const { loading, data, error, addItem, editItem, deleteItem } = useManagmentData(
    "users",
    "https://jsonplaceholder.typicode.com/users"
  );
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ name: "", email: "", phone: "" });

  if (loading)
    return <p className="p-6 text-muted dark:text-muted-dark">در حال بارگذاری...</p>;
  if (error) return <p className="p-6 text-danger">خطا: {error}</p>;

  const handleAdd = () => {
    const name = prompt("نام کاربر جدید:");
    if (!name) return;
    const email = prompt("ایمیل:") ?? "";
    addItem({ name, email, phone: "" });
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setDraft({ name: item.name, email: item.email, phone: item.phone ?? "" });
  };

  const saveEdit = (item) => {
    editItem({ ...item, ...draft });
    setEditingId(null);
  };

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-black dark:text-white">کاربران</h1>
        <button
          onClick={handleAdd}
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black dark:text-white hover:bg-accent/90"
        >
          افزودن کاربر
        </button>
      </div>

      <ul className="divide-y divide-border rounded-lg border border-border bg-surface dark:divide-border-dark dark:border-border-dark dark:bg-surface-dark">
        {data.map((item) => (
          <li key={item.id} className="group px-4 py-3">
            {editingId === item.id ? (
              <div className="space-y-2">
                <input
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  autoFocus
                  className="w-full rounded-md border border-border bg-transparent px-2 py-1 text-sm font-medium outline-none focus:border-accent dark:border-border-dark"
                />
                <input
                  value={draft.email}
                  onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                  className="w-full rounded-md border border-border bg-transparent px-2 py-1 text-sm outline-none focus:border-accent dark:border-border-dark"
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setEditingId(null)}
                    className="text-sm text-muted dark:text-muted-dark"
                  >
                    انصراف
                  </button>
                  <button
                    onClick={() => saveEdit(item)}
                    className="text-sm font-medium text-accent"
                  >
                    ذخیره
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-black dark:text-white">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted dark:text-muted-dark">
                    {item.email}
                  </p>
                </div>
                <div className="flex shrink-0 gap-3 opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">
                  <button
                    onClick={() => startEdit(item)}
                    className="text-sm text-muted hover:text-accent dark:text-muted-dark"
                  >
                    ویرایش
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-sm text-muted hover:text-danger dark:text-muted-dark"
                  >
                    حذف
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;