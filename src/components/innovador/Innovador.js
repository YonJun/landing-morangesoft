import React, { useState, useEffect } from "react";
import styles from "./innovador.module.css";
import axios from "axios";
const Innovador = () => {
  const [pic, setPic] = useState([]);
  const [pic1, setPic1] = useState([]);
  const getPic1 = async () => {
    try {
      // const ab = 1;
      const api = "http://216.238.69.159:3001/get-alianzas";

      var res = await axios.get(api, {
        headers: { proyecto: "17sd%s#7913G%FJ600" },
      });
      // console.log(res);
      setPic1(res.data);
      console.log("categ", pic1[0] ? pic1[0].imagen : "Hoho");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPic1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pic1]);
  const getPic = async () => {
    try {
      const api = "http://216.238.69.159:3001/get-premios";
      var res = await axios.get(api, {
        headers: { proyecto: "17sd%s#7913G%FJ600" },
      });
      setPic(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPic();
  }, [pic]);
  return (
    <div className={styles.innovadorSection}>
      <div className="container">
        <div className={styles.innovadorContent}>
          <h2> UN EMPRENDIMIENTO INNOVADOR</h2>
          <p>
            MiTienda,pe ha sido seleccionada para formar parte de la óta
            generación de Startup Perú, el programa del Estado Peruano para la
            promoción y consolidación de Empresas Innovadoras, el mismo que es
            administrado por el Programa Nacional de Innovación para la
            Competitividad y Productividad (Innovate Perú): ambos programas
            liderados por el Ministerio de la Producción. Durante este ano
            estamos siendo acompañados por 1551, la incubadora de empresas
            innovadoras de la Universidad Nacional Mayor de San Marcos.
          </p>
          <div className={styles.images}>
            <div className="row">
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <a
                    href={pic[0] ? pic[0].link : "loading"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={pic[0] ? pic[0].imagen : "loading"}
                      alt=""
                      width="50%"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <a
                    href={pic[1] ? pic[1].link : "loading"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={pic[1] ? pic[1].imagen : "loading"}
                      alt=""
                      width="50%"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <a
                    href={pic[2] ? pic[2].link : "loading"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={pic[2] ? pic[2].imagen : "loading"}
                      alt=""
                      width="50%"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <a
                    href={pic[3] ? pic[3].link : "loading"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={pic[3] ? pic[3].imagen : "loading"}
                      alt=""
                      width="50%"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h3>ALIANZAS ESTRATEGGICAS</h3>
          <div className="row">
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <a
                  href={pic1[0] ? pic1[0].link : "loading"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={pic1[0] ? pic1[0].imagen : "loading"}
                    alt=""
                    width="50%"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <a
                  href={pic1[1] ? pic1[1].link : "loading"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={pic1[1] ? pic1[1].imagen : "loading"}
                    alt=""
                    width="50%"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <a
                  href={pic1[2] ? pic1[2].link : "loading"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={pic1[2] ? pic1[2].imagen : "loading"}
                    alt=""
                    width="50%"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <a
                  href={pic1[3] ? pic1[3].link : "loading"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={pic1[3] ? pic1[3].imagen : "loading"}
                    alt=""
                    width="50%"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovador;
