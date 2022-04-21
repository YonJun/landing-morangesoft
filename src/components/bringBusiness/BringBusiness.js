import React, { useState, useEffect } from "react";
import styles from "./bringBusiness.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

const BringBusiness = () => {
  const navigate = useNavigate();

  const formNav = () => {
    navigate("/login-page1");
  };
  const [pic, setPic] = useState([]);
  const getPic = async () => {
    try {
      // const ab = 1;
      const api = "http://216.238.69.159:3001/get-plantillas";

      var res = await axios.get(api, {
        headers: { proyecto: "17sd%s#7913G%FJ600" },
      });
      // console.log(res);
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
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img
                    src={pic[0] ? pic[0].imagen : "loading"}
                    alt=""
                    width="100%"
                    onClick={formNav}
                  />
                  <h6 onClick={formNav}>
                    {pic[0] ? pic[0].titulo : "loading"}
                  </h6>
                  <p onClick={formNav}>{pic[0] ? pic[0].nombre : "loading"}</p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img
                    src={pic[1] ? pic[1].imagen : "loading"}
                    alt=""
                    width="100%"
                  />
                  <h6>{pic[1] ? pic[1].titulo : "loading"}</h6>
                  <p>{pic[1] ? pic[1].nombre : "loading"}</p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img
                    src={pic[2] ? pic[2].imagen : "loading"}
                    alt=""
                    width="100%"
                  />
                  <h6>{pic[2] ? pic[2].titulo : "loading"}</h6>
                  <p>{pic[2] ? pic[2].nombre : "loading"}</p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img
                    src={pic[3] ? pic[3].imagen : "loading"}
                    alt=""
                    width="100%"
                  />
                  <h6>{pic[3] ? pic[3].titulo : "loading"}</h6>
                  <p>{pic[3] ? pic[3].nombre : "loading"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BringBusiness;
