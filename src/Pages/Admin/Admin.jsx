import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./Admin.scss";

function Admin() {
  return (
    <div className="admin_dashboard">
      <Sidebar />
      <div className="admin_dashboard_container">
        <Navbar />
        Container
      </div>
    </div>
  );
}

export default Admin;
