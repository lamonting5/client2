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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/products:id",
                element:<Products/>
            },
        ]
    },
    {
        path:"/admin",
        element:<Admin/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
