import React, { useState } from "react";
import "./EditCategoryModal.scss";
import axiosClient from "../../../../api/axiosClient";

const EditCategoryModal = (props) => {
  const category = props.category;
  const setCategoryEditModal = props.setCategoryEditModal;
  const update = props.update;
  const setUpdate = props.setUpdate;

  const [value, setValue] = useState({
    title: category.title,
    tag: category.tag,
  });

  const handleValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.put(`category/${category._id}`, value);
      setUpdate(!update);
      setCategoryEditModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="category-edit-modal-wrapper">
      <div className="category-edit-modal">
        <h1>Edit Category</h1>
        <form className="category-edit-form" onSubmit={handleUpdate}>
          <div className="form-box">
            <div className="form-box-info">
              <div className="form-box-info-item">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={value.title}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="form-box-info-item">
                <label htmlFor="tag">Tag</label>
                <input
                  type="text"
                  name="tag"
                  id="tag"
                  value={value.tag}
                  onChange={handleValue}
                />
              </div>
            </div>
          </div>
          <div className="category-edit-modal-actions">
            <div className="action-right">
              <button
                onClick={() => setCategoryEditModal(false)}
                className="btn-cancle"
                type="button"
              >
                Cancel
              </button>
              <button type="submit" className="btn-save" onClick={handleUpdate}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;
