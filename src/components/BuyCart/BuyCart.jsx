import React from 'react';
import './BuyCartStyle.css';

const BuyCart = ({ sizeSelected }) => {

    const handleWhetherSizeSelected = () => {
        if(sizeSelected === null){
            alert("First, select your size ");
        }
    }

    const handleAddToCart = () => {
        handleWhetherSizeSelected();
    }

    const handleBuyNow = () => {
        handleWhetherSizeSelected();
    }

    return(
        <div className="buy-cart-container">
            <div className="cart" onClick={handleAddToCart}>
                ADD TO CART
            </div>
            <div className="buy-now" onClick={handleBuyNow}>
                BUY NOW
            </div>
        </div>
    )
}

export default BuyCart;