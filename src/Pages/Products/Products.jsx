import React, {useEffect, useState} from 'react';

import './Products.scss'
import {Link} from "react-router-dom";
import BlankItem from "../../components/BlankItem.jsx";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Products = () => {

    // const initMaxPrice = parseInt('1000').toLocaleString();
    // const [maxPrice, setMaxPrice] = useState(initMaxPrice);

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/category/categories");
                const data = await response.json();
                setCategory(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [])

    const [product, setProduct] = useState([]);

    const [visible, setVisible] = useState(4);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue +4)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/product/products`);
                const data = await response.json();
                setProduct(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [])

    const [categoryFilters, setCategoryFilters] = useState(new Set());
    const [objectsToShow, setToShow] = useState(product)
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
                {/*<img className={'catImg'} src="" alt=""/>*/}
                <div className={'ancestralRow flex flex-row-reverse mb-3'}>
                    {/*<DropDown/>*/}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="grouped-select">Sort item</InputLabel>
                        <Select defaultValue="" id="grouped-select" label="Grouping"
                                onChange={(e) => handleChange(e.target.value)}>
                            <MenuItem value="">
                                <em >Default</em>
                            </MenuItem>
                            <ListSubheader>BY NAME</ListSubheader>
                            <MenuItem value="ascending">Alphabetically, A-Z</MenuItem>
                            <MenuItem value="descending">Alphabetically, Z-A</MenuItem>
                            <ListSubheader>BY PRICE</ListSubheader>
                            <MenuItem value="high">Low to high</MenuItem>
                            <MenuItem value="low">High to low</MenuItem>
                        </Select>
                    </FormControl>

                    {/*<select*/}
                    {/*    defaultValue={'none'}*/}
                    {/*    onChange={(e) => handleChange(e.target.value)}>*/}
                    {/*    <option value="none">Default</option>*/}
                    {/*    <option value="ascending">Alphabetically, A-Z</option>*/}
                    {/*    <option value="descending">Alphabetically, Z-A</option>*/}
                    {/*    <option value="high">Low to high</option>*/}
                    {/*    <option value="low">High to low</option>*/}
                    {/*</select>*/}
                </div>
                <div className={'firstRow row-span-1 grid grid-rows-3 gap-4'}>
                    {
                        filteredProducts && filteredProducts?.slice(0, visible).map((prod) => {
                            return (
                                <>
                                <Link to={`/women/${prod._id}`} className={'link shadow rounded-2xl'} key={prod._id}>
                                                    <div className={'card1 grid grid-cols-4'}>
                                                        <div className="image">
                                                            {/*{item.isNew && <span>New Season</span>}*/}
                                                            <img src={prod?.image?.url} alt="" className={'mainImg w-full h-full object-cover'} />
                                                            <img src={prod?.image?.url} alt="" className={'subImg hidden'} />
                                                        </div>
                                                        <div className="info">
                                                            <h2 className="text-xl font-bold mb-2">{prod.title}</h2>
                                                            <div className="prices">
                                                                {Number(prod.price_sale) > 0 ? (
                                                                    <>
                                                                        <h3 className={'line-through text-red-400 italic'}>
                                                                            ${prod?.price.toLocaleString()}
                                                                        </h3>
                                                                        <h3>${prod.price_sale.toLocaleString()}</h3>
                                                                    </>
                                                                ) : (
                                                                    <h3>${prod.price.toLocaleString()}</h3>
                                                                )}
                                                            </div>
                                                            <p className={'descText'}
                                                            >{prod.desc}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </>
                                );
                            })
                        }
                        {!filteredProducts || filteredProducts.length === 0 &&
                            <div className={'row-span-1 mb-4 mr-4'}>
                            <BlankItem />
                            </div>}
                    </div>
                <div className={'secondRow row-span-1'}>
                        <button
                            className="loadMore content-between bg-transparent hover:bg-red-500
                            text-red-500 font-semibold hover:text-white py-2 px-4 mb-4 border
                            border-red-500 hover:border-transparent rounded"
                            onClick={showMoreItems} >
                            Load More
                        </button>
                    </div>
            </div>
        </div>

    );
};

export default Products;
