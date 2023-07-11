import React from "react";
import "./metaverse.css";
import { Col } from "react-bootstrap";
import dog3 from "../../Assets/homepg/dogcar3.png";
import dog4 from "../../Assets/homepg/dogcar4.png";
import ReactPlayer from "react-player";

const MetaverseSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Col md={12} sm={12} lg={12}>
            <div className="meta">METAVERSE</div>
          </Col>
          <Col lg={6} md={12} sm={4}>
            {/* <img className="img" alt="dg1" src={dog3} /> */}

            

            <ReactPlayer className="vid1" url='https://www.youtube.com/watch?v=RK1K2bCg4J8' />

            <div className="imtext">
              {" "}
              Your 2D Doge NFT becomes 3D! Show off your unique doge to everyone
              in the metaverse!
            </div>
          </Col>
          <Col lg={6} md={12} sm={8}>
            {/* <img className="img" alt="dg2" src={dog4} /> */}

            <ReactPlayer className="vid1" url='https://www.youtube.com/watch?v=Zv11L-ZfrSg' />

            <div className="imtext">
              By buying and holding our NFT you will gain exclusive access to
              The Doge Pound apparel which you can wear in the metaverse!
            </div>
          </Col>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MetaverseSection;
