import React from "react";

const Sidebar = () => {
  const items = [
    { name: "کاربران" },
    { name: "پست ها" },
    { name: "نظرات" },
    { name: "گالری" },
  ];

  return (
    <div className="lg:w-[20%] h-[100%] bg-blue-500 dark:bg-gray-800 flex justify-center pt-5">
      {" "}
      <ul className="w-full px-4 space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-white text-lg font-medium py-2 px-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
