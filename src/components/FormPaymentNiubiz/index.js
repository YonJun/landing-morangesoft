import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FetchController from "../FetchController";
import { customAxios } from "../lib/axios";
import { baseURL } from "../lib/constants";

async function getData({ price }) {
  const address = "";
  const carrito = [];
  const token = "";
  const valor_envio = 0;
  const valor_servicio = 0;
  const factura = "";

  const data = {
    sumaTotal: price,
    valorAddress: address,
    carrito,
    token,
    valor_envio,
    valor_servicio,
    factura,
    peso: 0,
  };

  const response = await customAxios.post(`/pago-niubiz`, data);
  return response;
}

const useNiubiz = ({ price }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const init = async () => {
      const response = await getData({
        price,
      });
      setIsLoading(false);
      if (response.status === 200) {
        setData(response.data);
      } else {
        setError(response.data);
      }
    };
    setIsLoading(true);
    init();
  }, [price]);

  return { data, isLoading, error };
};

export default function FormPaymentNiubiz({ plan }) {
  console.log("render FormPaymentNiubiz");
  const { data, isLoading, error } = useNiubiz({ price: plan.price });

  const [actionUrl, setActionUrl] = useState("");

  const buttonContainerRef = useRef();

  useEffect(() => {
    if (!data) {
      return;
    }

    let nodePrincipal = buttonContainerRef.current;
    const script = document.createElement("script");
    script.src = "https://static-content.vnforapps.com/v2/js/checkout.js";
    script.setAttribute("data-sessiontoken", data.sessionKey);
    script.setAttribute("data-channel", "web");
    script.setAttribute("data-merchantid", data.merchantId);
    script.setAttribute(
      "data-merchantlogo",
      "https://www.panel.inkalandia.com/uploads/39rZxn7nI.png",
    );
    script.setAttribute("data-formbuttoncolor", "#D80000");
    script.setAttribute("data-purchasenumber", data.purchaseNumber);
    script.setAttribute("data-amount", data.amount);
    script.setAttribute("data-expirationminutes", "8");
    script.setAttribute("data-buttonsize", "MEDIUM");
    script.setAttribute("data-buttoncolor", "GRAY");
    script.setAttribute("data-merchantname", "INKALANDIA");
    script.setAttribute("data-timeouturl", "https://google.com");
    script.async = true;
    setActionUrl(
      `${baseURL}/approve-order-payment-data/11/${data.valor_pago_general}/${data.direccion_entrega}/${data.token}/${data.valor_servicio}/${data.valor_envio}/${data.id_array}/${data.precios_array}/${data.cantidad_array}/${data.securityToken}/${data.amount}/${data.purchaseNumber}/${data.factura}/${data.peso}/${data.id_proyecto}`,
    );
    nodePrincipal.appendChild(script);
  }, [data]);
  return (
    <FetchController isLoading={isLoading} error={error} done={data !== null}>
      <form action={actionUrl} method="POST" ref={buttonContainerRef} />
    </FetchController>
  );
}
