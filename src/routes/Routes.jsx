import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layouts/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import About from "../pages/about/About";

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
]);

export default router;
