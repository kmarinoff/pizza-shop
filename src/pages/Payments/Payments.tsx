import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Token } from "react-stripe-checkout";
import { getPayments } from "src/reduxStore";
// import { toast } from "react-toastify";

const Payments = () => {
  const dispatch = useDispatch();
  const loadingPayments: boolean = useSelector((state: any) => {
    return state.payments.isFetching;
  });
  const payments: Array<{
    tokenObject: Token;
    userId: string;
  }> = useSelector((state: any) => {
    return state.payments.payments;
  });

  React.useEffect(() => {
    dispatch(getPayments());
  }, [dispatch]);

  return (
    <div>
      <h1>Payments:</h1>
      <br />
      {loadingPayments ? (
        <>
          <Spinner animation="grow" />
        </>
      ) : (
        <>
          <ListGroup>
            {payments.map((payment) => (
              <ListGroup.Item key={Math.random()}>
                <div>Name: {payment.tokenObject.card.name}</div>
                <div>Email: {payment.tokenObject.email}</div>
                <div>Address: {payment.tokenObject.card.address_line1}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </div>
  );
};

export { Payments };
