import React from 'react';
import data from '../utils/currency';

const select = ({ OnSelectChange }) => {
  return (
    <select className='select-tray' name='currency' onChange={OnSelectChange}>
      {Object.keys(data).map((currency) => (
        <option key={currency.symbol} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default select;
