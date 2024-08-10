import React from 'react';
import './PcolorsStyle.css';

const Pcolors = ( { listOfColors, handleColorChanged, colorClicked } ) => {

    const style = {
        dynamicColorTextStyle: {textTransform: 'capitalize', fontStyle: 'italic', fontWeight: '400'}, 
        eachColorStyle: {color: 'white'}
    };
    
    return(

        <div className='p-colors-details'>
            <div className='p-color-text'>
                CLASSIC COLORS: <span style={style.dynamicColorTextStyle}>{listOfColors[colorClicked]}</span>
            </div>
            <div className="p-colors-container">
                {
                    listOfColors.map((eachColor, index) => (
                        <div key={index+1} data-value={index+1} className={`circle`}
                            style={{...style.eachColorStyle, backgroundColor: `${eachColor}`, outline: index === colorClicked ? '3px solid rgb(60, 60, 60)' : null}} onClick={handleColorChanged}>
                        </div>       
                    ))
                }
            </div>
        </div>

    )
}

export default Pcolors;