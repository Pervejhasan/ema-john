// import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types';
const ReviewItem = ({product,handleRemoveFromCart}) => {
    const{id,img,name,shipping
,        quantity,price}=product;
    return (
        <div className="review-item">
            <div className='product-info'>
                <div>
                <img src={img} alt="product-image" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <h5>Quantity: <span style={{color:"orange",}}>{quantity}</span></h5>
                    <h5>Price: <span style={{color:"orange",}}>${price}</span></h5>
                    <h5>Shipping Charge: <span style={{color:"orange",}}>${shipping
}</span></h5>
                </div>

            </div>

<button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/> </button>

        </div>
    );
};

ReviewItem.propTypes={
    product:PropTypes.object.isRequired, 
    handleRemoveFromCart:PropTypes.func.isRequired 
}



export default ReviewItem;