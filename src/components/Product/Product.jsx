// import React from 'react';
import './Product.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,handleAdToCart}) => {

    const {name, img, seller, ratings, price}=product;
    // console.log(props.product)
 

    return (
        <div className='product'>
        <img src={img} alt="product-image" />
       <div className='product-info'>
       <h6 className='product-name'>{name}</h6>
         <p>Price: ${price}</p>
         <p>Manufacturer: {seller}</p>
         <p>Rating: {ratings} starts</p>
       </div>
<button onClick={()=>handleAdToCart(product)} className='btn-cart'>
Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
</button>

        </div>
    );
};

Product.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      seller: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ratings: PropTypes.number.isRequired,
      img : PropTypes.string.isRequired,
      
    }).isRequired,
    handleAdToCart: PropTypes.func
  };
 
export default Product;