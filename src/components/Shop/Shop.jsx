// import React from 'react';
import { useState ,useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
const[products, setProducts]=useState([]);
const[cart, setCart]=useState([]);
useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])


const handleAdToCart=(product)=>{
    // console.log("from shop ",product)
    const newCart=[...cart,product]
    setCart(newCart)
}

    return (
        <div className='shop-container'>
            <div className="products-container">

{
products.map(product=> <Product handleAdToCart={handleAdToCart} product={product} key={product.id}/> )

}
            </div>

            <div className="cart-container">
               <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;