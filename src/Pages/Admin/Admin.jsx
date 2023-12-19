import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./Admin.scss";

function Admin({ children }) {
  return (
    <div className="admin_page">
      <Sidebar />
      <div className="admin_page_container">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Admin;
