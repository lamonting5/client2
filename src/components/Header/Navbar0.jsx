import {FaChevronDown, FaShoppingCart, FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import './Navbar0.scss'

const Navbar0 = () => {
    return (
        <div className="navbar ">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className ="link" to="/products/1">Women</Link>
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
                        <FaUser/>
                        <FaShoppingCart/>
                        <div className="cartIcon" >

                        </div>
                    </div>
                    <div className="item">
                        <span>Lang</span>
                        <FaChevronDown />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar0;