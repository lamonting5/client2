import React, {useEffect, useState} from 'react';
import './FeaturedProducts.scss'
import Card from "../Card/Card.jsx";

const FeaturedProducts = ({type}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product/products")
            .then(res => res.json())
            .then(data => {
                console.log(products)
                setProducts(data)
            })
    }, [])
    const News = products.filter((item) => item.status === true).slice(0,3)
    console.log(News)
    return (
        <div className={'featuredProducts'}>
            <div className="top">
                <h1>{type} products</h1>
                <p>Text</p>
            </div>
            <div className="bottom">
                {
                    News.map(item=>(
                        <Card item={item} key={item.id}/>
                    ))
                }

            </div>
        </div>
    );
};

export default FeaturedProducts;