import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let quantity = 0;
    let price = 0;
    let shippingCost = 0;
    let tax = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping;
        tax = parseFloat((price * (10/100)).toFixed(2));
    }
    return (
        <div className='cart-info-container'>
            <h2>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total Cost: ${price}</p>
                <p>Delivery Charge: ${shippingCost}</p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: ${price + shippingCost + tax}</p>
            </div>
        </div>
    );
};

export default Cart;