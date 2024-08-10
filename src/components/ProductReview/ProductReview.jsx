import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import './ProductReviewStyle.css';

const ProductReview = ({ cntOfProductSelled, rating }) => {
    const totalStars =  5;
    return(
        <div className="show-p-review">
            {Array.from({ length: totalStars }, (v, i) => {
                const fillPercentage = Math.min(Math.max(rating - i, 0), 1) * 100;

                return (
                <div className="review-stars" key={i}>
                    <IoIosStarOutline className="star" />
                    <div
                        className="star-overlay"
                        style={{ width: `${fillPercentage}%`}}
                    >
                        <IoIosStar className="star filled" />
                    </div>
                </div>
                );
            })}
            <span className='cnt-p-selled'>({cntOfProductSelled})</span>
        </div>
    )
}

export default ProductReview;