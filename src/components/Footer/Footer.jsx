import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white mt-14 p-10'>
            <h1 className='font-bold text-center text-3xl'>Gadget Heaven</h1>
            <br />
            <p className='font-bold text-xs opacity-60 text-center'>
                Leading the way in cutting-edge technology and innovation.
            </p>
            <div className='divider'></div>
            <footer className="footer bg-white flex justify-center gap-16 md:gap-40 p-8">
                <nav className="flex flex-col items-center ">
                    <h6 className="font-bold text-black text-center">Services</h6>
                    <a className="link link-hover opacity-60 text-center ">Product Support</a>
                    <a className="link link-hover opacity-60 text-center">Order Tracking</a>
                    <a className="link link-hover opacity-60 text-center">Shipping & Delivery</a>
                    <a className="link link-hover opacity-60 text-center">Returns</a>
                </nav>

                <nav className="flex flex-col items-center">
                    <h6 className="font-bold text-black text-center">Company</h6>
                    <a className="link link-hover opacity-60 text-center">About us</a>
                    <a className="link link-hover opacity-60 text-center">Careers</a>
                    <a className="link link-hover opacity-60 text-center">Contact</a>
                </nav>

                <nav className="flex flex-col items-center">
                    <h6 className="font-bold  text-black text-center">Legal</h6>
                    <a className="link link-hover opacity-60 text-center">Terms of use</a>
                    <a className="link link-hover opacity-60 text-center">Privacy policy</a>
                    <a className="link link-hover opacity-60 text-center">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
