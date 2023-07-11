import React from "react";
import "./roadmap.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { Col } from "react-bootstrap";
const RoadMapSection = () => {
  return (
    <>
      <Col lg={12} md={12} sm={12}>
        <div className="newt">ROAD MAP</div>
        <p className="newqq mt-5">
          The Doge Pound is a full time project for us now and it will continue
          to be after the public sale. Below is what we're working towards in
          the short term. Each milestone unlocks when a certain % of doges have
          been minted. Future developments will be decided and voted upon by the
          community.
        </p>
      </Col>

      <Col lg={12} md={12} sm={12}>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                className="newtime"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                key={element.id}
              >
                <h5 className="vertical-timeline-element-title">
                  {element.title}
                </h5>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.description}
                </h5>
              </VerticalTimelineElement>
            );
          })}
          ;
        </VerticalTimeline>
      </Col>
    </>
  );
};

export default RoadMapSection;
