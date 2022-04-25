import React, { useState, useEffect } from "react";
import styles from "./bringBusiness.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { customAxios } from "../lib/axios";

const BringBusiness = () => {
  const navigate = useNavigate();

  const formNav = () => {
    navigate("/login-page1");
  };
  const [pic, setPic] = useState([]);
  const getPic = async () => {
    try {
      var res = await customAxios.get("/get-plantillas");
      console.log(res);
      setPic(res.data);
      // console.log("categ", pic[0] ? pic[0].imagen : "Hoho");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPic();
  }, [pic]);
  return (
    <div className={styles.BringBusiness}>
      <div className="container">
        <div className={styles.content}>
          <h2>Bring your business online</h2>
          <p>
            Create an ecommerce website backed by powerful tools that help you
            find customers, dive sales, and manage your day-to-day
          </p>
          <div className={styles.contentSubHeading}>
            <h6>Explore more examples</h6>
          </div>
          <div className={styles.contentSubHeadingImgs}>
            <div className="row">
              {pic && pic.length > 0 ? (
                pic.map((img) => (
                  <div className="col-lg-3 " key={img.id}>
                    <div className={styles.contentSubHeadingImg}>
                      <img
                        src={img.imagen}
                        alt=""
                        width="100%"
                        onClick={formNav}
                      />
                      <h6 onClick={formNav}>{img.titulo}</h6>
                      <p onClick={formNav}>{img.nombre}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>No records</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BringBusiness;
