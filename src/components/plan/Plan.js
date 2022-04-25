import React from "react";
import styles from "./plan.module.css";
import { useNavigate } from "react-router";
const Plan = () => {
  const navigate = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate("/login-page3");
  };
  return (
    <div className={styles.plan}>
      <div className="container">
        <div className={`row`}>
          <div
            className={`col-lg-3 mb-3 ${styles.link_plan}`}
            onClick={() => {
              navigate(`/checkout-plan/${1}`);
            }}>
            <div className={styles.bannerContent}>
              <h3>MICRO</h3>
              <h2>470</h2>
              <p>prepago anual</p>
              <p>6 S/49 al mes</p>
            </div>
            <div className={styles.MicroServices}>
              <ul>
                <li>Vende productos o servicios</li>
                <li>Catalogo para 50 items</li>
                <li>Carrito de compras</li>
                <li>Mutiples pasarelas de pago Un usuario administrador</li>
                <li>0% de comision si vendes menos de S/ 10,000 al mes</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
              </ul>
            </div>
          </div>
          <div
            className={`col-lg-3 mb-3 ${styles.link_plan}`}
            onClick={() => {
              navigate(`/checkout-plan/${2}`);
            }}>
            <div className={styles.bannerContent}>
              <h3>SMALL</h3>
              <h2>950</h2>
              <p>prepago anual</p>
              <p>6 S/49 al mes</p>
            </div>
            <div className={styles.MicroServices}>
              <ul>
                <li>Vende productos o servicios</li>
                <li>Catalogo para 50 items</li>
                <li>Carrito de compras</li>
                <li>Mutiples pasarelas de pago Un usuario administrador</li>
                <li>0% de comision si vendes menos de S/ 10,000 al mes</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
              </ul>
            </div>
          </div>
          <div
            className={`col-lg-3 mb-3 ${styles.link_plan}`}
            onClick={() => {
              navigate(`/checkout-plan/${3}`);
            }}>
            <div className={styles.bannerContent}>
              <h3>MEDIUM</h3>
              <h2>1430</h2>
              <p>prepago anual</p>
              <p>6 S/49 al mes</p>
            </div>
            <div className={styles.MicroServices}>
              <ul>
                <li>Vende productos o servicios</li>
                <li>Catalogo para 50 items</li>
                <li>Carrito de compras</li>
                <li>Mutiples pasarelas de pago Un usuario administrador</li>
                <li>0% de comision si vendes menos de S/ 10,000 al mes</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
              </ul>
            </div>
          </div>
          <div
            className={`col-lg-3 mb-3 ${styles.link_plan}`}
            onClick={() => {
              navigate(`/checkout-plan/${4}`);
            }}>
            <div className={styles.bannerContent}>
              <h3>LARGE</h3>
              <h2>2870</h2>
              <p>prepago anual</p>
              <p>6 S/49 al mes</p>
            </div>
            <div className={styles.MicroServices}>
              <ul>
                <li>Vende productos o servicios</li>
                <li>Catalogo para 50 items</li>
                <li>Carrito de compras</li>
                <li>Mutiples pasarelas de pago Un usuario administrador</li>
                <li>0% de comision si vendes menos de S/ 10,000 al mes</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
                <li>e 2% de comision si vendes mas de S 9,000 al mes</li>
                <li>Libro de reclamaciones</li>
                <li>Certificado de Seguridad SSL</li>
                <li>Notificaciones Push</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className={styles.lastBtnDiv}>
          <button className={styles.lastBtn} onClick={SubmitHandler}>
            CONTRATALO AHORA
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Plan;
