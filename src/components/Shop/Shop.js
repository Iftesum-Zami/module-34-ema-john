                        // for making the structure of main body
                            // 1) the lists, 2) the cart

import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const clickAddProduct = (product) => {
        console.log('product added', product);
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(pd => <Product clickAddProduct={clickAddProduct} product={pd}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;