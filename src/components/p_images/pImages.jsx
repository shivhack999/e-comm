import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import './pImagesStyle.css';

const ProductImages = ({ imagesList }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
    const changeToPreviousImage = () => {
        if(currentImageIndex === 0){
            setCurrentImageIndex(imagesList.length-1);
        }
        else{
            setCurrentImageIndex(currentImageIndex-1);
        }
    }

    const changeToNextImage = () => {
        if(currentImageIndex === imagesList.length-1){
            setCurrentImageIndex(0);
        }
        else{
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    return (
        <>
            <div className="p-images-container">
                <div className='p-image-list'>
                    {
                        imagesList.map((eachImage, index) => (
                            <div key={index+1} className={`bg-color p-image-${index+1}`} style={{border: index === currentImageIndex ? '2px solid #484f57' : '2px solid rgb(220, 220, 220)' }}>
                                <img src={eachImage} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className='p-image'>
                    <img src={imagesList[currentImageIndex]} alt="" width="600px"/>

                    <div className='scroll-image' >
                        <div className='left' onClick={changeToPreviousImage}>
                            <FaAngleLeft size={30} color='#484f57' />
                        </div>
                        <div className='right' onClick={changeToNextImage}>
                            <FaAngleRight size={30} color='#484f57' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductImages;