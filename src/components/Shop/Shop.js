import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setproducts]=useState(first10);
    const [cart,setCart]=useState([]);
    const handleAddProduct=(product)=>{
        console.log('product added');
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(pd=><Products handleAddProduct={handleAddProduct} product={pd}></Products>)
                }
                 {/* <h1>This is Shop</h1>
                 <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product=><li>{product.name}</li>)
                }
            </ul> */}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;