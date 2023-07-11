import React from "react";
import "./header.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Col,
} from "react-bootstrap";
import logo from "../Assets/homepg/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Col className="navb" lg={12} sm={12} md={12}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home"> */}
              <Link  to="/">

                
              <img src={logo} alt="logo" className="logo" />
              </Link>
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features" className="head2"></Nav.Link>
                <NavDropdown
                  title="DOG HOUSE"
                  className="head2"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">DOGGY</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">PUPPY</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="UTILITIES"
                  className="head2"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    BREEDING
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    FEEDING
                  </NavDropdown.Item>
                  <Link  className="drop" to="./LeaderBoardPage"> 
                  {/* <NavDropdown.Item href="#action/3.3"> */}
                    LEADERBOARD
                  {/* </NavDropdown.Item> */}
                  
                  </Link>
                </NavDropdown>

                {/* <Link to='/AppPage'> 
                hello
                </Link> */}
                <div className="head3"></div>
                <Link className="headk" to="/AppPage">
                  APP
                </Link>

                <Nav.Link to="/AppPage" className="head3">
                  {" "}
                  MERCH
                </Nav.Link>
                <Nav.Link className="head3"> WIKI</Nav.Link>
              </Nav>
              <Nav></Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <Button className="butcnt"> CONNECT WALLET</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </>
  );
};

export default Header;
