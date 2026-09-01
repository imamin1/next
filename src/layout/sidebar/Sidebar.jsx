import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md ${
        isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
    }`;

function Sidebar() {
    return (
        <aside className="w-64bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-4">
            <nav className="flex flex-col gap-1">
                <NavLink to="/posts" className={linkClass}>Posts</NavLink>
                <NavLink to="/comments" className={linkClass}>Comments</NavLink>
                <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
                <NavLink to="/users" className={linkClass}>Users</NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;