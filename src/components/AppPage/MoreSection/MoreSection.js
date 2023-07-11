import React from 'react';
import './moresection.css';
import {Col} from "react-bootstrap";
import dog3 from "../../../Assets/app_pgg/dog3.png";
const MoreSection = () => {
  return (
      <>
      
      <div className="container">
          <div className="row"> 
          <Col lg={12} md={12} sm={12}> 
          
          <h2 className="and text-center">And so much more...</h2>
          <p className="parand">This is only the beginning; we have big plans for the future. We will implement new features, enhancements, adjustments, and updates to improve your overall experience. Make sure to download the app and have fun; great things are on the way.</p>
          </Col>
          <Col lg={12} md={12} sm={12}> 
          <img className="dog3"src={dog3}/>
          </Col>

          </div>
          </div>
      </>
  )
}

export default MoreSection