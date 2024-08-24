import React from 'react';
import './ProductSizesStyle.css';

const ProductSizes = ({ openSizeChartFn, productSizeArray, handleSizeSelected, checkSizeAvailability, sizeSelected }) => {

    return (
            <div className='p-size-details'>
                
                <div className="p-size-info-container">
                    <div className='p-size-text'>
                        SELECT SIZE:
                    </div>
                    {
                        sizeSelected !== null ? !checkSizeAvailability(productSizeArray[sizeSelected]) ? <div className="is-size-available" style={{color: 'red'}}>
                            Color sold out ?
                        </div> : <div className='is-size-available'>Available Pairs: {4}</div> : null
                    }
                </div>

                <section className="p-sizes-container" onClick={handleSizeSelected}>
                    {
                        productSizeArray.map((eachSize, index) => (
                            <div key={index+1} className='square p-size' data-value={index} 
                            style={{backgroundColor: index == sizeSelected ? '#484F57' : null, color: index == sizeSelected ? '#fff' : '#000'}} >
                                {eachSize}
                                <hr className='diagonal' data-value={index}
                                style={{height: checkSizeAvailability(eachSize) ? '0px' : '2px', backgroundColor: index == sizeSelected ? '#fff' : '#484F57'}} />
                            </div>
                        ))
                    }
                </section>

                <div className="size-chart" onClick={openSizeChartFn}>
                    See Size Chart
                </div>
            </div>
    )
}

export default ProductSizes;