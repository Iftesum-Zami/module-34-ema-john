//-----------------------------making an individual product--------------------------------------

import React from 'react';
import './product.css'

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.product;   // for not repeating props.product every time

    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset=""/>
            </div>
            <div className="product-description">
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock</small></p>

                <button className="main-btn" onClick={() => props.clickAddProduct(props.product)}>
                    Add to Cart
                </button>
            </div>
        </div> 
    );
};

export default Product;

// npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome