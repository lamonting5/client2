import "./Sidebar.scss";

import { MdDashboard } from "react-icons/md";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { IoShirtSharp, IoReceiptSharp, IoLogOut } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { RiCoupon2Fill } from "react-icons/ri";
function Sidebar() {
  return (
    <div className="admin_sidebar">
      <div className="top">
        <span className="logo">VTadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <MdDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <FaUserFriends className="icon" />
            <span>Users</span>
          </li>
          <li>
            <IoShirtSharp className="icon" />
            <span>Products</span>
          </li>
          <li>
            <BiSolidCategory className="icon" />
            <span>Categories</span>
          </li>
          <li>
            <RiCoupon2Fill className="icon" />
            <span>Coupons</span>
          </li>
          <li>
            <IoReceiptSharp className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">ADMIN</p>
          <li>
            <FaUserCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <IoLogOut className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" />
        <div className="colorOption" />
        <div className="colorOption" />
      </div>
    </div>
  );
}

export default Sidebar;
