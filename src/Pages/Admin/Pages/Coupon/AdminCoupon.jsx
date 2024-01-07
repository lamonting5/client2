import React, { useEffect, useState } from "react";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminCoupon.scss";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

const AdminCoupon = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    async function getCoupons() {
      const res = await axiosClient.get("coupon/coupons");
      setCoupons(res.data);
    }

    getCoupons();
  }, [update]);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Coupon Name", flex: 2 },
    { field: "desc", headerName: "Percentage", flex: 2 },
    { field: "percentage", headerName: "Percentage", flex: 2 },
  ];

  return (
    <div className="couponPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Coupons</h2>
          <h3 className="desc">
            This website has <span>{coupons.length} </span>coupons available
          </h3>
        </div>
        <button
          className="newCouponBtn"
          onClick={() => {
            navigate("/admin/coupons/new");
          }}
        >
          New Coupons
          <span className="icon">
            <TiPlus />
          </span>
        </button>
      </div>
      <Datatable
        update={update}
        setUpdate={setUpdate}
        type="coupon"
        columns={columns}
        rows={coupons}
      />
    </div>
  );
};

export default AdminCoupon;
