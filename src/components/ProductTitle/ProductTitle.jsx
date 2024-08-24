import React from 'react';

const ProductTitle = (props) => {
    return (
        <h2 className="p-title">
           { props.title }
        </h2>
    )
}

export default ProductTitle;