import React from 'react';
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Index = ({ watermark }) => {

    const [searchedValue, setSearchedValue] = useState('');
    const [searchIconClicked, setSearchIconClicked] = useState(false);


    const Styles = {
        searchBarContainer: { flex: 1 },
        inputBoxContainer: { display: 'flex', alignItems: 'center' },
        inputBox: { flex: 1, border: 'none', borderBottom: '1px solid #fff', color: '#fff', backgroundColor: '#232323', padding: '0.2rem 0.5rem', outline: 'none' }
    }

    return (
        <div style={Styles.searchBarContainer}>
            <div style={Styles.inputBoxContainer}>
                <input style={Styles.inputBox} type="text" placeholder={watermark} name='searchBox' onChange={(event) => setSearchedValue(event.target.value)} />
                <IoSearchOutline color='#fff' onClick={() => setSearchIconClicked(true)} />
            </div>
        </div>
    )
}

export default Index;