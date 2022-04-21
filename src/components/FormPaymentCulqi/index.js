import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import FetchController from "../FetchController";
import { customAxios } from "../lib/axios";

const baseUrlCulqi = "https://checkout.culqi.com/js/v3";

async function getDataCulqi({ price }) {
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
    factura,
    peso: 1,
  };

  const response = await customAxios.post(`/pago-culqi/${price}`, data);
  return response;
}

const useCulqi = ({ price }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const init = async () => {
      const response = await getDataCulqi({
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

export default function FormPaymentCulqi(props) {
  const { plan } = props;
  const { data: dataCulqi, isLoading, error } = useCulqi({ price: plan.price });

  const [scriptLoaded, setScriptLoaded] = useState(
    typeof window !== "undefined" && typeof window.Culqi !== "undefined",
  );

  const handleChangeClientState = (newState, addedTags) => {
    if (addedTags && addedTags.scriptTags) {
      const foundScript = addedTags.scriptTags.find(
        ({ src }) => src === baseUrlCulqi,
      );
      if (foundScript) {
        foundScript.addEventListener("load", () => setScriptLoaded(true), {
          once: true,
        });
      }
    }
  };

  useEffect(() => {
    if (!scriptLoaded) {
      return;
    }
    if (!dataCulqi) {
      return;
    }

    window.Culqi.publicKey = dataCulqi.apiKey;
    // Configura tu Culqi Checkout
    window.Culqi.settings({
      title: "Inkalandia",
      currency: "PEN",
      description: "Pago de Compras",
      amount: plan.price,
    });
  }, [dataCulqi, scriptLoaded]);

  return (
    <div>
      <Helmet onChangeClientState={handleChangeClientState}>
        {typeof window !== "undefined" && typeof myScript === "undefined" && (
          <script async defer src={baseUrlCulqi} />
        )}
      </Helmet>
      <FetchController
        isLoading={isLoading || !scriptLoaded}
        error={error}
        done={dataCulqi !== null}>
        <Button
          onClick={() => {
            window.Culqi.open();
          }}>
          Pagar con Culqi
        </Button>
      </FetchController>
    </div>
  );
}
