import React from "react";
import "./treasure.css";
import { Col } from "react-bootstrap";
import a from "../../../Assets/LeaderBoard/a.png";
import top from "../../../Assets/LeaderBoard/top.png";
import ash from "../../../Assets/LeaderBoard/ash.png";
import do1 from "../../../Assets/LeaderBoard/do1.gif";
const TreasureSection = () => {
  return (
    <>
      <h2 className="tretit">TREASURE HUNT LEADERBOARD</h2>
      <div class="sc-hRMJXU fmzZft">
        <div className="sc-icMgfS jAOuAE">
          <div class="toppo">
            <span className="spk" >2</span>
          </div>
          <img src={a} alt="top1" className="avtar" />
          <span className="points">3553</span>
          <span className="pointsLabel">alejandroherz137</span>
        </div>

        {/* ------------------------------------------------------------------------------ */}
        <div className="sc-czWrlN jQDRQz">
          <img src={top} alt="top1" className="toppo" />
          <img src={ash} alt="top1" className="ash" />
          <span className="points">5859</span>
          <span className="pointsLabel">danil81</span>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div class="sc-icMgfS jAOuAE">
          <div className="topRight">
            <span className="spk" >3</span>
          </div>
          <img src={do1} alt="top1" className="avtar" />
          <span className="points">2553</span>
          <span className="pointsLabel">bracsti</span>
        </div>
      </div>
    </>
  );
};

export default TreasureSection;
