import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <li className="flex">
        <NavLink
          className="flex items-center px-4 -mb-1 lg:border-b-2 dark:border-"
          to="/"
        >
          হোম
        </NavLink>
      </li>

      <li className="flex">
        <NavLink
          className="flex items-center px-4 -mb-1 lg:border-b-2 dark:border-"
          to="/books"
        >
          বই সমূহ
        </NavLink>
      </li>

      <li className="flex">
        <NavLink
          className="flex items-center px-4 -mb-1 lg:border-b-2 dark:border-"
          to="/blogs"
        >
          ব্লগ
        </NavLink>
      </li>

      <li className="flex">
        <NavLink
          className="flex items-center px-4 -mb-1 lg:border-b-2 dark:border-"
          to="/contact"
        >
          কনক্ট্যাক্ট
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
