import React, { useEffect, useState } from "react";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminCategory.scss";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

const AdminCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await axiosClient.get("category/categories");
      setCategories(res.data);
    }

    getCategories();
  }, [update]);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Category Title", flex: 1 },
    { field: "tag", headerName: "Category Tag", flex: 1 },
  ];

  return (
    <div className="categoryPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Catergories</h2>
          <h3 className="desc">
            This website has <span>{categories.length} </span>categories
            available
          </h3>
        </div>
        <button
          className="newCategoryBtn"
          onClick={() => {
            navigate("/admin/categories/new");
          }}
        >
          New Category
          <span className="icon">
            <TiPlus />
          </span>
        </button>
      </div>
      <Datatable
        update={update}
        setUpdate={setUpdate}
        type="category"
        columns={columns}
        rows={categories}
      />
    </div>
  );
};

export default AdminCategory;
