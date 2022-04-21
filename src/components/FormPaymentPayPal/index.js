import React, { useEffect, useRef } from "react";

export default function FormPaymentPayPal({ paypalData, clearAfterPayment }) {
  const payPalRef = useRef();

  useEffect(() => {
    payPalRef.current.innerHTML = "";
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Pago Inkalandia",
                amount: {
                  currency_code: "USD",
                  value: parseFloat(paypalData.pago),
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          clearAfterPayment();
          window.location.href = paypalData.url;
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(payPalRef.current);
  }, [paypalData]);

  return <div ref={payPalRef}></div>;
}
