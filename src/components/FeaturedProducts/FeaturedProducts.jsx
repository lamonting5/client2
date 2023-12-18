import React, {useEffect, useState} from 'react';
import './FeaturedProducts.scss'
import Card from "../Card/Card.jsx";

const FeaturedProducts = ({type}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const News = products.filter((item) => item.status === "New Arrival");
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