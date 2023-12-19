import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/home/home.jsx";
import Products from "./pages/Products/Products.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import Dashboard from "./Pages/Admin/Pages/Dashboard/Dashboard.jsx";
import AdminCoupon from "./Pages/Admin/Pages/Coupon/AdminCoupon.jsx";
import AdminOrder from "./Pages/Admin/Pages/Order/AdminOrder.jsx";
import AdminProduct from "./Pages/Admin/Pages/Product/AdminProduct.jsx";
import AdminCategory from "./Pages/Admin/Pages/Category/AdminCategory.jsx";
import AdminUser from "./Pages/Admin/Pages/User/AdminUser.jsx";

const user = 1;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products:id",
        element: <Products />,
      },
    ],
  },

  {
    path: "/admin",
    element:
      user == 1 ? (
        <Admin>
          <Dashboard />
        </Admin>
      ) : (
        <AdminAuth />
      ),
  },
  {
    path: "/admin/products",
    element: (
      <Admin>
        <AdminProduct />{" "}
      </Admin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <Admin>
        <AdminOrder />{" "}
      </Admin>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <Admin>
        {" "}
        <AdminUser />{" "}
      </Admin>
    ),
  },
  {
    path: "/admin/coupons",
    element: <Admin>{<AdminCoupon />}</Admin>,
  },
  {
    path: "/admin/categories",
    element: <Admin>{<AdminCategory />}</Admin>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
