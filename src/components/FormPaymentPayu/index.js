import React, { Fragment } from "react";

export default function FormPaymentPayu({ formRef, dataInfo }) {
  return (
    <Fragment>
      {dataInfo ? (
        <form
          ref={formRef}
          method="POST"
          action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
          <input type="hidden" name="merchantId" value={dataInfo.merchant_id} />
          <input type="hidden" name="accountId" value={dataInfo.accountId} />
          <input type="hidden" name="description" value="Pago Inkalandia" />
          <input
            type="hidden"
            name="referenceCode"
            value={dataInfo.referenceCode}
          />
          <input type="hidden" name="amount" value={dataInfo.precioData} />
          <input type="hidden" name="tax" value="0" />
          <input type="hidden" name="taxReturnBase" value="0" />
          <input type="hidden" name="currency" value="PEN" />
          <input type="hidden" name="signature" value={dataInfo.signature} />
          <input type="hidden" name="test" value="1" />
          <input type="hidden" name="buyerEmail" value={dataInfo.correo} />
          <input type="hidden" name="responseUrl" value={dataInfo.url} />
          <input type="hidden" name="confirmationUrl" value={dataInfo.url} />
        </form>
      ) : null}
    </Fragment>
  );
}
