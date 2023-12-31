import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './Product.scss'
import {CgShoppingCart} from "react-icons/cg";
import {GrFavorite} from "react-icons/gr";
import {FaBalanceScale} from "react-icons/fa";
import {StarIcon} from "@heroicons/react/20/solid/index.js";
import {RadioGroup} from "@headlessui/react";
import {Avatar, Chip, Stack} from "@mui/material";

const Product = () => {
    const defaultProduct = {
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: false },
            { name: 'XL', inStock: true },
        ],
    }
    let min = 20;
    let max = 60;
    let random1 =
        Math.floor(Math.random() * (+5 + 1 - +0)) + +0;
    let random2 =
        Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    const reviews = { href: '#', average: random1, totalCount: random2 }

    // const [selectedImg, setSelectedImg] = useState(1)
    const [quantity, setQuantity] = useState(1)
    //
    const {id} = useParams()
    // const {idByName} = useParams()
    // console.log(idByName)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/product/products");
                const data = await response.json();

                const foundProduct = data.find((p) => p._id === id);

                if (foundProduct) {
                    setProducts(foundProduct)
                } else {
                    console.log("Product not found");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().then(() => console.log());
    }, [id]);



    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    // const {title, category, price, desc} = products || {};
    // const image = products.image.url
    // console.log(image[0])

    const [selectedColor, setSelectedColor] = useState([])
    const [selectedSize, setSelectedSize] = useState([])

        const handleSubmit = (e) => {
            e.preventDefault();

        };
    return (
        <div className="product grid grid-cols-3">
            <div className="left px-4 pb-16 pt-10 sm:px-5 col-span-2">
                <div className="images1">
                    {/*<img src={image?.[0]} alt={title} onClick={()=>setSelectedImg(0)}/>*/}
                    {/*<img src={image?.[1]} alt={title} onClick={()=>setSelectedImg(1)}/>*/}
                    {/*<img src={image?.[2]} alt={title} onClick={()=>setSelectedImg(2)}/>*/}
                    {/*<img src={image?.[3]} alt={title} onClick={()=>setSelectedImg(3)}/>*/}
                </div>
                <div className="mainImg">
                    <img src={products?.image?.url} loading={"lazy"} alt={products?.title}
                         className={'bigImage'}/>
                    {/*<img src={image?.[selectedImg]} loading={"lazy"} alt="title"/>*/}
                </div>
            </div>
            <div className="right mt-4 lg:row-span-3 lg:mt-7 col-span-1">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products?.title}</h1>
                <span className="text-3xl tracking-tight text-gray-900">{products?.price?.toLocaleString()} VND</span>
                {/* Reviews */}
                <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className={classNames(
                                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                        'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                        <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {reviews.totalCount} reviews
                        </a>
                    </div>
                </div>
                <p>{products?.desc}</p>
                <button
                    type="submit"
                    className="button mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600
                    px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <CgShoppingCart/>
                    Add to cart
                </button>

                <form className="mt-10" onSubmit={handleSubmit}>
                    <div className="quantity">
                        <button onClick={() =>
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-
                        </button>
                        {quantity}
                        <button onClick={() =>
                            setQuantity((prev) => prev + 1)}>+
                        </button>
                    </div>
                    {/* Colors */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mt-4">Color</h3>
                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                                {defaultProduct.colors.map((color) => (
                                    <RadioGroup.Option
                                        key={color.name}
                                        value={color}
                                        className={({active, checked}) =>
                                            classNames(
                                                color.selectedClass,
                                                active && checked ? 'ring ring-offset-1' : '',
                                                !active && checked ? 'ring-2' : '',
                                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                            )
                                        }
                                    >
                                        <RadioGroup.Label as="span" className="sr-only">
                                            {color.name}
                                        </RadioGroup.Label>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                color.class,
                                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                                            )}
                                        />
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                    <hr className={'pt-3'}/>
                    {/* Sizes */}
                    <div className="mt-10">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">Size</h3>
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                            </a>
                        </div>

                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                {defaultProduct.sizes.map((size) => (
                                    <RadioGroup.Option
                                        key={size.name}
                                        value={size}
                                        disabled={!size.inStock}
                                        className={({active}) =>
                                            classNames(
                                                size.inStock
                                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                active ? 'ring-2 ring-indigo-500' : '',
                                                'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                            )
                                        }
                                    >
                                        {({active, checked}) => (
                                            <>
                                                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                {size.inStock ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'border' : 'border-2',
                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                            'pointer-events-none absolute -inset-px rounded-md'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    >
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke"/>
                                </svg>
                              </span>
                                                )}
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </form>
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
                    {/*<span>Product Type: {products?.category}</span>*/}

                    <Stack direction="row" spacing={1}>
                    <Chip
                    avatar={<Avatar alt="Natacha" src="" />}
                    label={products?.category}
                    variant="outlined"
                    />
                    </Stack>

                </div>
            </div>

        </div>
    );
};

export default Product;