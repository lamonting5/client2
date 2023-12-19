import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import './Product.scss'
import {CgShoppingCart} from "react-icons/cg";
import {GrFavorite} from "react-icons/gr";
import {FaBalanceScale} from "react-icons/fa";

const Products = () => {
    const [selectedImg, setSelectedImg] = useState(1)
    const [quantity, setQuantity] = useState(1)
    //
    const {id} = useParams()
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     // Scroll to the top when the component mounts
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                const product = data.filter((p) => {
                    return p.id === parseInt(id);
                })
                // console.log(product)
                setProducts(product[0])
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id])

    const {title, category, price, images} = products || {};
    const image = products.image
    // console.log(image[0])

    return (
            <div className="product">
                <div className="left">
                    <div className="images">
                        <img src={image?.[0]} alt={title} onClick={()=>setSelectedImg(0)}/>
                        <img src={image?.[1]} alt={title} onClick={()=>setSelectedImg(1)}/>
                    </div>
                    <div className="mainImg">
                        <img src={image?.[selectedImg]} alt="title"/>
                    </div>
                </div>
                <div className="right">
                    <h1>{title}</h1>
                    <span>{price}</span>
                    <p>Desc</p>
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
                        <span>Product Type: {category}</span>
                        <span>Tag: ...</span>
                    </div>
                    <hr/>
                    <div className="details">
                        <span className={'my-3'}>Desc2</span>
                        <hr/>
                        <span className={'my-3'}>Addition info</span>
                        <hr/>
                        <span className={'my-3'}>FAQ</span>
                    </div>
                </div>
            </div>
    );
};

export default Products;