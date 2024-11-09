import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { getStoredCartList, getStoredWishList } from '../utilitis/addToDb';
import modalImg from '../../assets/Group.png'
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";
const DashBoard = () => {
    const [addedCart, setAddedCart] = useState([]);
    const [addedWishListCart, setAddedWishListCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [btnClick, setBtnClick] = useState('cart');
    const [showModal, setShowModal] = useState(false);
    const allProduct = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedWishList = getStoredWishList();

        const cartList = [...allProduct.filter(product => storedCartList.includes(product.product_id))];
        const wishList = [...allProduct.filter(product => storedWishList.includes(product.product_id))];
        setAddedCart(cartList);
        setAddedWishListCart(wishList);

        let cost = 0;
        cartList.forEach(product => {
            cost += product.price;
        });
        setTotalCost(cost);
    }, [allProduct]);

    const removeFromCart = (productId) => {
        const storedCartList = getStoredCartList();
        const updatedCartList = storedCartList.filter(id => id !== productId);
        localStorage.setItem('Cart-list', JSON.stringify(updatedCartList));
        const updatedCart = addedCart.filter(product => product.product_id !== productId);
        setAddedCart(updatedCart);
        let updatedCost = 0;
        updatedCart.forEach(product => {
            updatedCost += product.price;
        });
        setTotalCost(updatedCost);
    };

    const removeFromWishList = (productId) => {
        const storedWishList = getStoredWishList();

        const updatedWishList = storedWishList.filter(id => id !== productId);
        localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
        setAddedWishListCart(addedWishListCart => {
            const updatedList = addedWishListCart.filter(product => product.product_id !== productId);
            return updatedList;
        });
    };

    const sortCartByPrice = () => {
        const sortedCart = [...addedCart].sort((a, b) => b.price - a.price);
        setAddedCart(sortedCart);

        let updatedCost = 0;
        sortedCart.forEach(product => {
            updatedCost += product.price;
        });
        setTotalCost(updatedCost);
    };

    const handleWishListBtnClick = () => {
        setBtnClick('wishList');
    };

    const handleCartBtnClick = () => {
        setBtnClick('cart');
    };

    const handlePurchase = () => {

        localStorage.setItem('Cart-list', JSON.stringify([]));
        setAddedCart([]);
        setTimeout(() => {
            setTotalCost(0);
        }, 90000);


        if (addedCart.length !== 0) {
            setShowModal(true);



        }
        else {
            toast.warn('Add Product to Purchase')

        }
    };
    const navigate = useNavigate();
    const closeModal = () => {
        setShowModal(false);
        navigate('/')
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Gadget Heaven</title>

            </Helmet>
            <div className='bg-[#9538E2] h-60 p-5'>
                <h1 className='text-white font-bold text-center text-2xl'>Dashboard</h1>
                <br />
                <p className='text-xs text-center text-white'>
                    Quickly access and manage your wishlist and cart to streamline your shopping experience,<br />
                    keeping all your favorite gadgets just a click away..
                </p>
                <div className='flex justify-center items-center pt-9 gap-2'>
                    <button
                        onClick={handleCartBtnClick}
                        className={`rounded-xl border ${btnClick === 'cart' ? 'bg-orange-700  bg-opacity-35' : ''} text-white px-8 py-1`}>
                        Cart
                    </button>
                    <button
                        onClick={handleWishListBtnClick}
                        className={`rounded-xl border ${btnClick === 'wishList' ? 'bg-orange-700  bg-opacity-35' : ''} text-white px-8 py-1`}>
                        Wishlist
                    </button>
                </div>
            </div>

            <div className='mx-2 md:mx-20 mt-10'>
                {btnClick === 'cart' && (
                    <>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='font-bold'>Cart</h1>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div>
                                    <h1 className='md:font-bold'>Total Cost: ${totalCost}</h1>
                                </div>
                                <div className='md:flex items-center justify-center md:space-y-0 gap-3 space-y-1'>
                                    <button
                                        onClick={sortCartByPrice}
                                        className='flex gap-2 items-center border p-2 border-[#9436e2] rounded-3xl text-[#9436e2]'>
                                        Sort By Price
                                        <img className='w-5' src="https://img.icons8.com/?size=100&id=21636&format=png&color=9436e2" alt="sort" />
                                    </button>
                                    <button
                                        onClick={handlePurchase}
                                        disabled={addedCart.length === 0 || totalCost === 0}
                                        id="purchase"
                                        className={`text-white w-full md:w-40 text-sm rounded-3xl p-2 
                                        ${addedCart.length === 0 || totalCost === 0
                                                ? 'bg-gray-400 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-[#9436e2] to-[#d15feb]'}`} 
                                    >
                                        Purchase
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div>
                            {addedCart.map(product => (
                                <Cart key={product.product_id} product={product} onRemove={removeFromCart} />
                            ))}
                        </div>
                    </>
                )}

                {btnClick === 'wishList' && (
                    <>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>Wishlist</h1>
                        </div>
                        <div>
                            {addedWishListCart.map(product => (
                                <Cart key={product.product_id} product={product} onRemove={removeFromWishList} />
                            ))}
                        </div>
                    </>
                )}
            </div>


            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg max-w-sm w-full">
                        <div className='flex justify-center'>
                            <img className='' src={modalImg} alt="" />
                        </div>
                        <h2 className="font-bold text-xl mt-2 mb-4 text-center">Payment Successfully</h2>
                        <p className='text-center'>Thanks for purchasing.</p>
                        <p className="mb-4 text-center">Total: ${totalCost}</p>
                        <button onClick={closeModal} className="bg-gray-300 rounded-xl  w-full text-black px-4 py-2 rounded-lg">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashBoard;
