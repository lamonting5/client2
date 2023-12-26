import React, {useEffect, useState} from 'react';
import './List.scss'
import Card from "../Card/Card.jsx";
const List = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product/products")
            .then(res => res.json())
            .then(data => {
                console.log(products)
                setProducts(data)
            })
    }, [])
    return (
        <div className={'list'}>
            {
                products.map(item=>(
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
    );
};

export default List;