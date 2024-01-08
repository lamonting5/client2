import { TiPlus } from "react-icons/ti";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminUser.scss";
import { useEffect, useState } from "react";
import axiosClient from "../../../../api/axiosClient";

function AdminUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await axiosClient.get("auth/users");
      setUsers(res.data);
    }

    getUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "username", headerName: "Username", flex: 2 },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
  ];

  return (
    <div className="userPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Users</h2>
          <h3 className="desc">
            This website has <span>{users.length} </span>users available
          </h3>
        </div>
      </div>
      <Datatable columns={columns} rows={users} />
    </div>
  );
}

export default AdminUser;
