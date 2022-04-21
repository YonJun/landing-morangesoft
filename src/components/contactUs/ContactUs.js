import React from "react";
import styles from "./contactUs.module.css";
import peopleImg from "../../assets/recursos/peoples.PNG";
import msgIcon from "../../assets/recursos/msgIcon.PNG";
import rectIcon from "../../assets/recursos/rectIcon.PNG";
import clockIcon from "../../assets/recursos/clockIcon.PNG";
import successIcon from "../../assets/recursos/successIcon.PNG";
import { useNavigate } from "react-router";
const ContactUs = () => {
  const navigate = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate("/login-page1");
  };
  return (
    <div className={styles.contactSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className={styles.leftContent}>
              <img src={peopleImg} alt="" />
              <h3>The VTX team will guide you every step of the way</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className={styles.rightContent}>
              <div className={styles.rightContentFirstRow}>
                <div className={styles.chatContent}>
                  <img src={msgIcon} alt="" />
                  <h3>01. Let's have a chat</h3>
                  <p>
                    We'll listen, understand your business requirements, and
                    discuss solutions you may have not thought possible.
                  </p>
                </div>
                <div>
                  <img src={rectIcon} alt="" />
                  <h3>01. Let's have a chat</h3>
                  <p>
                    We'll listen, understand your business requirements, and
                    discuss solutions you may have not thought possible.
                  </p>
                </div>
              </div>
              <div className={styles.rightContentSecondRow}>
                <div className={styles.goLiveContent}>
                  <img src={clockIcon} alt="" />
                  <h3>01. Let's have a chat</h3>
                  <p>
                    We'll listen, understand your business requirements, and
                    discuss solutions you may have not thought possible.
                  </p>
                </div>
                <div className={styles.xyz}>
                  <img src={successIcon} alt="" />
                  <h3>01. Let's have a chat</h3>
                  <p>
                    We'll listen, understand your business requirements, and
                    discuss solutions you may have not thought possible.
                  </p>
                </div>
              </div>
              <div className={styles.contactUsBtn}>
                <button onClick={SubmitHandler}>Contact Us Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
