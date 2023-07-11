import React from "react";
import "./videosection.css";
import { Col } from "react-bootstrap";
import ReactPlayer from "react-player";

import VideoImg from "../../Assets/homepg/video.png";
export const VideoSection = () => {
  return (
    <div className="container">

      {/* <img className="d-block w-100" src={VideoImg} alt="First slide" /> */}
      <ReactPlayer className="d-block w-100" url='https://www.youtube.com/watch?v=lx9qeRLUYs8' />
    </div>
  );
};
