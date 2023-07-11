import React from 'react';
import './comingsoon.css';
import {Col} from "react-bootstrap";
import dog4 from "../../../Assets/app_pgg/dog4.png"
const ComingSoonSection = () => {
  return (
      <> 
      <Col lg={12} md={12} sm={12}> 
      <div className="ttl1">COMING SOON</div>
      
      </Col>
      <Col lg={12} md={12} sm={12}> 
      <img className="dog4"  alt="DOG4"src={dog4}/>
       </Col>
       </>
  )
}

export default ComingSoonSection;