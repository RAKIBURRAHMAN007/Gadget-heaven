import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_image, price, product_title,product_id } = gadget;

    return (
        <div className="card bg-base-100 w-65 gap-2 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    className="rounded-xl border h-36 w-full " 
                    alt={product_title} />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}$</p>
                <div className="card-actions">
                    <Link  to={`/products_details/${product_id}`}><button className="rounded-full p-2 border border-[#9538E2] text-[#9538E2]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;
