import "./Navbar.scss";

import { BsSearch } from "react-icons/bs";
import { FaRegMoon, FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="admin_navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <span className="icon">
            <BsSearch />
          </span>
        </div>
        <div className="items">
          <div className="item">
            <FaRegMoon className="icon" />
          </div>
          <div className="item">
            <FaRegBell className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <GiHamburgerMenu className="icon" />
          </div>
          <div className="item">
            <img
              src="https://i.pinimg.com/236x/f7/ea/ed/f7eaedf50f3b7d6028599a6200b1417a.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
