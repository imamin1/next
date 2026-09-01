import { Outlet } from "react-router-dom";

function Content() {
    return (
        <main className="flex-1 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-y-auto p-6 custom-scroll flex-1 overflow-y-auto p-6 dark:bg-[#0A0D14]">
            <Outlet />
        </main>
    );
}
export default Content;