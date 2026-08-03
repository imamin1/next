import { useContext } from "react";
import UserItems from "./UserItems";
import { UserContext } from "./UserContext";
import AddUserModal from "./AddUserModal";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="px-4 py-5 sm:px-6 text-lg leading-6 font-medium text-gray-900">
          لیست کاربران
        </h1>
        <AddUserModal />
      </div>

      <ul className="border-t border-gray-200 divide-y divide-gray-200 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <li key={user.id} className="px-4 py-4 sm:px-6">
            <UserItems user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
