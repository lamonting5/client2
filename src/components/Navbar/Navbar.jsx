import React from "react";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SubNav from "./SubNav.jsx";
import logo from '/images/logo.png'

const Navbar = () => {
    const user = useSelector((state) => state.user.user);
    return (
        <div className="navbar">
            <div className="main_nav">
                <Link to={"/"}><img src={logo} alt="brand_logo" className="brand_logo"/></Link>
                <div className="main_nav_actions">
                <div className="action">
                        <MdOutlineFavoriteBorder className="icon" />
                        <h3>Yêu thích</h3>
                    </div>
                    <div className="action">
                        <RiShoppingBag3Line className="icon" />
                        <h3>Giỏ hàng ({0})</h3>
                    </div>
                    <Link to={user ? "/profile" : "/auth"}>
                        <div className="action">
                            <LuUser2 className="icon" />
                            <h3>{user ? user.user.username : "Đăng nhập"}</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="sub_nav">
                <SubNav/>
            </div>
            {/*<BasicBreadcrumbs/>*/}
        </div>
    );
};

export default Navbar;
