import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = ({gadgets}) => {
    
  
    return (
        <div  className=' grid  md:grid-cols-3 gap-6'>
            {
                gadgets.map(gadget => <Gadget gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Gadgets;