import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css';
import ShoppingContext from '../Shopping/ShoppingContext';

const SubTotal = () => {
  const { basket, getBasketTotal } = useContext(ShoppingContext);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        render={(value) => (
          <>
            <p>
              SubTotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" />
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        prefix='R'
      />
<button>Proceed to Checkout</button>
</div>
);
};

export default SubTotal;
