import React from "react";
import { Col, Button, Carousel } from "react-bootstrap";
import dogcar1 from "../../Assets/homepg/dogcar1.png";
import dogcar2 from "../../Assets/homepg/dogcar2.png";
import dogcar3 from "../../Assets/homepg/dogcar3.png";
import dogcar4 from "../../Assets/homepg/dogcar4.png";
import puppy1 from "../../Assets/homepg/puppy1.png";
import puppy2 from "../../Assets/homepg/puppy2.png";
import puppy3 from "../../Assets/homepg/puppy3.png";
import puppy4 from "../../Assets/homepg/puppy4.png";
import ReactPlayer from "react-player";


import "./welcomesection.css";
export const WelcomeSection = () => {
  return (
    <div>
      <Col lg={12} md={10} sm={12}>
        <h1 className="t1"> WELCOME TO THE DRIPPY COCKS</h1>
      </Col>
      <div className="container">
        <div className="row">
          <Col lg={8} md={10} sm={10}>
            {" "}
            <h4 className="t2 mt-5">
              The Doge Pound NFT, also called "OG Doge" within the community, is
              the first NFT collection of the Doge Pound Studios brand. We are a
              community of dog lovers committed to helping dogs across the
              globe, currently building the largest dog rescue shelter in East
              Africa. An OG Doge provides owners exclusive "presale mint"
              opportunities and early access to every new release from the Doge
              Pound Studios, including upcoming P2E games, future conferences,
              gaming events, and much more.
            </h4>
            <div>
              <Button className="bt1"> BUY ON OPENSEA</Button>

              <Button className="bt2">JOIN US</Button>
            </div>
          </Col>

          <Col lg={4} md={10} sm={10}>
            <Carousel className="doggesmove">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={dogcar1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={dogcar2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={dogcar3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={dogcar4}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Col lg={5} md={10} sm={10}>
            <Carousel className="doggesmove2">
              <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={puppy1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={puppy2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={puppy3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={puppy4} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col lg={7} md={10} sm={10}>
            {" "}
            <h4 className="t3 ">
              Doge Pound Puppies is a collection of 10,000+ art pieces that are
              only available for The Doge Pound Holders.Each OG Doge Holder will
              be able to mint a puppy with any traits. Proportion is 1:1 which
              means you can mint as many puppies as you have OG Doges. Open a
              crate and discover your puppy!
            </h4>
            <div>
              <Button className="bt3"> OPEN CRATE</Button>

              <Button className="bt4">VIEW ON OPENSEA</Button>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};
