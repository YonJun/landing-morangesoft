import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import styles from "./form1.module.css";

const Form1 = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [formOne, setFormOne] = useState({
    email: "",
    name: "",
    lastname: "",
    id_payment_method: "",
    id_membership: "",
    telefono: "",
  });

  const [members, setMembers] = useState([]);
  const [payOpts, setPayOpts] = useState([]);

  const getPayAPI = process.env.REACT_APP_GET_PAYMENT;
  const getMembersAPI = process.env.REACT_APP_GET_MEMBERS;

  useEffect(() => {
    if (localStorage.getItem("Email") === "") {
      setEmail("");
      alert("empty");
    } else {
      setEmail(localStorage.getItem("Email"));
      console.log("email", formOne.email);
    }
    // eslint-disable-next-line
  }, [email]);
  useEffect(() => {
    axios
      .get(getMembersAPI, {
        headers: {
          proyecto: "17sd%s#7913G%FJ600",
        },
      })
      .then((res) => {
        setMembers(res.data);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios
      .get(getPayAPI, {
        headers: {
          proyecto: "17sd%s#7913G%FJ600",
        },
      })
      .then((res) => {
        setPayOpts(res.data);
      });
    // eslint-disable-next-line
  }, []);

  const onValueChange = (e) => {
    setFormOne({ ...formOne, [e.target.name]: e.target.value });
  };

  const postAPI = process.env.REACT_APP_POST_ADD_CLIENT;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("email is required");
    } else if (formOne.name === "") {
      alert("Name required");
    } else if (formOne.lastname === "") {
      alert("Coreo Electronico LastName is required");
    } else if (formOne.telefono === "") {
      alert("telephono is required");
    }
    await axios
      .post(postAPI, { header: { proyecto: "17sd%s#7913G%FJ600" } }, formOne)
      .then((res) => console.log(res));

    navigate("/login-page2", {
      state: {
        email: formOne.email,
        id_payment_method: formOne.id_payment_method,
        id_membership: formOne.id_membership,
      },
    });
  };

  return (
    <div className={styles.form1}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5">Registrate en miTienda</h2>
        </div>
        <div className={styles.formBorder}>
          <div className={styles.socialButton}>
            <button className={styles.fbBtn}>CONTINUAR CON FACEBOOK</button>
          </div>
          <div className={styles.socialButton}>
            <button className={styles.googleBtn}>CONTINUAR CON Google</button>
          </div>

          <div className={styles.form1WidthDiv}>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={onValueChange}
                  value={email ? email : formOne.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={onValueChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Coreo Electronico LastName</Form.Label>
                <Form.Control
                  name="lastname"
                  onChange={onValueChange}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  onChange={onValueChange}
                />
              </Form.Group>
              <div>
                <Form.Control
                  as="select"
                  name="id_membership"
                  onChange={onValueChange}
                >
                  {members &&
                    members.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.nombre}
                      </option>
                    ))}
                </Form.Control>
              </div>

              <div>
                <Form.Control
                  as="select"
                  name="id_payment_method"
                  onChange={onValueChange}
                >
                  {payOpts &&
                    payOpts.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.nombre}
                      </option>
                    ))}
                </Form.Control>
              </div>

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

export default Form1;
