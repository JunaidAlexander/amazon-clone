import React, { useContext } from 'react';
import './Checkout.css';
import ShoppingContext from '../Shopping/ShoppingContext';
import CheckoutProduct from './CheckoutProducts';
import SubTotal from './SubTotal';

const Checkout = () => {
  const { user, basket } = useContext(ShoppingContext);
  
  
  console.log('basket: ', basket); // Destructure user and basket from the ShoppingContext
  // Destructure user and basket from the ShoppingContext

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AbYAyNxts0eqTW-l2QOs3Y1Uw_N5nwy49Q&usqp=CAU'
          alt=''
        />
      </div>
      <div className='checkout__right'>
        <h3>Hello {user?.email}</h3>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            key={item.id} // Add a unique key prop for each item in the map loop
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
