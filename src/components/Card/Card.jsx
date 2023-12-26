import {Link} from "react-router-dom";
import './Card.scss'
const Card = ({item}) => {
    return (
        <Link to={`/product/${item._id}`} className={'link'}>
            <div className={'card'}>
                <div className="image">
                    {/*{item.isNew && <span>New Season</span>}*/}
                    <img src={item?.image?.url} alt="" className={'mainImg'}/>
                    <img src={item?.image?.url} alt="" className={'subImg'}/>
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    {Number(item.price_sale) > 0 ? (
                        <>
                            <h3 className={'line-through grayscale italic'}>${item?.price.toLocaleString()}</h3>
                            <h3>${item.price_sale.toLocaleString()}</h3>
                        </>
                    ) : (
                        <h3>${item.price.toLocaleString()}</h3>
                    )}

                </div>
            </div>
        </Link>
    );
};

export default Card;