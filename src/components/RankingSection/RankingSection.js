import React from "react";
import "./ranking.css";
import { Button, Col } from "react-bootstrap";
const RankingSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Col lg={12} sm={12} md={12}>
            <div className="ranking">RANKING TOOL</div>
          </Col>
          <Col lg={12} sm={12} md={12}>
            <p className="paragraph">
              Here are some helpful tools created by The Doge Pound community.
              Please note that these are unofficial in nature. Every assignment
              of an doge's overall value or rarity is inherently subjective.
            </p>
          </Col>

          <Col lg={4} sm={12} md={4}>
            <div className="rank">
              <Button className="buts"> DRIPPYCOCKS </Button>
            </div>
          </Col>

          <Col lg={4} sm={12} md={4}>
            <div className="rank">
              <Button className="buts"> DRIPPYCOCKS PUPPIES </Button>
            </div>
          </Col>

          <Col lg={4} sm={12} md={4}>
            <div className="rank">
              <Button className="buts">DRIPPYCOCKS CHICKEN</Button>
            </div>
          </Col>
        </div>
      </div>

  
    </>
  );
};

export default RankingSection;
