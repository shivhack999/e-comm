import React from 'react';

const Index = ({ logoName, width, height }) => {

    const Styles = {
        logoContainer: { width: 'min-content', padding: '0.5rem', backgroundColor: '#fff' },
        logoImage: { width: `${width}rem`, height: `${height}rem` }
    }

    return (
        <div style={Styles.logoContainer}>
            <img src={logoName} alt="logoName" style={Styles.logoImage} />
        </div>
    )
}

export default Index;