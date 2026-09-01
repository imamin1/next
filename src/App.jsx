import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Posts from "./pages/posts/Posts";
import Comments from "./pages/comments/Comments";
import Gallery from "./pages/gallery/Gallery";
import Users from "./pages/users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Posts /> },
            { path: "posts", element: <Posts /> },
            { path: "comments", element: <Comments /> },
            { path: "gallery", element: <Gallery /> },
            { path: "users", element: <Users /> },
        ],
    },
]);

function App() {
    const { darkmode } = useSelector((state) => state.darkmode);

    useEffect(() => {
        const root = document.documentElement;
        if (darkmode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", darkmode);
    }, [darkmode]);

    return <RouterProvider router={router} />;
}

export default App;