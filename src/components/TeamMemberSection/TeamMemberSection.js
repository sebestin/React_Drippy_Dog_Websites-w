import React from "react";
import "./teammember.css";
import { Col } from "react-bootstrap";
import dgsmall from "../../Assets/team/dgsmall.png";
import dgsmall2 from "../../Assets/team/dgsmall2.png";
import dgsmall3 from "../../Assets/team/dgsmall3.png";
const TeamMemberSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Col lg={12} sm={12} md={12}>
            <div className="heads">CO-TEAM MEMBERS</div>
          </Col>
          <Col lg={12} sm={12} md={12}>
            <p className="tex">
              {" "}
              The Doge Pound was founded by three friends who set a goal and
              want to achieve it. Three oddly matched people expressing
              themselves via art and creating something interesting and
              hilarious.
            </p>
          </Col>

          <Col lg={4} sm={12} md={12}>
            <div className="teams">
              <div>
                <img className="smg" src={dgsmall} />
              </div>
              <div className="smgt">CRYPTO BAE</div>
              &nbsp;&nbsp;&nbsp;
              <br />
              <div className="smgp">Art and director</div>
            </div>
          </Col>

          {/* 000000000000000000000000000000000000000000000000000000000000 */}

          <Col lg={4} sm={12} md={12}>
            <div className="teams">
              <div>
                <img className="smg" src={dgsmall2} />
              </div>
              <div className="smgt">JOHN LEMON</div>
              &nbsp;&nbsp;&nbsp;
              <br />
              <div className="smgp">Marketing Lead & Coordinator </div>
            </div>
          </Col>

          {/* 000000000000000000000000000000000000000000000000000000000000 */}

          <Col lg={4} sm={12} md={12}>
            <div className="teams">
              <div>
                <img className="smg" src={dgsmall3} />
              </div>
              <div className="smgt">WHITE FANG</div>
              &nbsp;&nbsp;&nbsp;
              <br />
              <div className="smgp">Lead Developer & Tech</div>
            </div>
          </Col>

          {/* -------------------------------------------------------------------------------------------------------------------------------- */}
          {/* <Col lg={4} sm={12} md={4}>
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
          </Col> */}
          {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default TeamMemberSection;
