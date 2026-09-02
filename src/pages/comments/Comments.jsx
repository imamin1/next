import { useState } from "react";
import useManagmentData from "../../hooks/useManagmentData";

function Comments() {
  const { loading, data, error, addItem, editItem, deleteItem } = useManagmentData(
    "comments",
    "https://jsonplaceholder.typicode.com/comments"
  );
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState("");

  if (loading)
    return <p className="p-6 text-muted dark:text-muted-dark">در حال بارگذاری...</p>;
  if (error)
    return <p className="p-6 text-danger">خطا: {error}</p>;

  const handleAdd = () => {
    const body = prompt("متن کامنت جدید:");
    if (body) addItem({ body, name: "کاربر جدید" });
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setDraft(item.body ?? item.name);
  };

  const saveEdit = (item) => {
    editItem({ ...item, body: draft });
    setEditingId(null);
  };

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-black dark:text-white">کامنت‌ها</h1>
        <button
          onClick={handleAdd}
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black dark:text-white hover:bg-accent/90"
        >
          افزودن کامنت
        </button>
      </div>

      <ul className="divide-y divide-border dark:divide-border-dark rounded-lg border border-border bg-surface dark:border-border-dark dark:bg-surface-dark">
        {data.map((item) => (
          <li key={item.id} className="group flex items-center gap-3 px-4 py-3">
            {editingId === item.id ? (
              <>
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  autoFocus
                  className="flex-1 rounded-md border border-border bg-transparent px-2 py-1 text-sm outline-none focus:border-accent dark:border-border-dark"
                />
                <button
                  onClick={() => saveEdit(item)}
                  className="shrink-0 text-sm font-medium text-accent"
                >
                  ذخیره
                </button>
              </>
            ) : (
              <>
                <p className="flex-1 text-sm leading-6 text-black dark:text-white">
                  {item.body ?? item.name}
                </p>
                <div className="flex shrink-0 gap-3 opacity-0 transition-opacity group-hover:opacity-100 sm:opacity-0 max-sm:opacity-100">
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
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;