import { useState } from "react";
import useManagmentData from "../../hooks/useManagmentData";

function Gallery() {
  const { loading, data, error, addItem, deleteItem } = useManagmentData(
    "gallery",
    "https://jsonplaceholder.typicode.com/photos?_limit=50"
  );
  const [active, setActive] = useState(null);

  if (loading)
    return <p className="p-6 text-muted dark:text-muted-dark">در حال بارگذاری...</p>;
  if (error) return <p className="p-6 text-danger">خطا: {error}</p>;

  const handleAdd = () => {
    const title = prompt("عنوان عکس جدید:");
    if (title)
      addItem({
        albumId: 1,
        title,
        url: "https://placehold.co/600",
        thumbnailUrl: "https://placehold.co/150",
      });
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-black dark:text-white">گالری</h1>
        <button
          onClick={handleAdd}
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-black dark:text-white hover:bg-accent/90"
        >
          افزودن عکس
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded-md bg-surface dark:bg-surface-dark"
          >
            <img
              src={item.thumbnailUrl}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placehold.co/150";
              }}
              alt={item.title}
              loading="lazy"
              onClick={() => setActive(item)}
              className="h-full w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-2 pt-6 opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">
              <p className="line-clamp-1 text-xs text-white">{item.title}</p>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-xs text-white/80 hover:text-danger"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <div className="max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.url} alt={active.title} className="w-full rounded-md" />
            <p className="mt-3 text-sm text-white/80">{active.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;