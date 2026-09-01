// layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import Content from "./content/Content";

function Layout() {
    return (
        <div className="flex h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <Content>
                    <Outlet />
                </Content>
            </div>
        </div>
    );
}

export default Layout;