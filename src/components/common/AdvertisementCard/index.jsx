import React from 'react';
import CustomBtn from '../../common/CustomButton/index';
import './index.css';

const Index = ({ imageDescription }) => {

    const Style = {
        cardContainer: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: "1rem" },
        advertisementInfoContainer: { position: 'absolute', display: 'flex', flexDirection: 'column', width: 'fit-content', height: 'min-content', bottom: '2rem', left: '2.5rem' },
        namingInfo: { color: '#fff', width: 'max-content', fontSize: '1.8rem', margin: 0, fontWeight: 750, letterSpacing: '1.5px', WebkitTextStroke: '1px #fff' },
    }

    return (
        <section className='cards-container' style={Style.cardContainer}>

            {imageDescription.map(({ title, backgroundImage, slogan }) => (
                <>
                    <div className='animate-card'>
                        <img src={backgroundImage} alt="T-Shirt" />
                        <div style={Style.advertisementInfoContainer}>
                            <p style={Style.namingInfo}>{title.toUpperCase()}</p>
                            <p style={{ ...Style.namingInfo, fontWeight: 400, fontSize: '0.75rem', fontStyle: 'italic', WebkitTextStroke: '0.4px #fff' }}>{slogan.toUpperCase()}</p>
                            <CustomBtn name={title} />
                        </div>
                    </div>
                </>
            ))}
        </section>
    )
}

export default Index;
