import React from 'react';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    return (
        <div>
            
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics | Gadget Heaven</title>

            </Helmet>
            <div className='bg-[#9538E2] h-40 p-5'>
                <h1 className='text-white font-bold text-center text-2xl'>Statistics</h1>
                <br />
                <p className='text-xs text-center text-white'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!
                </p>

            </div>
            <h1 className='text-center text-[#9538E2] font-bold text-5xl pt-7'>No Data To Show Statistics</h1>
        </div>
    );
};

export default Statistics;