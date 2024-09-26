import React from 'react';
import { FaCaretDown } from "react-icons/fa";

const Index = ({ name, toogleOption, showCategories }) => {

    const Styles = {
        categoriesContainer: { cursor: 'pointer' },
        categoriesDropDownContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px' },
        dropDownBtn: { transform: showCategories ? 'rotate(180deg)' : 'rotate(360deg)', transformOrigin: 'center' }
    }


    return (
        <div style={Styles.categoriesContainer}>
            <div>
                <div style={Styles.categoriesDropDownContainer} onClick={toogleOption} >
                    <span style={{ color: '#fff' }}>{name ? name : 'Categories'}</span>
                    <FaCaretDown color='#fff' style={Styles.dropDownBtn} />
                </div>
            </div>
        </div>
    )
}

export default Index;