import React, {useEffect, useState} from 'react';
import './Cart.scss'
import {AiOutlineDelete} from "react-icons/ai";
const Cart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className={'cart'}>
            <h1>Products in your cart</h1>
            {
                products.map(item=>(
                    <div className={'item'} key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc?.substring(0,100)}</p>
                            <div className="price">1 x {item.price}</div>
                        </div>
                        <AiOutlineDelete className={'delete'}/>
                    </div>
                ))
            }
            <div className="total">
                <span>SUBSTOTAL</span>
                <span>$123</span>
            </div>
            <button>Proceed to checkout</button>
            <span className={'reset'}>Empty cart</span>
        </div>
    );
};

export default Cart;