import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisheablekey = `pk_test_51KLTToHBFXsercW8Ox8JPxuFs49H6PbYZOkTYXewvSWhrQPSm8HoeCPjikbk3qKqqaX0PDothzYHvoVmObociaE700IUg6ENIt`;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN CLOTHING'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/RvwnBL8/pink-shirt.png'
      description={`Your Total is is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publisheablekey}
    />
  );
};

export default StripeCheckoutButton;
