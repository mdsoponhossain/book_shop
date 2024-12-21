import { useContext } from "react";
// import { Link } from "react-router";
import { AuthContext } from "../../contextApi/AuthProvider";
const UserDropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {/* avater */}
        <div className="avatar">
          <div className="w-10">
            <img
              className="rounded-full"
              src={user?.photoURL ? user?.photoURL : "./profile.png"}
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          {/* <Link to="/dashboard/overview">
          </Link> */}
          <button className="">Dashbaord</button>
        </li>
        <li className="mt-2">
          <button
            onClick={handleLogout}
            className="btn btn-primary btn-sm btn-outline"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
