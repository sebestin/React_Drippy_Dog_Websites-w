import React from "react";
import "./initial.css";
import { Col } from "react-bootstrap";
import im1 from "../../../Assets/LeaderBoard/im1.png";
import im2 from "../../../Assets/LeaderBoard/im2.png";
import im3 from "../../../Assets/LeaderBoard/im3.png";
import im4 from "../../../Assets/LeaderBoard/im4.png";

const InitialSection = () => {
  return (
    <div className="container fsk ">
      <div className="row">
        <Col lg={6} md={12} sm={12} className="mt-5">
          <div className="try">OCT 11- OCT 26</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="try2"> THE DRIPPY COCKS TREASURE HUNT </div>
          <div className="try"> TO ENTER</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            {/* <span > 1</span> */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="rc2">
             <span className="rck" >1  </span>  
           Download OVR Mobile Apps for Iphone and Android
            </div>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {/* <span className="rc1"> 2</span> */}
            <div className="rc2">
              <span className="rck">2</span> 
              Drippy Cocks Nft here </div>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="rc2">
              <span className="rck">3</span>
              Start collecting here{" "}
            </div>
          </div>
          <div class="rc3">
            The top 3 collectors when the event ends will win the prizes listed
            below!
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </Col>

          <Col lg={6} md={12} sm={12} className="mt-5">
            <img src={im4} className="imgfrk" alt="im" />
          </Col>
       
      </div>
      <div className="container">
        <div className=" row jtg">
          <Col lg={2} sm={12} md={12}>
            <img src={im1} className="imgjtg" alt="im1" />
          </Col>
          <Col lg={2} sm={12} md={12}>
            <img src={im2} className="imgjtg" alt="im2" />
          </Col>
          <Col lg={2} sm={12} md={12}>
            <img src={im3} className="imgjtg" alt="im3" />
          </Col>
        </div>
      </div>

     
    </div>
  );
};

export default InitialSection;
