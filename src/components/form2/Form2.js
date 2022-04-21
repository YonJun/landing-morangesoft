import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./Form2.module.css";
import Form from "react-bootstrap/Form";

const Form2 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const { email, id_payment_method, id_membership } = state;

  const [formTwo, setFormTwo] = useState({
    email: email || "",
    id_payment_method: id_payment_method || "",
    id_membership: id_membership || "",
    id_documento: "",
    numero_documento: "",
    razon_social: "",
  });

  const [doc, setDoc] = useState([]);

  const docAPI = process.env.REACT_APP_GET_DOCUMENTS;

  useEffect(() => {
    axios
      .get(docAPI, {
        headers: {
          proyecto: "17sd%s#7913G%FJ600",
        },
      })
      .then((res) => {
        setDoc(res.data);
      });
    // eslint-disable-next-line
  }, []);

  const onValueChange = (e) => {
    setFormTwo({ ...formTwo, [e.target.name]: e.target.value });
  };

  const apiPostDetial = process.env.REACT_APP_POST_ADD_CLIENT_DETAILS;
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formTwo);

    await axios
      .post(
        apiPostDetial,
        { header: { proyecto: "17sd%s#7913G%FJ600" } },
        formTwo
      )
      .then((res) => console.log(res));
    alert("Form sent correctly!");
    navigate("/");
  };

  return (
    <div className={styles.form1}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5">Registrate en miTienda</h2>
        </div>
        <div className={styles.formBorder}>
          <div className={styles.form1WidthDiv}>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Razon_social </Form.Label>
                <Form.Control
                  type="text"
                  name="razon_social"
                  onChange={onValueChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Numero Documento </Form.Label>
                <Form.Control
                  type="text"
                  name="numero_documento"
                  onChange={onValueChange}
                />
              </Form.Group>

              <Form.Control
                as="select"
                name="id_documento"
                onChange={onValueChange}
              >
                {doc &&
                  doc.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre_documento}
                    </option>
                  ))}
              </Form.Control>

              {/*               <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Elige tu plan </Form.Label>
                <Form.Control
                  type="text"
                  name="plan"
                  onChange={onValueChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Como quieres pagario?</Form.Label>
                <Form.Control
                  type="text"
                  name="payment"
                  onChange={onValueChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  onChange={onValueChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  name="surName"
                  onChange={onValueChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="me-3">Tipo de documento</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="ROC 1"
                    name="option"
                    value="ROC1"
                    type="radio"
                    onChange={onValueChange}
                    id={`inline-$'radio'-1`}
                  />
                  <Form.Check
                    inline
                    label="ROC 2"
                    value="ROC2"
                    name="option"
                    type="radio"
                    onChange={onValueChange}
                    id={`inline-$'radio'-2`}
                  />
                </div> */}

              {/*                 <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css" className="me-3">
                  RUC
                </label>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">RUC</label> </Form.Group>*/}

              <div className={styles.lastBtn}>
                <button
                  className="btn-primary btn "
                  variant="primary"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
