import React, {useState} from 'react';
import {FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import Navbar0 from "../Header/Navbar0.jsx";
import './Navbar.scss'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // const [open,setOpen] = useState(false)
    // const products = useSelector((state) => state.cart.products);

    const navItems = [
        {title: "Women", path: "/products/1"},
        {title: "Men", path: "/products/2"},
        {title: "Kids", path: "/products/3"},
        {title: "Jewelry & Accessories 2", path: "/"},
        {title: "Jewelry & Accessories 3", path: "/"},
    ]

    return (
            <>
                {/*<header className={'max-w-screen-2xl xl:px-28 px-4'}>*/}
                <header className={'xl:px-48 pb-3'}>
                    <Navbar0/>
                    {/*<nav className={'flex justify-between items-center container md:py-4 pt-6 pb-3'}>*/}
                    {/*    <FaSearch className={'text-Black w-5 h-5 cursor-pointer hidden md:block'} />*/}
                    {/*    <a href={'/'}>LOGO</a>*/}
                    {/*    <div className={'text-lg text-Black sm:flex items-center gap-4 hidden'}>*/}
                    {/*        <a href={'/'} className={'flex items-center gap-2'}><FaUser />Account</a>*/}
                    {/*        <a href={'/'} className={'cartIcon flex items-center gap-2'}><FaShoppingCart /><span>0</span>Shopping</a>*/}

                    {/*    </div>*/}
                    {/*</nav>*/}


                    {/*Nav for small devices*/}
                    <div className={'md:hidden flex flex-row center justify-between mx-10 my-3 mt-5'}>
                        <div className="center">
                            <Link className ="link" to="/">VietTungSTORE</Link>
                        </div>
                        <button onClick={toggleMenu}>
                            {
                                isMenuOpen ? <FaTimes className={'w-7 h-7 text-Black'}/> : <FaBars className={'w-7 h-7 text-Black'}/>
                            }
                        </button>
                    </div>
                    <hr className={'md:mx-10'}/>

                    {/*Categories*/}
                    <div className={'pt-4'}>
                        <ul className={'lg:flex items-center justify-between text-Black hidden'}>
                            {
                                navItems.map(({title, path}) => (
                                    <li key={title} className={'hover:text-orange-500'}>
                                        <Link to={path}>{title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/*Categories on md*/}
                    <div>
                        <nav className={`menuBaring ${isMenuOpen ? "menuBar" : "hidden"}`}>
                            {navItems.map(({ title, path }) => (
                                <li key={title} className=" hover:text-orange-500 my-3 cursor-pointer">
                                    <Link
                                        to={path}
                                        onClick={toggleMenu}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </nav>
                    </div>
                </header>
            </>

    );
};

export default Navbar;