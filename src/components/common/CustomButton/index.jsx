import React from 'react';

const Index = ({ name }) => {
    const Style = {
        buttonContainer: { width: 'max-content', padding: '10px 12.75px', margin: 0, marginTop: '8px', backgroundColor: '#FF693A', borderRadius: '32px', cursor: 'pointer' },
        buttonName: { margin: 0, textAlign: 'start', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', color: '#fff' }
    }
    return (
        <div style={Style.buttonContainer}>
            <p style={Style.buttonName}>Shop {name}</p>
        </div>
    )
}

export default Index;