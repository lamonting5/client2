import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import Navbar0 from "../Header/Navbar0.jsx";
import './Navbar.scss'
import SubNav from "./SubNav.jsx";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {title: "New in", path: "/products/1"},
        {title: "Clothing", path: "/products/2"},
        {title: "Dresses", path: "/products/3"},
        {title: "Shoes", path: "/products/4"},
        {title: "Accessories", path: "/products/5"},
    ]

    return (
        <>
            {/*<header className={'max-w-screen-2xl xl:px-28 px-4'}>*/}
            <header className={'xl:px-48 pb-3'}>
                <Navbar0/>

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
                <SubNav/>
            </header>
        </>

    );
};

export default Navbar;