import React from "react";
import "../../App.css";
import { IMAGES } from "../../Utils";
import { Button } from "../Button";
import "./style.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/video-2.mp4" autoPlay loop muted /> */}
      <img src={IMAGES.KANOPI} />
      <h1>BENGKEL LAS</h1>
      <p>Test Descrip</p>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
