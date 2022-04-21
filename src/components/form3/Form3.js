import React, { useEffect, useState } from "react";
import styles from "./form3.module.css";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { PaymentMethod } from "../PaymentMethods";
import { Button, Modal } from "react-bootstrap";

const PLANS = [
  {
    id: "1",
    name: "MICRO",
    price: 10,
  },
  {
    id: "2",
    name: "SMALL",
    price: 10,
  },
  {
    id: "3",
    name: "MEDIUM",
    price: 10,
  },
  {
    id: "4",
    name: "LARGE",
    price: 10,
  },
];

function getPlanDetails(idPlan) {
  return PLANS.filter((plan) => plan.id === idPlan)[0];
}

const Form3 = () => {
  const [plan, setPlan] = useState(null);
  const { id } = useParams();
  const [typeOfDocument, setTypeOfDocument] = useState("dni");
  const [form, setForm] = useState(null);
  const [disableForm, setDisableForm] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    // navigate("/login-page3");
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    setForm(formDataObj);
    setDisableForm(true);
    setModalShow(true);
    // alert(JSON.stringify(formDataObj, null, 2));
    // console.log(formDataObj);
  };
  const handleChange = (e) => {
    setTypeOfDocument(e.target.value);
  };

  useEffect(() => {
    const planDetails = getPlanDetails(id);
    if (planDetails) {
      setPlan(planDetails);
    }
  }, [id]);

  if (plan) {
    return (
      <div className={styles.form1}>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-5">{`Detalles previos de la compra del plan ${plan.name} en miTienda`}</h2>
          </div>
          <div className={styles.formBorder}>
            <div className={styles.form1WidthDiv}>
              <Form onSubmit={SubmitHandler}>
                <fieldset>
                  <Form.Group className="mb-3" controlId="typeOfDocument">
                    <Form.Label className="me-3">Tipo de documento</Form.Label>
                    <Form.Check
                      id="dni"
                      value="dni"
                      inline
                      label="DNI"
                      type="radio"
                      name="type_document"
                      checked={typeOfDocument === "dni"}
                      onChange={handleChange}
                    />
                    <Form.Check
                      id="ruc"
                      value="ruc"
                      inline
                      label="RUC"
                      type="radio"
                      name="type_document"
                      checked={typeOfDocument === "ruc"}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {typeOfDocument === "dni" ? (
                    <Form.Group className="mb-3" controlId="apellidos_nombres">
                      <Form.Label>Apellidos y Nombres</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="apellidos_nombres"
                        required={typeOfDocument === "dni"}
                      />
                    </Form.Group>
                  ) : (
                    <Form.Group className="mb-3" controlId="razon_social">
                      <Form.Label>Razon Social</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="razon_social"
                        required={typeOfDocument === "ruc"}
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="numero_documento">
                    <Form.Label>Numero documento </Form.Label>
                    <Form.Control
                      name="numero_documento"
                      defaultValue="88451265"
                      type="number"
                      placeholder=""
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="correo_electronico">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                      name="correo_electronico"
                      defaultValue="user@gmail.com"
                      type="email"
                      placeholder=""
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="telefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      name="telefono"
                      defaultValue="987654644"
                      type="number"
                      required
                    />
                  </Form.Group>

                  <div className={styles.lastBtn}>
                    <button
                      className="btn-primary btn"
                      variant="primary"
                      type="submit">
                      Ir a pagar
                    </button>
                  </div>
                </fieldset>
              </Form>
            </div>
          </div>
          <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
              <Modal.Title>
                Paga con tarjeta de Crédito o Débito Visa
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PaymentMethod form={form} plan={plan} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Pagar</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center">
      <h3>Plan no encontrado</h3>
    </div>
  );
};

export default Form3;
