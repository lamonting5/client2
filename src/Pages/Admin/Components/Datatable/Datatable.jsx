import React, { useEffect, useState } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import axiosClient from "../../../../api/axiosClient";
import EditProductModal from "../EditProductModal/EditProductModal";
import EditCategoryModal from "../EditCategoryModal/EditCategoryModal";
import EditCouponModal from "../EditCouponModal/EditCouponModal";

const Datatable = ({
  columns,
  rows,
  hasImage = false,
  type,
  update,
  setUpdate,
}) => {
  const [objID, setObjId] = useState(null);
  const [productEditModal, setProductEditModal] = useState(false);
  const [categoryEditModal, setCategoryEditModal] = useState(false);
  const [couponEditModal, setCouponEditModal] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [couponDetail, setCouponDetail] = useState(null);
  const [categoryDetail, setCategoryDetail] = useState(null);
  const [objDeleteModal, setObjDeleteModal] = useState(false);

  useEffect(() => {
    async function getDetailProduct() {
      const res = await axiosClient.get(`product/product/${objID}`);
      setProductDetail(res.data);
    }

    async function getDetailCategory() {
      const res = await axiosClient.get(`category/category/${objID}`);
      setCategoryDetail(res.data);
    }

    async function getDetailCoupon() {
      const res = await axiosClient.get(`coupon/coupon/${objID}`);
      setCouponDetail(res.data);
    }

    if (objID && type == "product") {
      getDetailProduct();
    }

    if (objID && type == "category") {
      getDetailCategory();
    }

    if (objID && type == "coupon") {
      getDetailCoupon();
    }

    return () => {
      setProductDetail(null);
      setCategoryDetail(null);
      setCouponDetail(null);
    };
  }, [objID, update]);

  const handleDelete = async () => {
    try {
      if (type == "product") {
        await axiosClient.delete(`product/${objID}`);
      }

      if (type == "category") {
        await axiosClient.delete(`category/${objID}`);
      }

      if (type == "coupon") {
        await axiosClient.delete(`coupon/${objID}`);
      }
      setUpdate(!update);
      setObjDeleteModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button
              className="editBtn"
              onClick={() => {
                setObjId(params.id);
                if (type == "product") {
                  setProductEditModal(true);
                }

                if (type == "category") {
                  setCategoryEditModal(true);
                }

                if (type == "coupon") {
                  setCouponEditModal(true);
                }
              }}
            >
              Edit
            </button>
            <button
              className="deleteBtn"
              onClick={() => {
                setObjId(params.id);
                setObjDeleteModal(true);
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      {objDeleteModal && (
        <div className="post-confirm-delete-wrapper">
          <div className="post-confirm-delete-modal">
            <h1>Are you sure?</h1>
            <p>You cannot redo this action after delete it!</p>
            <div className="actions">
              <button
                className="btn-cancle"
                onClick={() => {
                  setObjDeleteModal(false);
                }}
              >
                Cancle
              </button>
              <button
                className="btn-delete"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {productEditModal && productDetail && (
        <EditProductModal
          product={productDetail}
          setProductEditModal={setProductEditModal}
          setUpdate={setUpdate}
          update={update}
        />
      )}

      {categoryEditModal && categoryDetail && (
        <EditCategoryModal
          category={categoryDetail}
          setCategoryEditModal={setCategoryEditModal}
          setUpdate={setUpdate}
          update={update}
        />
      )}

      {couponEditModal && couponDetail && (
        <EditCouponModal
          coupon={couponDetail}
          setCouponEditModal={setCouponEditModal}
          setUpdate={setUpdate}
          update={update}
        />
      )}
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        rowHeight={hasImage ? 230 : 60}
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
