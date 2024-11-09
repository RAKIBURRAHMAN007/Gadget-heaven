import React from 'react';
import video from '../../assets/4058039-hd_1080_1920_20fps.mp4'
import bgImg from '../../assets/top-view-smartphone-with-keyboard-charger.jpg'
import { Helmet } from 'react-helmet';
const AboutUs = () => {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | Gadget Heaven</title>

            </Helmet>
            <div className='bg-gradient-to-r to-green-900 from-[#9538E2] shadow-2xl  h-96 p-5 '>
                <h1 className='text-white font-bold text-center text-2xl'>About Us</h1>
                <br />
                <p className='text-xs text-center text-white'>
                    Our vision is to provide the highest quality and the most-up-to-date gadgets available in the market. We believe that technology enhances <br /> people’s lives so we ensure that  we make it readily  available to everyone – anytime, anywhere. With a  vast selection of <br /> gadgets and accessories, we will be your one-stop shop for  all your technology needs.
                </p>

            </div>
            <div className=' -mt-28 md:-mt-20 lg:-mt-52 flex justify-center px-4'>
                <div className='border-2 border-white w-max p-5 backdrop:blur-md rounded-xl bg-white bg-opacity-20'>
                    <div className=''>
                        <img className='w-[700px] lg:h-96 rounded-xl' src={bgImg} alt="" />
                    </div>
                </div>
            </div>
            <div className='pt-16 px-10 md:px-20 '>
                <div className='md:flex gap-2 p-2 border  border-[#9538E2] rounded-xl'>
                    <div>
                        <video autoPlay
                            muted
                            loop
                            playsInline
                            className='md:w-56 object-cover rounded-xl' src={video}></video>
                    </div>

                    <div className="join join-vertical w-full pt-5">
                        <h1 className='text-center font-bold pb-4 text-3xl'>Why Us?</h1>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-md font-medium">Why should you buy gadgets from our store instead of another one?</div>
                            <div className="collapse-content">
                                <p className=' text-sm'>We offer high-quality, carefully selected gadgets backed by reliable customer service to ensure a smooth shopping experience.

                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-md font-medium">Do we offer any guarantees or warranties on your products?</div>
                            <div className="collapse-content">
                                <p className='text-sm'>Yes, most products come with warranties and a 30-day return policy for your peace of mind.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-md font-medium">How do we ensure the quality of your products?</div>
                            <div className="collapse-content">
                                <p className='text-sm'>We partner directly with trusted, reputable manufacturers and vendors, which allows us to control the quality of each product we sell. Each gadget undergoes a thorough inspection before reaching our shelves, ensuring it meets our high standards.</p>
                            </div>
                        </div>
                    </div>



                </div>
               

            </div>

        </div>
    );
};

export default AboutUs;