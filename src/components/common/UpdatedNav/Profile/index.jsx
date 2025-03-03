import React from 'react';
import Profile from '../../../../assets/profile.png';

const Index = ({ width }) => {

    const Styles = {
        profileContainer: { cursor: 'pointer' },
        profileIcon: { width: `${width}px` || 'auto' }
    }

    return (
        <div style={Styles.profileContainer}>
            <img src={Profile} alt="profile-menu" style={Styles.profileIcon} />
        </div>
    )
}

export default Index;