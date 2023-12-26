import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import './Product.scss'
import {CgShoppingCart} from "react-icons/cg";
import {GrFavorite} from "react-icons/gr";
import {FaBalanceScale} from "react-icons/fa";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(1)
    const [quantity, setQuantity] = useState(1)
    //
    const {id} = useParams()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/product/products");
                const data = await response.json();
                const foundProduct = data.find((p) => p._id === id);
                console.log(foundProduct)
                setProducts(foundProduct)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id])

    // const {title, category, price, desc} = products || {};
    // const image = products.image.url
    // console.log(image[0])

    return (
        <div className="product ">
            <div className=" mx-auto max-w-screen-2xl px-4 pb-16 pt-10 sm:px-5 lg:max-w-7xl">
                <div className="images1">
                    {/*<img src={image?.[0]} alt={title} onClick={()=>setSelectedImg(0)}/>*/}
                    {/*<img src={image?.[1]} alt={title} onClick={()=>setSelectedImg(1)}/>*/}
                    {/*<img src={image?.[2]} alt={title} onClick={()=>setSelectedImg(2)}/>*/}
                    {/*<img src={image?.[3]} alt={title} onClick={()=>setSelectedImg(3)}/>*/}
                </div>
                <div className="mainImg">
                    <img src={products?.image?.url} loading={"lazy"} alt={products.title}
                         className={'h-full w-full object-cover object-center'}/>
                    {/*<img src={image?.[selectedImg]} loading={"lazy"} alt="title"/>*/}
                </div>
            </div>
            <div className="right mt-4 lg:row-span-3 lg:mt-7">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products.title}</h1>
                <span className="text-3xl tracking-tight text-gray-900">{products.price?.toLocaleString()} VND</span>
                <p>{products.desc}</p>
                <div className="quantity">
                    <button onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() =>
                        setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className={'add'}>
                    <CgShoppingCart/>
                    Add to Cart
                </button>
                <hr/>
                <div className="links">
                    <div className="item">
                        <GrFavorite/> Add to Wishlist
                    </div>
                    <div className="item">
                        <FaBalanceScale/> Add to Compare
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: ...</span>
                    <span>Product Type: {products.category}</span>
                    <span>Tag: ...</span>
                </div>
                <hr/>
                <div className="details">
                        <span className={'my-3'}>Desc2
                        <hr/>
                            {products.desc}
                        </span>
                    <hr/>
                    <span className={'my-3'}>Addition info</span>
                    <hr/>
                    <span className={'my-3'}>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;