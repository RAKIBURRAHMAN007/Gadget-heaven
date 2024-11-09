// Cart.js
import React from 'react';

const Cart = ({ product, onRemove }) => {
    return (
        <div className='flex justify-between bg-white rounded-xl mt-6 p-4'>
            <div className='flex justify-between gap-7'>
                <div>
                    <img className='w-40 h-36 rounded-xl border' src={product.product_image} alt="" />
                </div>
                <div className='pt-5 space-y-2'>
                    <h1 className='font-bold'>{product.product_title}</h1>
                    <p className='opacity-60'>{product.description}</p>
                    <p className='font-bold'>Price: {product.price}$</p>
                </div>
            </div>
            <div>
                <div 
                    className='rounded-full border border-red-600 cursor-pointer' 
                    onClick={() => onRemove(product.product_id)}>
                    <img className='w-6' src="https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cart;
