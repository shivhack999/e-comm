import React from 'react';

const Index = ({ showCategories }) => {

    const Styles = {
        showCategoriesContainer: { position: 'absolute', width: '100%', height: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid grey', zIndex: 2, backgroundColor: '#232323' },
        showCategories: {},
        showCategoriesNames: {},
        showCategoriesImages: {}
    }

    return (
        <>
            {
                showCategories && <div style={Styles.showCategoriesContainer}>
                    <div style={Styles.showCategories}>
                        <div style={Styles.showCategoriesNames}>

                        </div>
                        <div style={Styles.showCategoriesImages}>

                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Index;