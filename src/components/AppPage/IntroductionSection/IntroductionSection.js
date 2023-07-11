import React from "react";
import "./introduction.css";
import { Col, Carousel } from "react-bootstrap";
import playstore from "../../../Assets/app_pgg/playstore.png";
import istore from "../../../Assets/app_pgg/istore.png";
import banner1 from "../../../Assets/app_pgg/banner1.png";
import banner2 from "../../../Assets/app_pgg/banner2.png";
import banner3 from "../../../Assets/app_pgg/banner3.png";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="container ">
        <div className="row ">
          <Col lg={6}>
            <h4 className="ttl"> Introducing</h4>
            <h1 className="ttl2"> THE DRIPPYCOCKS APP</h1>
            <p className="tpara">
              The Doge Pound App is coming soon. Join the leading NFT project to
              get all the information you need. We are excited to be one of the
              first NFT projects to have an app. This app will allow you to
              navigate our website with the optimum experience, adjusted view,
              and more accessible functions.
            </p>
            <p className="tpara2">Coming Soon</p>
            <div className="inlnimage">
              <img className="imgapp" alt="playstore" src={playstore} />
              &nbsp; &nbsp;
              <img className="imgapp" alt="i store" src={istore} />
            </div>
          </Col>

          <Col lg={6} sm={12} md={12}>
            {/* <Carousel className="slide mt-5">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Third slide"
                />
              </Carousel.Item>
        
            </Carousel> */}
            /*{" "}
            <Carousel className="mover">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
