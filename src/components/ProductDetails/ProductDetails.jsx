import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredCartList, addToStoredWishList, getStoredWishList } from '../utilitis/addToDb';

const ProductDetails = () => {
    const { product_id } = useParams();
    const id = parseInt(product_id);
    const data = useLoaderData();
   

    const [isInWishlist, setIsInWishlist] = useState(false); 

    const handleAddToCart = (id) => {
        addToStoredCartList(id);

    }
   
    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
        
        setIsInWishlist(true);

        
       
    }

    const product = data.find(produ => produ.product_id == id);

    const {
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating
    } = product;

    let count = 1;
    
    return (
        <div>
            <div className='bg-[#9538E2] h-60 p-5'>
                <h1 className='text-white font-bold text-center text-2xl'>Product Details</h1>
                <br />
                <p className='text-xs text-center text-white'>
                    Explore all the details you need, from specifications to standout features,<br />
                    and find the perfect gadget to match your needs.
                </p>
            </div>

            <div className='-mt-16 md:-mt-20 lg:-mt-24 flex justify-center px-4'>
                <div className='border-2 w-max p-5 backdrop:blur-md rounded-xl bg-white '>
                    <div className='md:w-[800px] md:h-96 space-y-1 md:flex justify-between gap-10 bg-white '>
                        <div className='md:w-1/3'>
                            <img className='h-full border rounded-xl' src={product_image} alt="" />
                        </div>
                        <div className='md:w-3/5 space-y-1'>
                            <h1 className='font-bold text-xl'>{product_title}</h1>
                            <p className='font-semibold text-base'>Price: {price}$</p>
                            <button className='border border-green-400 bg-green-50 text-green-600 px-2 rounded-full'>
                                {availability === true ? 'In Stock' : 'Stock Out'}
                            </button>
                            <p className='font-bold opacity-60 text-sm'>{description}</p>
                            <p className='flex flex-col font-bold'>
                                Specification:
                                {specification.map(sp => <span className='font-normal opacity-60'>{count++}. {sp}</span>)}
                            </p>
                            <div className='flex items-center gap-1'>
                                <p className='font-bold'>Rating</p>
                                <img className='w-6' src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" alt="" />
                            </div>
                            <div className='flex items-center gap-2 mt-4'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div className='bg-gray-100 rounded-2xl px-2 text-sm'>{rating}</div>
                            </div><br />
                            <div className='flex gap-5'>
                                <button onClick={() => handleAddToCart(product_id)} className='flex items-center gap-2 bg-[#9538E2] rounded-xl p-2 text-white'>
                                    Add To Cart <img className='w-5 font-bold ' src="https://img.icons8.com/?size=100&id=9671&format=png&color=FFFFFF" alt="" />
                                </button>

                                <button 
                                 
                                 onClick={() => handleAddToWishList(product_id)}  className='flex items-center gap-2'>
                                    <div className={`rounded-full border p-2 ${isInWishlist ? 'bg-gray-300' : 'bg-white'}`}>
                                        <img className='w-5' src="https://img.icons8.com/?size=100&id=581&format=png&color=000000" alt="" />
                                    </div>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
