import React from "react";
import "./arsection.css";
import { Col } from "react-bootstrap";
import dog_2 from "../../../Assets/app_pgg/dog_2.png";
const ARSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Col lg={6} sm={12} md={12}>
            <img className="imgdog2" src={dog_2} />
          </Col>

          <Col lg={6} sm={12} md={12}>
            <h2 className="tlt1"> DRIPPY COCKS AR</h2>
            <p className="arp">
              Show your doge in the real world with our Augmented reality
              feature in the app.
            </p>
            <p className="arp">
              Proudly presenting the AR feature. With our Augmented Reality
              feature, you will be able to see your Doge in real world. You can
              interact with your Doge in real time and enjoy immersive, engaging
              experiences that seamlessly blend virtual objects with the real
              world. This fantastic feature will be integrated into the app very
              soon.
            </p>
          </Col>
        </div>
      </div>
    </>
  );
};

export default ARSection;
