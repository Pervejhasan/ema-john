// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";
const Orders = () => {
    const savedCart=useLoaderData()

    const [cart,setCart]=useState(savedCart);

const handleRemoveFromCart=(id)=>{
const remaining=cart.filter(product=>product.id!==id);
setCart(remaining);
removeFromDb(id);
}

    return (
        <div className="shop-container">
            <div className="review-container">
            {
                cart.map(product=><ReviewItem product={product} key={product.id} handleRemoveFromCart={handleRemoveFromCart} />)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
           
        </div>
    );
};

export default Orders;