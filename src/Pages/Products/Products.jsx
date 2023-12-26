import React, {useEffect, useState} from 'react';

import './Products.scss'
import List from "../../components/List/List.jsx";
import {useParams} from "react-router-dom";
const Products = () => {

    const catId = parseInt(useParams().id);
    const initMaxPrice = parseInt('100000').toLocaleString();
    const [maxPrice, setMaxPrice] = useState(initMaxPrice);
    const [sort, setSort] = useState(null);

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/category/categories");
                const data = await response.json();
                console.log(data)
                setProduct(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [])


    return (
        <div className={'products'}>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Category</h2>
                    {
                        product.map((cat) => (
                            <div className="inputItem" key={cat._id}>
                                <input type="checkbox" id={cat._id} value={cat._id} className={'text-green-500'}/>
                                <label htmlFor={cat._id} className={'select-none'}>{cat.title}</label>

                            </div>
                        ))
                    }
                    {/*<div className="inputItem">*/}
                    {/*    <input type="checkbox" id={'1'} value={1}/>*/}
                    {/*    <label htmlFor="1">Shoes</label>*/}
                    {/*</div>*/}
                    {/*<div className="inputItem">*/}
                    {/*    <input type="checkbox" id={'2'} value={2}/>*/}
                    {/*    <label htmlFor="2">Skirts</label>*/}
                    {/*</div>*/}
                    {/*<div className="inputItem">*/}
                    {/*    <input type="checkbox" id={'3'} value={3}/>*/}
                    {/*    <label htmlFor="3">Coats</label>*/}
                    {/*</div>*/}
                </div>
                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span>0</span>

                        <input type="range" min={1} max={1000000}
                               onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id={'asc'} value={'asc'} name={'price'}
                               onChange={() => setSort("asc")}/>
                        <label htmlFor={'asc'}> Price (Low to High)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id={'desc'} value={'desc'} name={'price'}
                               onChange={() => setSort("asc")}/>
                        <label htmlFor={'desc'}> Price (High to Low)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className={'catImg'} src="" alt=""/>
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    );
};

export default Products;