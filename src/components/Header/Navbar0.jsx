import {FaChevronDown, FaShoppingCart, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import './Navbar0.scss'
import {useState} from "react";
import Cart from "../Cart/Cart.jsx";

const Navbar0 = () => {
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <div className="navbar ">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className ="link" to="/women">Women</Link>
                    </div>
                    <div className="item">
                        <Link className ="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className ="link" to="/products/3">Kids</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className ="link" to="/">VietTungSTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className ="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className ="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className ="link" to="/">Contact</Link>
                    </div>
                    <div className="icons">
                        {/*<FaSearch/>*/}
                        <FaUser size={25}/>
                        <div className="cartIcon" onClick={()=>setCartOpen(!cartOpen)}>
                            <FaShoppingCart size={25}/>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="item">
                        <span>Lang</span>
                        <FaChevronDown />
                    </div>
                </div>
            </div>
            {cartOpen && <Cart/>}
        </div>
    );
};

export default Navbar0;