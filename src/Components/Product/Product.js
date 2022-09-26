import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart, product} = props
    const { name, seller, price, img, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='all-info'>
                <div className="product-info">
                    <h5>{name}</h5>
                    <h6>Price: ${price}</h6>
                </div>
                <div className="extra-info">
                    <p><small>Manufectured By: {seller}</small></p>
                    <p><small>Ratings: {ratings} star</small></p>
                </div>
                <button onClick={() => handleAddToCart(product)} className='btn-add-cart'>
                    <p className='btn-text'>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;