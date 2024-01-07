import React, {useEffect, useState} from 'react';
import './HomeProducts.scss'
import {useAutoAnimate} from '@formkit/auto-animate/react'
const HomeProducts = () => {
    const [parent, enableAnimations] = useAutoAnimate()
    const [hpProducts, setHpProducts] = useState([])
    const [filtered, setFiltered] = useState(hpProducts && hpProducts)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/product/products");
                const data = await response.json();
                setHpProducts(data)
                if(data)
                    setFiltered(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().then(() => console.log());
    }, []);


    const filter = (type) => {
        setFiltered(hpProducts.filter((p) => p.category === type))
    }
    const unFilter = () => {
        setFiltered(hpProducts)
    }

    return (
        <div className={'hpContainer'}>
            <img src="" alt=""/>
            <h1 className={'font-medium'}><b>Featured Products</b></h1>

            <div className={'groupProducts'}>
                <ul className={'menu'}>
                    <li onClick={()=> unFilter()}>All</li>
                    <li onClick={()=> filter('Áo Thun')}>Nam</li>
                    <li onClick={()=> filter('Đồ Lót Nam')}>Nữ</li>
                    <li onClick={()=> filter('Áo Hoodie')}>Trẻ em</li>
                </ul>
                <div className={'hpList'} ref={parent}>
                    {
                        filtered.map((prod, i) => (
                            <div className={'hpProducts'}
                                 style={{ backgroundImage: `url(${prod?.image?.url})` }}
                            >
                                <div className="left-s">
                                    <div className="hpName">
                                        <span>{prod.title}</span>
                                    </div>
                                    <span>{prod.price}.VND</span>
                                    <div>View now</div>
                                </div>
                                <img src={prod?.image?.url} alt={prod.title} className={'img-p'}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;