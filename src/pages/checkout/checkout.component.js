import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Quantity</span>
        </div>

        <div className='header-block'>
          <span>Price</span>
        </div>

        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>Total : ₦{total}</span>
      </div>
      <StripeCheckoutButton price={total}></StripeCheckoutButton>
    </div>
  );
};

const mapStatesToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStatesToProps)(CheckoutPage);
