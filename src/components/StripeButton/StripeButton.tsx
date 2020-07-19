/* eslint no-console: off, no-unused-vars: off */

import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { toast } from "react-toastify";
import specialtyOne from "src/assets/specialties/1-specialty.jpg";

interface StripeButtonProps {
  price: number;
  handleToken: (token: Token) => void;
}

const StripeButton: React.FC<StripeButtonProps> = ({ price, handleToken }) => {
  const priceForStripe = price * 100;
  const publihsableKey = "pk_test_MgI7rhWsrotGAzDg4WrMQHg600GHo651Jq";

  const onToken = (token: Token) => {
    toast.success("Payment successful!");
    handleToken(token);
  };

  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="Pizza Shop"
        billingAddress
        image={specialtyOne}
        description={`Your total is $${parseFloat(String(price)).toFixed(2)}`}
        allowRememberMe={false}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publihsableKey}
      />
    </>
  );
};

export { StripeButton };
