import React, { useEffect, useState } from 'react';
// import Gadget from '../Gadget/Gadget';
import Gadgets from '../Gadgets/Gadgets';
// import CategoryBtn from '../CategoryBtn/CategoryBtn';

const Main = () => {
    const [allGadgets, setAllGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('gadgetsData.json')
            .then(res => res.json())
            .then(data => setAllGadgets(data));
    }, []);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
  
    
    let filteredGadgets;

    if (selectedCategory) {
        filteredGadgets = allGadgets.filter(gadget => gadget.category === selectedCategory);
    } else {
        filteredGadgets = allGadgets;
    }
    return (
        <div className='mt-20 mx-8 md:mx-20'>
            <h1 className='text-center font-bold text-3xl'>Explore Cutting-Edge Gadgets</h1>
            <div className='md:flex justify-between space-y-2 gap-2 mt-24'>
                <div className='bg-white md:h-[450px] rounded-xl py-4 px-2 space-y-3   md:w-1/5'>
                <button
                        onClick={() => handleCategorySelect('')}
                        className={`btn rounded-full w-full ${selectedCategory === '' ? 'bg-[#9538E2] text-white' : ''}`}>
                        All Product
                    </button>
                    {
                        categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategorySelect(category.category)}
                                className={`btn rounded-full w-full ${selectedCategory === category.category ? 'bg-[#9538E2] text-white' : ''}`}>
                                {category.category}
                            </button>
                        ))
                       
                    }
                   
                </div>
                <div className='md:w-3/4'>
                    <div>
                        <Gadgets gadgets={filteredGadgets} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;