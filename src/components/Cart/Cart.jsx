// import React from 'react';
import './Cart.css'
import PropTypes from 'prop-types';
const Cart = (props) => {
    const { cart } = props;
    let totalPrice=0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice+=product.price;
        totalShipping += product.shipping
    } 
    // console.log(cart)
    const tax = totalPrice*7/100;

    const grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {totalPrice} </p>
            <p>Shipping: $ {totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array
};
export default Cart;