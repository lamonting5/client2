import React, { Fragment, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./NewProduct.scss";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

const NewProduct = () => {
  const [productImg, setProductImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState({
    title: "",
    image: "",
    price: 0,
    price_sale: 0,
    isSale: false,
    desc: "",
    category: "",
    status: true,
  });
  const navigate = useNavigate();

  console.log(selectedSizes);
  console.log(selectedColors);

  useEffect(() => {
    try {
      async function getCategories() {
        const res = await axiosClient.get("category/categories");
        setCategories(res.data);
      }

      getCategories();
    } catch (e) {}
  }, []);

  useEffect(() => {
    return () => {
      productImg && URL.revokeObjectURL(productImg);
    };
  }, [productImg]);

  const handlePreImage = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    setProductImg(img);
    setValue({ ...value, image: e.target.files[0] });
  };

  const handleRemovePreImage = () => {
    setProductImg(null);
    URL.revokeObjectURL(productImg);
  };

  const handleChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    setValue({
      title: "",
      image: "",
      price: 0,
      price_sale: 0,
      isSale: false,
      desc: "",
      category: "",
      status: true,
    });
    setProductImg(null);
    setSelectedSizes([]);
    setSelectedColors([]);
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

  const handleUploadProduct = async (e) => {
    e.preventDefault();
    !productImg && alert("You need image to create a new product");
    const data = new FormData();
    data.append("title", value.title);
    data.append("category", value.category);
    data.append("image", value.image);
    data.append("desc", value.desc);
    data.append("price_sale", value.price_sale);
    data.append("price", value.price);
    data.append("status", value.status);
    data.append("isSale", value.isSale);
    selectedSizes.forEach((item) => data.append("size[]", item));
    selectedColors.forEach((item) => data.append("color[]", item));

    setIsLoading(true);
    try {
      await axiosClient.post("product/create", data, {
        "content-type": "multipart/form-data",
      });
      navigate("/admin/products");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="newProduct">
      <div className="header">
        <Link to="/admin/products" className="icon">
          <FaArrowLeftLong />
        </Link>
        <div className="info">
          <h3>Back to List</h3>
          <h1>Add New Product</h1>
        </div>
      </div>
      <div className="newProductContainer">
        <div className="productImage">
          <h1 className="title">Product Image</h1>
          {!productImg ? (
            <label htmlFor="image" className="upload-noImage">
              <input
                type="file"
                className="inp-image"
                name="image"
                id="image"
                onInput={handlePreImage}
              />
              <label htmlFor="image">
                <FaCloudUploadAlt className="upload-icon" />
              </label>
              <h3>Click on to upload image !</h3>
            </label>
          ) : (
            <Fragment>
              <div className="imgWrapper">
                <img src={productImg} alt="" className="product-image" />
                <div className="image-action">
                  <input
                    type="file"
                    className="inp-image"
                    name="image"
                    id="image"
                    onInput={handlePreImage}
                  />
                  <label htmlFor="image" className="btnReplace">
                    Replace
                  </label>
                  <button className="btnRemove" onClick={handleRemovePreImage}>
                    Remove
                  </button>
                </div>
              </div>
            </Fragment>
          )}
        </div>
        <div className="generalProduct">
          <h1 className="title">General Infomation</h1>
          <form className="productForm" onSubmit={handleUploadProduct}>
            <div className="inpWrapper">
              <label>Product Name</label>
              <input
                required
                name="title"
                type="text"
                disabled={isLoading}
                value={value.title}
                onChange={handleChangeValue}
                placeholder="Enter Product Name"
              />
            </div>
            <div className="inpWrapper ">
              <label>Product Size</label>
              <div className="wrapperProductSize">
                <div className="inpWrapperSize">
                  <input
                    id="s"
                    name="size"
                    type="checkbox"
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
                    onChange={() => handleSizeChange("X-Large")}
                    checked={selectedSizes.includes("X-Large")}
                    placeholder="Enter Product Name"
                  />
                  <label htmlFor="xl">X-Large</label>
                </div>
              </div>
            </div>
            <div className="inpWrapper">
              <label>Product Color</label>
              <div className="wrapperProductColor">
                <div className="inpWrapperColor">
                  <input
                    id="black"
                    className="black"
                    name="color"
                    type="checkbox"
                    checked={selectedColors.includes("Black")}
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
                    checked={selectedColors.includes("Blue")}
                    onChange={() => handleColorChange("Blue")}
                    placeholder="Enter Product Name"
                  />
                  <label htmlFor="blue">Blue</label>
                </div>
              </div>
            </div>
            <div className="inpWrapper">
              <label>Product Category</label>
              <select
                name="category"
                disabled={isLoading}
                value={value.category}
                onChange={handleChangeValue}
              >
                {categories &&
                  categories.map((category) => (
                    <option key={category._id} value={category.title}>
                      {category.title} - {category.tag}
                    </option>
                  ))}
              </select>
            </div>
            <div className="inpPriceWrapper">
              <div className="inpWrapper">
                <label>Product Price</label>
                <input
                  required
                  name="price"
                  type="number"
                  disabled={isLoading}
                  value={value.price}
                  onChange={handleChangeValue}
                  placeholder="Enter Product Price"
                />
              </div>
              <div className="inpWrapper">
                <label>
                  Product Sale Price <span>Optional</span>
                </label>
                <input
                  name="price_sale"
                  type="number"
                  disabled={isLoading}
                  value={value.price_sale}
                  onChange={handleChangeValue}
                  placeholder="Enter Product Sale Price"
                />
              </div>
              <div className="inpWrapper">
                <label>Product is Sale </label>
                <select
                  name="isSale"
                  disabled={isLoading}
                  value={value.isSale}
                  onChange={handleChangeValue}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className="inpWrapper">
              <label>Product Descriptions</label>
              <textarea
                required
                name="desc"
                disabled={isLoading}
                type="text"
                value={value.desc}
                onChange={handleChangeValue}
                placeholder="Enter Product Description"
              />
            </div>
            <div className="inpWrapper">
              <label>Product Status</label>
              <select
                name="status"
                required
                disabled={isLoading}
                value={value.status}
                onChange={handleChangeValue}
              >
                <option value={true}>Sell</option>
                <option value={false}>Stock</option>
              </select>
            </div>
            <div className="form-action">
              <button type="button" className="btnReset" onClick={handleReset}>
                Reset
              </button>
              <button className="btnUpload">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
