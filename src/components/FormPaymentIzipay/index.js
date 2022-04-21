import { Spinner } from "react-bootstrap";
import React, { useEffect, useContext, Fragment, useState } from "react";
import "./style.css";
import { customAxios } from "../lib/axios";

async function getDataIziPay({ price, email }) {
  const address = "";
  const carrito = [];
  const token = "";
  const valor_envio = "";
  const valor_servicio = "";
  const factura = "";
  const data = {
    sumaTotal: price,
    valorAddress: address,
    carrito,
    token,
    valor_envio,
    valor_servicio,
    email,
    factura,
    peso: 1,
  };

  const response = await customAxios.post(`/pago-izipay/${price}`, data);
  return response;
}

export default function FormPaymentIzipay(props) {
  console.log("props", props);
  const [error, setError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dataIzipay, setDataIzipay] = useState(null);
  useEffect(() => {
    const init = async () => {
      const { form, plan } = props;
      const iziPayResponse = await getDataIziPay({
        price: plan.price,
        email: form.correo_electronico,
      });
      console.log("iziPayResponse", iziPayResponse);
      setIsLoading(false);
      if (iziPayResponse.status === 200) {
        setDataIzipay(iziPayResponse.data);
      } else {
        setError(iziPayResponse.data);
      }
    };
    init();
  }, [props]);

  useEffect(() => {
    let script = null;
    let script2 = null;
    let script3 = null;
    if (dataIzipay) {
      script = document.createElement("script");
      script2 = document.createElement("link");
      script3 = document.createElement("script");
      script2.rel = "stylesheet";
      script2.href =
        "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic-reset.css";
      script3.src =
        "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js";
      script.src =
        "https://static.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js";
      script.setAttribute("kr-public-key", dataIzipay.public_key);
      script.setAttribute("kr-post-url-success", dataIzipay.urlReturn);
      script.async = true;
      script2.async = true;
      script3.async = true;
      document.body.appendChild(script);
      document.body.appendChild(script2);
      document.body.appendChild(script3);
    }
    return () => {
      if (script && script2 && script3) {
        document.body.removeChild(script);
        document.body.removeChild(script2);
        document.body.removeChild(script3);
      }
    };
  }, [dataIzipay]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Spinner animation="grow" />
      </div>
    );
  }
  if (dataIzipay) {
    return (
      <Fragment>
        <div className="logo-izipay">
          {/* <img src={systemState.logo} className="logo-img-izipay"/> */}
        </div>
        <div className="kr-embedded" kr-form-token={dataIzipay.formData}>
          <div className="kr-pan"></div>
          <div className="kr-expiry"></div>
          <div className="kr-security-code"></div>
          <button className="kr-payment-button"></button>
          <div className="kr-form-error"></div>
        </div>
      </Fragment>
    );
  }
  if (error) {
    return (
      <div className="text-center">
        <p>Error details:</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
  return <div>Algo fallo</div>;
}
