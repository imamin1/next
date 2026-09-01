// pages/comments/Comments.jsx
import useManagmentData from "../../hooks/useManagmentData";

function Posts() {
  const { loading, data, error } = useManagmentData(
    "posts",
"https://jsonplaceholder.typicode.com/posts"

  );

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

export default Posts;
