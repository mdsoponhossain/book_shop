import axios from "axios";
import { useEffect, useState } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("");
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    fetch("https://boi-bazar-server-five.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [toggle]);

  // for updating user:
  const handleUpdateUser = (userId) => {
    const updateUser = async () => {
      const res = await axios.patch(
        `https://boi-bazar-server-five.vercel.app/users/${userId}`,
        {
          role,
        }
      );
      setToggle(!toggle);
    };
    updateUser();
  };

  // for updating user:
  const handleDeleteUser = (userId) => {
    const deleteUser = async () => {
      const res = await axios.delete(
        `https://boi-bazar-server-five.vercel.app/users/${userId}`
      );
      setToggle(!toggle);
    };
    deleteUser();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>

              <th>Change role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user?._id}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.image} alt="loading..." />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50">{user?.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.role}</td>

                <th>
                  <button className="btn btn-ghost btn-xs">
                    <select
                      onChange={(e) => setRole(e.target.value)}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option disabled selected>
                        change role
                      </option>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </select>
                  </button>
                </th>

                <td
                  className="btn btn-secondary btn-outline mr-4"
                  onClick={() => handleUpdateUser(user?._id)}
                >
                  Confirm
                </td>
                <td
                  onClick={() => handleDeleteUser(user?._id)}
                  className="btn btn-secondary btn-outline"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
