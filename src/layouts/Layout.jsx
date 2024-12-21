import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/navbar/Navbar";
import Footer from "../sharedComponents/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
