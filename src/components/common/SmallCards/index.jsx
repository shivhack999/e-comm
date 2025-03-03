import React from 'react';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import Hoodies from '../../../assets/collection_Puma_tShirts.jpeg';

const Index = () => {

    const [onHoverTrue, setOnHoverTrue] = useState(false);
    const Style = {
        smallCardContainer: {
            borderRadius: '5px'
        },

        imageContainer: {
            position: 'relative',
            width: '12rem',
            height: '13.5rem',
        },

        smallCardsImage: {
            width: 'inherit',
            height: 'inherit',
            objectFit: 'fill',
        },

        addIcon: {
            position: 'absolute',
            right: '8px',
            bottom: '8px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            transform: onHoverTrue ? 'rotate(90deg)' : 'rotate(0deg)',
        }
    }

    return (
        <div style={Style.smallCardContainer}>
            <div style={Style.imageContainer}>
                <img src={Hoodies} alt="Hoodies" style={Style.smallCardsImage} />
                <FaPlus size={23} color='#FF693A' style={Style.addIcon} onMouseOver={() => setOnHoverTrue(true)} onMouseOut={() => setOnHoverTrue(false)} />
            </div>
        </div>
    )
}

export default Index;