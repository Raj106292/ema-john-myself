import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(let id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                let quantity = storedCart[id];
                quantity = addedProduct.quantity + quantity;
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            const quantity = selectedProduct.quantity + 1;
            selectedProduct.quantity = quantity;
            newCart = [...rest, selectedProduct];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;