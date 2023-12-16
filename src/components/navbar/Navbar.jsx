import React, {useState} from 'react';
import {FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState([]);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {title: "Jewelry & Accessories", path: "/"},
        {title: "Clothing & Shoes", path: "/"},
        {title: "Home & Living", path: "/"},
        {title: "Jewelry & Accessories", path: "/"},
        {title: "Jewelry & Accessories", path: "/"},
    ]

    return (
            <header className={'max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'}>
                <nav className={'flex justify-between items-center container md:py-4 pt-6 pb-3'}>
                    <FaSearch className={'text-Black w-5 h-5 cursor-pointer hidden md:block'} />
                    <a href={'/'}>LOGO</a>
                    <div className={'text-lg text-Black sm:flex items-center gap-4 hidden'}>
                        <a href={'/'} className={'flex items-center gap-2'}><FaUser />Account</a>
                        <a href={'/'} className={'flex items-center gap-2'}><FaShoppingCart />Shopping</a>
                    </div>
                </nav>
                {/*Nav for small devices*/}
                <div className={'sm:hidden'}>
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaTimes className={'w-5 h-5 text-Black'}/> : <FaBars className={'w-5 h-5 text-Black'}/>
                        }
                    </button>
                </div>
                <hr/>
                {/*Categories*/}
                <div className={'pt-4'}>
                    <ul className={'lg:flex items-center justify-between text-Black hidden'}>
                        {
                            navItems.map(({title, path}) => (
                                <li key={title} className={'hover:text-orange-500'}>
                                    <Link to={'/'}>{title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/*  Categories on Mobile */}
                <div>
                    <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "":"hidden"}`}>
                        {
                            navItems.map(({title, path}) => (
                                <li key={title} className={'hover:text-orange-500 my-3 cursor-pointer'}>
                                    <Link to={'/'}>{title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </header>
    );
};

export default Navbar;