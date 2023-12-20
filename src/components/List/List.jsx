import React, {useEffect, useState} from 'react';
import './List.scss'
import Card from "../Card/Card.jsx";
const List = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch("products.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(products)
    //             setProducts(data)
    //         })
    // }, [])
    const products = [
            {
                "id": 0,
                "title": "Boyer",
                "category": "Shoe",
                "price": "1,335.3",
                "image":[
                    "/images/product/ao1.jpg",
                    "/images/product/ao2.jpg"
                ],
                "isNew": true,
                "status": "New Arrival"
            },

            {
                "id": 1,
                "title": "Geneva",
                "category": "Shoe",
                "price": "1,783.3",
                "image":[
                    "/images/product/ao3.jpg",
                    "/images/product/ao4.jpg"
                ],
                "isNew": true,
                "status": "New Arrival"
            },
            {
                "id": 2,
                "title": "Camacho",
                "category": "Shoe",
                "price": "2,021.3",
                "image":"/images/product/ao3.jpg",
                "isNew": true,
                "status": "Best Seller"
            },
            {
                "id": 3,
                "title": "Nixon",
                "category": "Bag",
                "price": "2,355.9",
                "image":[
                    "/images/product/ao2.jpg",
                    "/images/product/ao1.jpg"
                ],
                "isNew": true,
                "status": "New Arrival"
            },
            {
                "id": 4,
                "title": "Rogers",
                "category": "Hoodies",
                "price": 884,
                "image":"/images/product/ao5.jpg",
                "isNew": true,
                "status": "Best Seller"
            },
            {
                "id": 5,
                "title": "Charlene",
                "category": "Dress",
                "price": "2,828.7",
                "image":[
                    "/images/product/ao4.jpg",
                    "/images/product/ao3.jpg"
                ],
                "isNew": false,
                "status": "New Arrival"
            },
            {
                "id": 6,
                "title": "Mcdaniel",
                "category": "Shoe",
                "price": "1,445.7",
                "image":"/images/product/ao2.jpg",
                "isNew": true,
                "status": "Best Seller"
            }
        ]
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