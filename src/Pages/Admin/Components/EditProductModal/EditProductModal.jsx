import React, { useEffect, useState } from "react";
import "./EditProductModal.scss";
import axiosClient from "../../../../api/axiosClient";

const EditProductModal = (props) => {
  const product = props.product;
  const setProductEditModal = props.setProductEditModal;
  const update = props.update;
  const setUpdate = props.setUpdate;
  const [categories, setCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState(
    product.size ? product.size : []
  );
  const [selectedColors, setSelectedColors] = useState(
    product.color ? product.color : []
  );

  const [value, setValue] = useState({
    title: product.title,
    category: product.category,
    price: product.price,
    price_sale: product.price_sale,
    isSale: product.isSale,
    desc: product.desc,
    status: product.status,
  });

  useEffect(() => {
    try {
      async function getCategories() {
        const res = await axiosClient.get("category/categories");
        setCategories(res.data);
      }

      getCategories();
    } catch (e) {}
  }, []);

  const handleValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (option) => {
    if (selectedSizes.includes(option)) {
      setSelectedSizes(selectedSizes.filter((selected) => selected !== option));
    } else {
      setSelectedSizes([...selectedSizes, option]);
    }
  };

  const handleColorChange = (option) => {
    if (selectedColors.includes(option)) {
      setSelectedColors(
        selectedColors.filter((selected) => selected !== option)
      );
    } else {
      setSelectedColors([...selectedColors, option]);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.put(`product/${product._id}`, {
        ...value,
        size: selectedSizes,
        color: selectedColors,
      });
      setUpdate(!update);
      setProductEditModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="product-edit-modal-wrapper">
      <div className="product-edit-modal">
        <h1>Edit Product</h1>
        <form className="product-edit-form" onSubmit={handleUpdate}>
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
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={value.category}
                  onChange={handleValue}
                >
                  {categories &&
                    categories.map((category) => (
                      <option key={category._id} value={category.title}>
                        {category.title} - {category.tag}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-box-info-item ">
                <label htmlFor="title">Size</label>
                <div className="wrapperProductSize">
                  <div className="inpWrapperSize">
                    <input
                      id="s"
                      name="size"
                      type="checkbox"
                      checked={selectedSizes.includes("Small")}
                      onChange={() => handleSizeChange("Small")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="s">Small</label>
                  </div>
                  <div className="inpWrapperSize">
                    <input
                      id="m"
                      name="size"
                      type="checkbox"
                      checked={selectedSizes.includes("Medium")}
                      onChange={() => handleSizeChange("Medium")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="m">Medium</label>
                  </div>
                  <div className="inpWrapperSize">
                    <input
                      id="l"
                      name="size"
                      type="checkbox"
                      checked={selectedSizes.includes("Large")}
                      onChange={() => handleSizeChange("Large")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="l">Large</label>
                  </div>
                  <div className="inpWrapperSize">
                    <input
                      id="xl"
                      name="size"
                      type="checkbox"
                      onChange={() => handleSizeChange("X-Large")}
                      checked={selectedSizes.includes("X-Large")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="xl">XLarge</label>
                  </div>
                </div>
              </div>
              <div className="form-box-info-item ">
                <label htmlFor="title">Color</label>
                <div className="wrapperProductColor">
                  <div className="inpWrapperColor">
                    <input
                      id="black"
                      className="black"
                      name="color"
                      type="checkbox"
                      checked={selectedColors.includes("Black")}
                      onChange={() => handleColorChange("Black")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="black">Black</label>
                  </div>
                  <div className="inpWrapperColor">
                    <input
                      id="white"
                      className="white"
                      name="color"
                      type="checkbox"
                      checked={selectedColors.includes("White")}
                      onChange={() => handleColorChange("White")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="white">White</label>
                  </div>
                  <div className="inpWrapperColor">
                    <input
                      className="grey"
                      id="grey"
                      name="color"
                      type="checkbox"
                      checked={selectedColors.includes("Grey")}
                      onChange={() => handleColorChange("Grey")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="grey">Grey</label>
                  </div>
                  <div className="inpWrapperColor">
                    <input
                      className="blue"
                      id="blue"
                      name="color"
                      type="checkbox"
                      checked={selectedColors.includes("Blue")}
                      onChange={() => handleColorChange("Blue")}
                      placeholder="Enter Product Name"
                    />
                    <label htmlFor="blue">Blue</label>
                  </div>
                </div>
              </div>
              <div className="form-box-info-item">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={value.price}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="form-box-info-item">
                <label htmlFor="price_sale">Price Sale</label>
                <input
                  type="text"
                  name="price_sale"
                  id="price_sale"
                  value={value.price_sale}
                  onChange={handleValue}
                  required
                />
              </div>
              <div className="form-box-info-item">
                <label htmlFor="isSale">Product Is Sale</label>
                <select
                  type="text"
                  name="isSale"
                  id="isSale"
                  value={value.isSale}
                  onChange={handleValue}
                  required
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="form-box-info-item">
                <label htmlFor="status">Product Status</label>
                <select
                  type="text"
                  name="status"
                  id="status"
                  value={value.status}
                  onChange={handleValue}
                  required
                >
                  <option value={true}>Sell</option>
                  <option value={false}>Stock</option>
                </select>
              </div>
              <div className="form-box-info-item">
                <label htmlFor="desc">Description</label>
                <textarea
                  type="text"
                  name="desc"
                  id="desc"
                  value={value.desc}
                  onChange={handleValue}
                  required
                />
              </div>
            </div>
            <div className="form-box-img">
              <img src={product.image.url} alt="" />
              <p>Sorry but you cannot change the image.</p>
            </div>
          </div>
          <div className="product-edit-modal-actions">
            <div className="action-right">
              <button
                onClick={() => setProductEditModal(false)}
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

export default EditProductModal;
