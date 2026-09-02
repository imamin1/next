// pages/posts/Posts.jsx
import { useState } from "react";
import useManagmentData from "../../hooks/useManagmentData";

function Posts() {
  const { loading, data, error, addItem, editItem, deleteItem } = useManagmentData(
    "posts",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ title: "", body: "" });

  if (loading)
    return <p className="p-6 text-muted dark:text-muted-dark">در حال بارگذاری...</p>;
  if (error) return <p className="p-6 text-danger">خطا: {error}</p>;

  const handleAdd = () => {
    const title = prompt("عنوان پست جدید:");
    if (!title) return;
    const body = prompt("متن پست:") ?? "";
    addItem({ title, body });
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setDraft({ title: item.title, body: item.body });
  };

  const saveEdit = (item) => {
    editItem({ ...item, ...draft });
    setEditingId(null);
  };

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-black dark:text-white">پست‌ها</h1>
        <button
          onClick={handleAdd}
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black dark:text-white hover:bg-accent/90"
        >
          افزودن پست
        </button>
      </div>

      <ul className="divide-y divide-border rounded-lg border border-border bg-surface dark:divide-border-dark dark:border-border-dark dark:bg-surface-dark">
        {data.map((item) => (
          <li key={item.id} className="group px-4 py-3">
            {editingId === item.id ? (
              <div className="space-y-2">
                <input
                  value={draft.title}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                  autoFocus
                  className="w-full rounded-md border border-border bg-transparent px-2 py-1 text-sm font-medium outline-none focus:border-accent dark:border-border-dark"
                />
                <textarea
                  value={draft.body}
                  onChange={(e) => setDraft({ ...draft, body: e.target.value })}
                  rows={2}
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
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-black dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted dark:text-muted-dark">
                    {item.body}
                  </p>
                </div>
                <div className="flex shrink-0 gap-3 pt-0.5 opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">
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

export default Posts;