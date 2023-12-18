import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Card.scss'
const Card = ({item}) => {

    return (
            <Link to={`/product/${item.id}`} className={'link'}>
                <div className={'card'}>
                    <div className="image">
                        {item.isNew && <span>New Season</span>}
                        <img src={item.image[0]} alt="" className={'mainImg'}/>
                        <img src={item.image[1]} alt="" className={'subImg'}/>
                    </div>
                    <h2>{item.title}</h2>
                    <div className="prices">
                        <h3>${item.price}</h3>
                        <h3>${item.price}</h3>
                    </div>
                </div>
            </Link>

    );
};

export default Card;