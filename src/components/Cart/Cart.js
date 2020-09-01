import React from 'react';
import './cart.css'

const Cart = (props) => {
    const finalCart = props.cart;
    // console.log(finalCart);

    // const total = finalCart.reduce((total, prd) => total + prd.price, 0); // here we get the #PRICE
    
    let total = 0;
    for (let i = 0; i < finalCart.length; i++) {
        const element = finalCart[i];
        total = total + element.price;
    }
    
    return (
        <div>
            <h2>your cart</h2>
            <p>items ordered {finalCart.length}</p>
            <p>Price: {total}</p>
        </div>
    );
};

export default Cart;