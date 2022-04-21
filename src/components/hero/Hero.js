import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";
import img from "../../assets/recursos/mainBanner.PNG";
import { useNavigate } from "react-router";
const Hero = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const changeHandler = (e) => {
    setState(e.target.value);
  };
  const SubmitHandler = () => {
    if (state === "") {
      alert("Email cannot be empty");
    } else {
      localStorage.setItem("Email", state);
      navigate("/login-page1");
    }
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className={styles.leftContent}>
              <h1>The Platform commerce is built on</h1>
              <p>
                More than a million of the world's most successful brands trust
                shopify to sell, ship and process payments anywhere
              </p>
              <form onSubmit={SubmitHandler}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={state || ""}
                  onChange={changeHandler}
                  required
                />
                <button type="submit" className={styles.leftBtn}>
                  Start free trial
                </button>
              </form>
              <p>
                Try shopify free for 14 days, no credit card required. By
                entering your email, you agree to receive marketing emails from
                shopify.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className={styles.rightImg}>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
