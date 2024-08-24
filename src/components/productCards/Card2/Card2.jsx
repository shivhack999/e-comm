import React from 'react';
import { Link } from "react-router-dom";
import shoes2 from '../../../assets/shoes2.png';
import './Card2Style.css';

const Card2 = () => {
    return (
        <Link to='/view-list' className='p-card-2-container'>
            <section className='p-card-2' >
                <div className='image-2-container'>
                    {/* <img src={shoes2} alt="" width="95%" height="80%"/> */}
                    <div className='image-2' style={{ backgroundImage: `url(${shoes2})`}}></div>
                </div>
                <div className='info-container-2'>
                    <span className='title-2'>
                        Women's Tree Runner
                    </span>
                </div>
            </section>
        </Link>
    )
}

export default Card2;