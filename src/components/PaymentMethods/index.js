import { cloneElement, useEffect, useState } from "react";
import FormPaymentIzipay from "../FormPaymentIzipay";
import FormPaymentPayPal from "../FormPaymentPayPal";
import FormPaymentNiubiz from "../FormPaymentNiubiz";
import FormPaymentPayu from "../FormPaymentPayu";
import FormPaymentCulqi from "../FormPaymentCulqi";

import { Spinner, Tab, Tabs } from "react-bootstrap";
import { customAxios } from "../lib/axios";

const ListPaymentMethod = {
  10: FormPaymentNiubiz,
  12: FormPaymentIzipay,
};

export const PaymentMethod = ({ form, plan }) => {
  const [tabKey, setTabKey] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const init = async () => {
      const data = {
        tablename: "metodos_pagos",
        nombreid: "estado",
        id: "1",
      };
      const resp = await customAxios.post("/filter-data-generic", data);
      console.log("resp", resp);
      setIsLoading(false);
      if (resp.status === 200) {
        setData(resp.data);

        console.log("success", resp.data);
      } else {
        console.log("error", resp.data);
        setError(resp.data);
      }
    };
    init();
  }, []);
  useEffect(() => {
    if (data) {
      setTabKey(data[0].id);
    }
  }, [data]);

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
  if (error) {
    return (
      <div className="text-center">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
  if (data) {
    return (
      <>
        <pre>{JSON.stringify({ form, plan }, null, 2)}</pre>
        <Tabs
          mountOnEnter={true}
          unmountOnExit={true}
          id="tab"
          activeKey={tabKey}
          onSelect={(k) => setTabKey(k)}>
          {data.map((paymentMethod) => {
            // {
            // 	"id": 10,
            // 	"nombre": "Pago Contra Entrega (en Efectivo)",
            // 	"api_key": null,
            // 	"url": "",
            // 	"token": null,
            // 	"estado": "1",
            // 	"merchant_id": null,
            // 	"image": "https://www.cebracreativos.com/wp-content/uploads/2020/05/contraentrega.png",
            // 	"descripcion": "Paga en efectivo o con tarjeta Visa o Mastercard",
            // 	"id_negocio": "71gv#s%7913G#@S600",
            // 	"id_proyecto": "17sd%s#7913G%FJ600",
            // 	"key_render": 10,
            // 	"id_moneda": null
            // },
            const Comp = ListPaymentMethod[paymentMethod.id];
            return (
              <Tab
                key={paymentMethod.id}
                eventKey={paymentMethod.id}
                title={
                  <div className="flex items-center justify-center">
                    <img
                      src={paymentMethod.image}
                      alt={paymentMethod.nombre}
                      width={50}
                      height="auto"
                    />
                    <p>{paymentMethod.nombre}</p>
                  </div>
                }>
                <Comp form={form} plan={plan} />
              </Tab>
            );
          })}
        </Tabs>
      </>
    );
  }
  return <div>Algo fallo</div>;
};
