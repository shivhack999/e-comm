import React from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import './ProductPriceStyle.css';

const ProductPrice = ({ price, shippingCharges }) => {
    return (
        <span className="p-price">
            <MdOutlineCurrencyRupee className='indian-ruppee'/>{ price } 
            <span className='shipping-charges'>
                { shippingCharges }
            </span>
        </span>
    )
}

export default ProductPrice;