import React from 'react'
import Button from './button';

const cartItem = ({title, price, quantity, increaseQuantity, decreaseQuantity}) => {
    return (
      <div className='cart-item-tray'>
        <Button children='+' click={increaseQuantity}></Button>
        {quantity}
        <Button children='-' click={decreaseQuantity}></Button>
        <div>{title}</div>
        <div>{price}</div>
      </div>
    );
}

export default cartItem
