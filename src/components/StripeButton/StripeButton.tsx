import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import specialtyOne from "src/assets/specialties/1-specialty.jpg";

interface StripeButtonProps {
  price: number;
}

const StripeButton: React.FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publihsableKey = "pk_test_MgI7rhWsrotGAzDg4WrMQHg600GHo651Jq";

  const onToken = (token: Token) => {
    console.log("token: ", token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Pizza Shop"
      billingAddress
      shippingAddress
      image={specialtyOne}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={token => {
        onToken(token);
      }}
      stripeKey={publihsableKey}
    />
  );
};

export { StripeButton };
