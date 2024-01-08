import React, { useState } from "react";
import "./EditCouponModal.scss";
import axiosClient from "../../../../api/axiosClient";

const EditCouponModal = (props) => {
  const coupon = props.coupon;
  const setCouponEditModal = props.setCouponEditModal;
  const update = props.update;
  const setUpdate = props.setUpdate;
  const [value, setValue] = useState({
    title: coupon.title,
    desc: coupon.desc,
    percentage: coupon.percentage,
  });

  const handleValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.put(`coupon/${coupon._id}`, value);
      setUpdate(!update);
      setCouponEditModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="coupon-edit-modal-wrapper">
      <div className="coupon-edit-modal">
        <h1>Edit coupon</h1>
        <form className="coupon-edit-form" onSubmit={handleUpdate}>
          <div className="form-box">
            <div className="form-box-info">
              <div className="form-box-info-item">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={value.title}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="form-box-info-item">
                <label htmlFor="desc">Description</label>
                <input
                  type="text"
                  name="desc"
                  id="desc"
                  value={value.desc}
                  onChange={handleValue}
                />
              </div>
              <div className="form-box-info-item">
                <label htmlFor="percentage">Percentage</label>
                <input
                  type="text"
                  name="percentage"
                  id="percentage"
                  value={value.percentage}
                  onChange={handleValue}
                />
              </div>
            </div>
          </div>
          <div className="coupon-edit-modal-actions">
            <div className="action-right">
              <button
                onClick={() => setCouponEditModal(false)}
                className="btn-cancle"
                type="button"
              >
                Cancel
              </button>
              <button type="submit" className="btn-save" onClick={handleUpdate}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCouponModal;
