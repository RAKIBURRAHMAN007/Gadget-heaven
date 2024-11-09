import React from 'react';
import bgImg from '../../assets/banner.jpg';
import Main from '../Main/Main';
import { Link, Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div className=' px-4 '>
            <div className='rounded-b-lg pb-36 md:pb-48 bg-[#9538E2]'>
                <br />
                <h1 className='font-bold text-[16px] md:text-[40px] lg:text-[40px] text-white text-center'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <br />
                <p className='text-center text-[10px] opacity-85 font-light text-white lg:text-xs md:text-xs'>Explore the latest gadgets  that will take your <br className=' block lg:hidden md:hidden' /> experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
                <br />
                <div className='flex justify-center'>
                    <Link to='/dashboard'> <button className='rounded-3xl font-bold bg-white py-2 px-5 border text-[#9538E2]'>Shop Now</button></Link>
                   
                </div>
            </div>
            <div className=' -mt-28 md:-mt-36 lg:-mt-36 flex justify-center px-4'>
                <div className='border-2 w-max p-5 backdrop:blur-md rounded-xl bg-white bg-opacity-20'>
                    <div className=''>
                        <img className='w-[700px] lg:h-96 rounded-xl' src={bgImg} alt="" />
                    </div>
                </div>
            </div>
            <br />
            <Outlet></Outlet>
        </div>
    );
};

export default Home;