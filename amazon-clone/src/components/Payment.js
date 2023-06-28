import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import ShoppingContext from '../Shopping/ShoppingContext';
import CheckoutProducts from './CheckoutProducts';
import CurrencyFormat from 'react-currency-format';



export default function Payment() {
  const { user, basket, getBasketTotal } = useContext(ShoppingContext);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Generate the special stripe secret which will allow us to charge the customer
    const getClientSecret = async () => {
      const response = await axios.post({
        method: 'post',    
        url:`/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket, getBasketTotal]);

  console.log("the secret is => ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
      setSucceeded(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      history.push('/orders');
      // Clear the basket or do any other necessary actions
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty || event.error);
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Checkout <Link to="/checkout">{basket?.length} items</Link></h1>
        <div className='payment__section'>
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Wellington</p>
            <p>Cape Town, SA</p>
          </div>
        </div>

        <div className='payment__section'>
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className='payment__items'>
            {basket.map(item => (
              <CheckoutProducts
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className='payment__section'>
          <div className="payment__title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__price__Container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"R"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
