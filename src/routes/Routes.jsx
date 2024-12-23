import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layouts/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import About from "../pages/about/About";
import Dashboard from "../layouts/dashboard/Dashboard";
import Overview from "../components/dashboard/Overview";
import AddProducts from "../components/dashboard/seller/AddProduct";
import MyProducts from "../components/dashboard/seller/MyProducts";
import ManageUser from "../components/dashboard/admin/ManageUser";
import UpdateProduct from "../components/dashboard/seller/UpdateProduct";
import WishList from "../components/buyer/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      {
        path: "/dashboard/add-book",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/my-books",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/all-users",
        element: <ManageUser />,
      },
      {
        path: "/dashboard/books/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/dashboard/wish-list",
        element: <WishList />,
      },
    ],
  },
]);

export default router;
