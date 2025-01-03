import Logo from "../../components/logo/Logo";
import NavItems from "./navItems/NavItems";
import CartItems from "./cartItems/CartItems";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import UserDropdown from "../../components/login/UserDropDown";
const Navbar = () => {
  const { user, totalCart, userRole } = useContext(AuthContext);
  return (
    <>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800 ">
        <div className="container flex justify-between h-16 mx-auto">
          {/* logo container */}
          <Logo></Logo>
          <ul className="items-stretch hidden space-x-3 lg:flex ">
            <NavItems></NavItems>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {/* cart icon */}
            {userRole == "buyer" && (
              <Link to="/dashboard/wish-list">
                <CartItems totalCart={totalCart}></CartItems>
              </Link>
            )}

            {/* login & register button */}
            {user ? (
              <UserDropdown />
            ) : (
              <div className="flex gap-5">
                <NavLink to="/login">
                  <button className="btn btn-outline btn-secondary self-center px-8 py-3  rounded dark:bg-violet-600 dark:text-gray-50 border">
                    লগইন
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="btn btn-outline btn-secondary self-center px-8 py-3  rounded dark:bg-violet-600 dark:text-gray-50 border">
                    Register
                  </button>
                </NavLink>
              </div>
            )}
          </div>

          <button className="p-4 lg:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow  "
              >
                <CartItems></CartItems>
                <NavItems></NavItems>
              </ul>
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
