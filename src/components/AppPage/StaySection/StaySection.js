import React from 'react';
import './staysection.css';
import {Col,Button} from "react-bootstrap";
import dg5 from '../../../Assets/app_pgg/dg5.png';
const StaySection = () => {
  return (
    <div className="new container ">
        <div className="row">
            <Col className="container" lg={6} md={12} sm={12}>
            <h2 className="heads">Wanna stay in the know</h2>
            <p className="paramstay">Come join one of the best and friendliest Discord channels in the NFT space.</p>
            <Button className="stayb">JOIN DISCORD</Button>
            </Col>

            <Col lg={6} md={12} sm={12}>
            <img className="dg5" src={dg5} />
            </Col>


        </div>
        </div>
  )
}

export default StaySection