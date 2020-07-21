import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { toast } from "react-toastify";
import specialtyOne from "src/assets/specialties/1-specialty.jpg";
import { firestore } from "src/setup/firebase";

interface StripeButtonProps {
  price: number;
  handleToken: (token: Token) => void;
}

const StripeButton: React.FC<StripeButtonProps> = ({ price, handleToken }) => {
  const priceForStripe = price * 100;
  const publihsableKey = "pk_test_MgI7rhWsrotGAzDg4WrMQHg600GHo651Jq";
  const { uid }: { uid: any } = useSelector(
    (state: any) => state.firebase.auth
  );

  const onToken = (token: Token) => {
    const paymentsCollection = firestore.collection("/payments");
    paymentsCollection
      .add({
        userId: uid,
        tokenObject: token,
      })
      .then((res) => {
        axios({
          url: "http://localhost:5000/payment",
          method: "post",
          data: { amount: Math.ceil(priceForStripe), token },
        })
          .then((responce) => {
            toast.success("Payment successful!");
            handleToken(responce.data.success);
          })
          .catch((error) => {
            toast.error(
              "There was an issue with your payment. Please make sure you use the provided credit card."
            );
            console.log("Payment error:", error);
          });
      })
      .catch((err) => {
        toast.error("There was an issue with firebase.");
        console.log("Firebase error:", err);
      });
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
