import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./NewCoupon.scss";
import axiosClient from "../../../../api/axiosClient";

const NewCoupon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    title: "",
    desc: "",
    percentage: "",
  });

  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setValue({
      title: "",
      desc: "",
      percentage: "",
    });
  };

  const handleNewCoupon = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosClient.post("coupon/create", {
        ...value,
      });
      navigate("/admin/coupons");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  return (
    <div className="newCoupon">
      <div className="header">
        <Link to="/admin/coupons" className="icon">
          <FaArrowLeftLong />
        </Link>
        <div className="info">
          <h3>Back to List</h3>
          <h1>Add New Coupon</h1>
        </div>
      </div>
      <div className="newCouponContainer">
        <div className="generalInfo">
          <h1 className="title">General Infomation</h1>
          <form className="couponForm" onSubmit={handleNewCoupon}>
            <div className="inpWrapper">
              <label>Coupon Name</label>
              <input
                required
                name="title"
                type="text"
                disabled={isLoading}
                value={value.title}
                onChange={handleChangeValue}
                placeholder="Enter Coupon Name"
              />
            </div>
            <div className="inpWrapper">
              <label>Coupon Description</label>
              <input
                required
                name="desc"
                type="text"
                disabled={isLoading}
                value={value.desc}
                onChange={handleChangeValue}
                placeholder="Enter Coupon Description"
              />
            </div>
            <div className="inpWrapper">
              <label>Coupon Percentage</label>
              <input
                required
                name="percentage"
                type="text"
                disabled={isLoading}
                value={value.percentage}
                onChange={handleChangeValue}
                placeholder="Enter Coupon Percentage"
              />
            </div>
            <div className="form-action">
              <button type="button" className="btnReset" onClick={handleReset}>
                Reset
              </button>
              <button className="btnUpload">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCoupon;
