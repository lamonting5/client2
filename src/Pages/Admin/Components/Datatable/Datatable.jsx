import React from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "categoryName", headerName: "Category Name", flex: 3 },
  { field: "subCategory", headerName: "SubCategory", flex: 3 },
];

const rows = [
  {
    id: 1,
    categoryName: "Quần",
    subCategory: ["Quần Bò", "Quần Vải", "Quần Nhung"],
  },
  { id: 2, categoryName: "Áo", subCategory: ["Áo Len", "Áo Khoác"] },
  { id: 3, categoryName: "Túi", subCategory: ["Balo", "Túi Xách"] },
  {
    id: 4,
    categoryName: "Đồ Trẻ Em",
    subCategory: ["Balo", "Túi Xách"],
  },
];

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <div className="cellAction">
            <button
              className="editBtn"
              onClick={() => {
                alert("edit");
              }}
            >
              Edit
            </button>
            <button className="deleteBtn">Delete</button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default Datatable;
