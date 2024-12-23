import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineInventory2 } from "react-icons/md";
import useUser from "../hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { GrOverview } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";

// seller routes:
const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-books",
    title: "My books",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-book",
    title: "Add books",
    icon: <IoMdAddCircleOutline />,
  },
];

const adminRoutes = [
  {
    id: 1,
    route: "/dashboard/all-users",
    title: "All Users",
    icon: <FaPeopleGroup />,
  },
];
const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/wish-list",
    title: "WishList",
    icon: <FaPeopleGroup />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const userData = useUser();
  const { logOut, user, setUserRole } = useContext(AuthContext);
  setUserRole(userData?.role);
  if (!user?.email) {
    navigate("/login");
  }
  return (
    <div className="bg-gray-200 min-h-screen   border-r border-black px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="border border-black rounded-md p-2">
          <NavLink to="/dashboard/overview" className="flex items-center gap-3">
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>

        {userData?.role === "seller" &&
          sellerRoutes?.map((route) => (
            <li key={route.id} className="border border-black rounded-md p-2">
              <NavLink to={route.route} className="flex items-center gap-3">
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        {userData?.role === "admin" &&
          adminRoutes?.map((route) => (
            <li key={route.id} className="border border-black rounded-md p-2">
              <NavLink to={route.route} className="flex items-center gap-3">
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        {userData?.role === "buyer" &&
          buyerRoutes?.map((route) => (
            <li key={route.id} className="border border-black rounded-md p-2">
              <NavLink to={route.route} className="flex items-center gap-3">
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        <li className="border border-black rounded-md p-2">
          <NavLink to="/" className="flex items-center gap-3">
            <IoHomeOutline />
            <p>Home</p>
          </NavLink>
        </li>

        <li
          className="border border-black rounded-md p-2"
          onClick={() => logOut()}
        >
          <NavLink className="flex items-center gap-3">
            <TbLogout2 />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
