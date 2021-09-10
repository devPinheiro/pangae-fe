import React, { useEffect } from 'react';
import CartItem from './cartItem';
import Select from './select';

const CartModal = ({ item }) => {
    useEffect(()=>{
        
    }, [item])
  return (
    <div className='cart-tray'>
      <Select />
      {
        item ? item.map((item) => {
          return <CartItem {...item} />;
        }) : null}
    </div>
  );
};

export default CartModal;
