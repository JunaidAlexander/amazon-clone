import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css';
import ShoppingContext from '../Shopping/ShoppingContext';
import { useHistory } from 'react-router-dom';

const SubTotal = () => {
  const history = useHistory();
  const { basket, getBasketTotal } = useContext(ShoppingContext);
  console.log(getBasketTotal(basket))

const handleTest = (e) => {
  e.preventDefault();
  console.log(getBasketTotal());

}

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
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

<button  onClick={handleTest}>Test Total</button>
<button onClick={e => history.push ('/payment')}>Proceed to Checkout</button>
</div>
);
};

export default SubTotal;
