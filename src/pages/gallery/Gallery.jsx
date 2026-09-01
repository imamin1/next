// pages/comments/Comments.jsx
import useManagmentData from "../../hooks/useManagmentData";

function Gallery() {
  const { loading, data, error } = useManagmentData(
    "posts",
"https://jsonplaceholder.typicode.com/photos"  );

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.body ?? item.name}</li>
      ))}
    </ul>
  );
}

export default Gallery;
