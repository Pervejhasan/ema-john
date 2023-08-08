// import React from 'react';
import { useState ,useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
const[products, setProducts]=useState([]);
useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

    return (
        <div className='shop-container'>
            <div className="products-container">

{
products.map(product=> <Product product={product} key={product.id}/> )

}


            </div>


            <div className="cart-container">
order come here
            </div>
        </div>
    );
};

export default Shop;