import "./Sidebar.scss";

import { MdDashboard } from "react-icons/md";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { IoShirtSharp, IoReceiptSharp, IoLogOut } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { RiCoupon2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/adminSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="admin_sidebar">
      <div className="top">
        <Link to="/admin">
          <span className="logo">VTadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin">
            <li>
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/admin/users">
            <li>
              <FaUserFriends className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/products">
            <li>
              <IoShirtSharp className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/admin/categories">
            <li>
              <BiSolidCategory className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/admin/coupons">
            <li>
              <RiCoupon2Fill className="icon" />
              <span>Coupons</span>
            </li>
          </Link>
          <Link to="/admin/orders">
            <li>
              <IoReceiptSharp className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <p className="title">ADMIN</p>
          <Link to="/admin/profile">
            <li>
              <FaUserCircle className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={handleLogout}>
            <IoLogOut className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Sidebar;
