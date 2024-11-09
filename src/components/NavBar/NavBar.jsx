import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getStoredCartList, getStoredWishList } from '../utilitis/addToDb';

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [cartItems, setCartItems] = useState([]);
    const [wishListItems, setWishListItems] = useState([]);
    useEffect(() => {
        const wishList = getStoredWishList();
        const cart = getStoredCartList();
        const cLen = cart.length;
        const wLen = wishList.length
        setWishListItems(wLen);
        setCartItems(cLen);
    }, [])
    


    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='pt-4 px-4'>
            <div className={`navbar rounded-t-lg  py-6 lg:px-20 ${isHomePage ? 'bg-[#9538E2]' : 'bg-white'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content border bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink
                                to='/'
                                onClick={() => handleLinkClick('home')}
                                className={`${isHomePage ? 'text-white' : 'text-white'} ${activeLink === 'home' ? 'font-bold underline' : ''}`}>
                                Home
                            </NavLink>
                            <NavLink
                                to='/statistics'
                                onClick={() => handleLinkClick('statistics')}
                                className={`${isHomePage ? 'text-white' : 'text-white'} ${activeLink === 'statistics' ? 'font-bold underline' : ''}`}>
                                Statistics
                            </NavLink>
                            <NavLink
                                to='/dashboard'
                                onClick={() => handleLinkClick('dashboard')}
                                className={`${isHomePage ? 'text-white' : 'text-white'} ${activeLink === 'dashboard' ? 'font-bold underline ' : ''}`}>
                                Dashboard
                            </NavLink>
                            <NavLink
                                to='/aboutUs'
                                onClick={() => handleLinkClick('aboutUs')}
                                className={`${isHomePage ? 'text-white' : 'text-white'} ${activeLink === 'aboutUs' ? 'font-bold underline ' : ''}`}>
                                About Us
                            </NavLink>
                        </ul>
                    </div>
                    <a className={`btn btn-ghost md:text-xl lg:text-2xl ${isHomePage ? 'text-white' : 'text-black'}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-between gap-7">
                    <NavLink
                        to='/'
                        onClick={() => handleLinkClick('home')}
                        className={`${isHomePage ? 'text-white' : ''} ${activeLink === 'home' ? 'font-bold underline' : ''}`}>
                        Home
                    </NavLink>
                    <NavLink
                        to='statistics'
                        onClick={() => handleLinkClick('statistics')}
                        className={`${isHomePage ? 'text-white' : ''} ${activeLink === 'statistics' ? 'font-bold text-[#9538E2]' : ''}`}>
                        Statistics
                    </NavLink>
                    <NavLink
                        to='dashboard'
                        onClick={() => handleLinkClick('dashboard')}
                        className={`${isHomePage ? 'text-white' : ''} ${activeLink === 'dashboard' ? 'font-bold text-[#9538E2] ' : ''}`}>
                        Dashboard
                    </NavLink>
                    <NavLink
                        to='/aboutUs'
                        onClick={() => handleLinkClick('aboutUs')}
                        className={`${isHomePage ? 'text-white' : ''} ${activeLink === 'aboutUs' ? 'font-bold text-[#9538E2] ' : ''}`}>
                        About Us
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-full border bg-white '>
                            <Link><img className='w-8 p-2' src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="" /></Link>
                            <div className='rounded-full bg-white border text-xs px-1 absolute -mt-10 ml-3'>{cartItems}</div>
                        </div>
                        <div className='rounded-full border bg-white '>
                            <Link><img className='w-8 p-2' src="https://img.icons8.com/?size=100&id=581&format=png&color=000000" alt="" /></Link>
                            <div className='rounded-full bg-white border text-xs px-1 absolute -mt-10 ml-3'>{wishListItems}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
