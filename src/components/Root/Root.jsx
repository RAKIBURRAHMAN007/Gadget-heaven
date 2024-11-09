import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const Root = () => {
    return (

        <div className='bg-[#f7f7f7]'>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Gadget Heaven</title>

            </Helmet>
            <div className='bg-white'>
                <NavBar></NavBar>
            </div>
            <div className='min-h-60 '>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;