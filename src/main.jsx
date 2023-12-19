import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from "./App.jsx";
import Home from "./pages/home/home.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Products from "./pages/Products/Products.jsx";
import AdminAuth from "./pages/Admin/AdminAuth/AdminAuth.jsx";
import Dashboard from "./pages/Admin/Dashboard/Dashboard.jsx";
import AdminProduct from "./pages/Admin/Product/AdminProduct.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            // {
            //     path:"/products/:id",
            //     element:<Products/>
            // },
            {
                path:"/product/:id",
                element:<Products/>
            },
        ]
    },
    // {
    //     path:"/admin",
    //     element:
    //         user === 1 ?
    //         (
    //             <Admin>
    //                 <Dashboard/>
    //             </Admin>
    //         )
    //         :
    //         (
    //             <AdminAuth/>
    //         )
    //     },
    {
        path:"/admin/products",
        element:
                    <Admin>
                        <AdminProduct/>
                    </Admin>
    },
    // {
    //     path:"/admin/orders",
    //     element:
    //         <Admin>
    //             <AdminOrder/>
    //         </Admin>
    // },
    // {
    //     path:"/admin/users",
    //     element:
    //         <Admin>
    //             <AdminUser/>
    //         </Admin>
    // },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
