import React, { useState } from "react";
import "./AdminProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, logout } from "../../../../redux/adminSlice";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

const AdminProfile = () => {
  const admin = useSelector((state) => state.admin.admin);

  const [inpValue, setInpValue] = useState({
    username: admin && admin.admin.username,
    email: admin && admin.admin.email,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditProfile = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axiosClient.put(
        `auth/editAdmin/${admin && admin.admin._id}`,
        inpValue
      );
      dispatch(logout());
      dispatch(loginSuccess({ admin: res.data, token: res.data.accessToken }));
      navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInpValue({
      ...inpValue,
      username: "Viet Tung",
      email: "viettung150803@gmail.com",
    });
  };

  const handleValue = (e) => {
    setInpValue({ ...inpValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-setting">
      <h1>Admin Profile</h1>
      <div className="profile-setting-img">
        <h5>Avatar</h5>
        <div className="setting-img-wrapper">
          <img src="https://i.pinimg.com/236x/f7/ea/ed/f7eaedf50f3b7d6028599a6200b1417a.jpg" />
        </div>
      </div>
      <form className="profile-setting-info" onSubmit={handleEditProfile}>
        <div className="profile-setting-username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={inpValue.username}
            onChange={handleValue}
            required
          />
        </div>
        <div className="profile-setting-email">
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={inpValue.email}
            onChange={handleValue}
            required
          />
        </div>
        <div className="profile-setting-actions">
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn-save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;
