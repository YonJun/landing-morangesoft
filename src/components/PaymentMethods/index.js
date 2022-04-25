import { cloneElement, useEffect, useState } from "react";
import FormPaymentIzipay from "../FormPaymentIzipay";
import FormPaymentPayPal from "../FormPaymentPayPal";
import FormPaymentNiubiz from "../FormPaymentNiubiz";
import FormPaymentPayu from "../FormPaymentPayu";
import FormPaymentCulqi from "../FormPaymentCulqi";
import Collapse from "react-bootstrap/Collapse";
import { Card, Spinner } from "react-bootstrap";
import { customAxios } from "../lib/axios";

const ListPaymentMethod = {
  10: FormPaymentNiubiz,
  12: FormPaymentIzipay,
};

export const PaymentMethod = ({ form, plan }) => {
  const [tabKey, setTabKey] = useState(null);
  const [activeKeys, setActiveKeys] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  console.log(JSON.stringify({ form, plan }));
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

  const handleActiveKey = (id) => {
    if (activeKeys.includes(id)) {
      setActiveKeys((currKeys) => currKeys.filter((crrId) => crrId !== id));
    } else {
      setActiveKeys((currKeys) => [...currKeys, id]);
    }
  };

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
        <div>
          {data.map((paymentMethod) => {
            const Comp = ListPaymentMethod[paymentMethod.id];
            return (
              <Card key={paymentMethod.id}>
                <Card.Header
                  onClick={() => handleActiveKey(paymentMethod.id)}
                  style={{ cursor: "pointer" }}>
                  <div className="flex items-center justify-center">
                    <img
                      src={paymentMethod.image}
                      alt={paymentMethod.nombre}
                      width={50}
                      height="auto"
                    />
                    <p>{paymentMethod.nombre}</p>
                  </div>
                </Card.Header>
                <Card.Body className="p-0">
                  <Collapse
                    in={activeKeys.includes(paymentMethod.id)}
                    mountOnEnter={true}
                    unmountOnExit={false}>
                    <div>
                      <Comp form={form} plan={plan} />{" "}
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
  return <div>Algo fallo</div>;
};
