import React from 'react';
import shoes2 from '../../../assets/shoes2.png';
import { LuIndianRupee } from "react-icons/lu";
import './Card1Style.css';
import { Link } from 'react-router-dom';

const Card1 = () => {
    return(
        <Link to="/product-details" className='p-card1-container'>
            <section className='p-card1' >
                <div className='image-container'>
                    {/* <img src={shoes2} alt="" width="95%" height="80%"/> */}
                    <div className='image' style={{ backgroundImage: `url(${shoes2})`}}></div>
                </div>
                <div className='info-container'>
                    <span className='title'>
                        Men's Tree Runner
                    </span>

                    <span>
                        <LuIndianRupee />
                        <span>400.00</span>
                    </span>
                </div>
            </section>
        </Link>
    )
}

export default Card1;