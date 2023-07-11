import React from "react";
import "./footer.css";
import { Col } from "react-bootstrap";
import boat from "../Assets/homepg/boat.png";
import discor from "../Assets/homepg/discor.png";
import twitter from "../Assets/homepg/twitter.png";
import youtube from "../Assets/homepg/youtube.png";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Col lg={6} sm={12} md={12}>
            <div className="dat">
              <p className="foot">@ 2021 Drippycocks</p>
              <span className="spanny">TERMS AND CONDITIONS</span>
            </div>
          </Col>
          <Col className="coly" lg={6} sm={12} md={12}>
            <div className="imdiv">
              <img className="bl2" src={boat} alt="footer-boat" />
              <img className="bl2" src={discor} alt="discord" />

              <img className="bl2" src={twitter} alt="twitter" />
              <img className="bl2" src={youtube} alt="youtube" />
            </div>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Footer;
