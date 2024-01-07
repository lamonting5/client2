import { useEffect, useState } from "react";
import axiosClient from "../../../../api/axiosClient";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminOrder.scss";

function AdminOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const res = await axiosClient.get("order/orders");
      setOrders(res.data);
    }

    getOrders();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "products", headerName: "Products", flex: 3 },
    { field: "user", headerName: "User", flex: 2 },
    { field: "payment", headerName: "Payment", flex: 2 },
    { field: "total", headerName: "Total", flex: 1 },
  ];

  return (
    <div className="orderPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Orders</h2>
          <h3 className="desc">
            This website has <span>{orders.length} </span>orders available
          </h3>
        </div>
      </div>
      <Datatable columns={columns} rows={orders} />
    </div>
  );
}

export default AdminOrder;
