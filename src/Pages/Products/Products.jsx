import React, {useEffect, useState} from 'react';

import './Products.scss'
import {Link, useParams} from "react-router-dom";
import BlankItem from "../../components/BlankItem.jsx";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useStateProducts from "../../ReuseHook/useStateProducts.jsx";
import useStateTag from "../../ReuseHook/useStateTag.jsx";

const Products = () => {
    const { tag } = useParams();
    // const initMaxPrice = parseInt('1000').toLocaleString();
    // const [maxPrice, setMaxPrice] = useState(initMaxPrice);

    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [objectsToShow, setToShow] = useState([])

    useStateTag(tag, setCategory)
    useStateProducts(setProduct, category , setToShow)

    const [visible, setVisible] = useState(4);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue +4)
    }

    const [categoryFilters, setCategoryFilters] = useState(new Set());

    function updateFilters(checked, categoryFilter) {
        if (checked)
            setCategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
            setCategoryFilters((prev) => {
                const next = new Set(prev);
                next.delete(categoryFilter);
                return next;
            });
    }

    const filteredProducts =
        categoryFilters.size === 0
            ? objectsToShow
            : objectsToShow.filter((p) => categoryFilters.has(p.category));

    const compare = (a, b, ascendingOrder) => {
        if (a < b) {
            return ascendingOrder ? -1 : 1;
        }
        if (a > b) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
    }
    const handleChange = (value) => {
        if(value === 'none' || value === null){
            setToShow([...product])
        } else {
            let toType, toAscending
            switch(value){
                case 'ascending' : toType = true; toAscending = true; break;
                case 'descending' : toType = true; toAscending = false; break;
                case 'high' : toType = false; toAscending = true; break;
                case 'low' : toType = false; toAscending = false; break;
                default:
                    toType = true;
                    toAscending = true;
            }
            let current = [...product]
            current.sort((a, b) => toType ?
                compare(a.title, b.title, toAscending)
                :
                compare(a.price, b.price, toAscending))
            setToShow([...current])
        }
    }

    return (
        <div className={'products'}>

            <div className="left shadow px-5 pt-5">
                <div className="filterItem">
                    <h2><b>Product Category</b></h2>
                    {
                        category?.map((cat) => (
                            <div className="inputItem" key={cat._id}>
                                <input type="checkbox"
                                       onChange={(e) => updateFilters(e.target.checked, cat.title)}
                                       id={cat._id} value={cat._id} className={'text-green-500'}/>
                                <label htmlFor={cat._id} className={'select-none'}>{cat.title}</label>

                            </div>
                        ))
                    }
                </div>
                {/*<div className="filterItem">*/}
                {/*    <h2><b>Filter by Price</b></h2>*/}
                {/*    <div className="inputItem">*/}
                {/*        <span>0</span>*/}

                {/*        <input type="range" min={1} max={(1000)}*/}
                {/*               onChange={(e) => setMaxPrice(e.target.value)}/>*/}
                {/*        <span>{maxPrice},000 VND</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="right col-span-2 flex flex-row">
                <div className={'ancestralRow flex flex-row-reverse mb-3'}>

                    <FormControl sx={{m: 1, minWidth: 120}}>
                        <InputLabel htmlFor="grouped-select">Sắp xếp...</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Grouping"
                                onChange={(e) => handleChange(e.target.value)}>
                            <MenuItem value="">
                                <em>Mặc định</em>
                            </MenuItem>
                            <ListSubheader>Theo tên</ListSubheader>
                            <MenuItem value="ascending">A-Z</MenuItem>
                            <MenuItem value="descending">Z-A</MenuItem>
                            <ListSubheader>Theo giá</ListSubheader>
                            <MenuItem value="high">Giá thấp nhất</MenuItem>
                            <MenuItem value="low">Giá cao nhất</MenuItem>
                        </Select>
                    </FormControl>
                    <h1 className={'mr-48 text-5xl capitalize'}><b>{tag}</b></h1>
                </div>
                <div className={'firstRow row-span-1 grid grid-rows-3'}>
                    {
                        filteredProducts && filteredProducts?.slice(0, visible).map((prod) => {
                            return (
                                <>
                                    <Link to={`/women/${prod._id}`} className={'link rounded-2xl'}
                                          key={prod._id}>
                                        <div className={'card1 grid grid-cols-1'}>
                                        {/*    <div className="image">*/}
                                        {/*        /!*{item.isNew && <span>New Season</span>}*!/*/}
                                        {/*        <img src={prod?.image?.url} alt="" className={'mainImg w-full h-full object-cover'} />*/}
                                        {/*        <img src={prod?.image?.url} alt="" className={'subImg hidden'} />*/}
                                        {/*    </div>*/}
                                        {/*    <div className="info">*/}
                                        {/*        <h2 className="text-xl font-bold mb-2">{prod.title}</h2>*/}
                                        {/*        <div className="prices">*/}
                                        {/*            {Number(prod.price_sale) > 0 ? (*/}
                                        {/*                <>*/}
                                        {/*                    <h3 className={'line-through text-red-400 italic'}>*/}
                                        {/*                        {prod?.price.toLocaleString()} VND*/}
                                        {/*                    </h3>*/}
                                        {/*                    <br/>*/}
                                        {/*                    <h3>{prod.price_sale.toLocaleString()} VND</h3>*/}
                                        {/*                </>*/}
                                        {/*            ) : (*/}
                                        {/*                <h3>{prod.price.toLocaleString()} VND</h3>*/}
                                        {/*            )}*/}
                                        {/*        </div>*/}
                                        {/*        <p className={'descText'}*/}
                                        {/*        >{prod.desc}</p>*/}
                                        {/*    </div>*/}

                                        <div
                                            className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                                               href={`/women/${prod._id}`}>
                                                <img className="object-cover w-80"
                                                     src={prod?.image?.url}
                                                     alt="product image"/>
                                                {Number(prod?.price_sale) > 0 ?
                                                    (
                                                    <span
                                                        className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{Math.floor(Number((prod.price - prod.price_sale)/prod.price*100))}% OFF</span>

                                                    )
                                                    :
                                                    (
                                                        <></>
                                                    )
                                                }

                                            </a>
                                            <div className="mt-4 px-5 pb-5">
                                                <a href={`/women/${prod._id}`}>
                                                    <h5 className="prodName text-xl tracking-tight text-slate-900 font-semibold">{prod.title}</h5>
                                                </a>
                                                <div className="mt-2 mb-5 flex items-center justify-between">
                                                    <p>
                                                        {Number(prod?.price_sale) > 0 ? (
                                                            <>
                                                                <span
                                                                    className="text-xl text-slate-900 font-bold text-right">{prod?.price_sale?.toLocaleString()} VND</span>
                                                                <br/>
                                                                <span
                                                                    className=" text-sm text-slate-900 text-right line-through">{prod?.price?.toLocaleString()} VND</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span
                                                                    className="text-xl font-bold text-slate-900 text-right">{prod?.price?.toLocaleString()} VND</span>
                                                                <br/>
                                                                <span
                                                                    className="text-sm line-through text-white select-none text-right">{prod?.price?.toLocaleString()} VND</span>
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                                <a href={`/women/${prod._id}`}
                                                   className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                         strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                                    </svg>
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                        </div>
                                    </Link>
                                </>
                            );
                        })
                    }
                    {!filteredProducts || filteredProducts.length === 0 &&
                        <div className={'row-span-1 mb-4 mr-4'}>
                            <BlankItem/>
                        </div>}
                </div>
                <div className={'secondRow row-span-1'}>
                    <button
                        className="loadMore content-between bg-transparent hover:bg-red-500
                            text-red-500 font-semibold hover:text-white py-2 px-4 mb-4 border
                            border-red-500 hover:border-transparent rounded"
                        onClick={showMoreItems}>
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
