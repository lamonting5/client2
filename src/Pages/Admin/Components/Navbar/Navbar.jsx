import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <div className="admin_navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BsSearch />
        </div>
        <div className="items">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
