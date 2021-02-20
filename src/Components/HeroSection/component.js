import React from "react";
import "../../App.css";
import { IMAGES } from "../../Configs";
import { Button } from "../Button";
import "./style.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/video-2.mp4" autoPlay loop muted /> */}
      <img src={IMAGES.KANOPI} />
      <h1>BENGKEL LAS</h1>
      <p>Test Descrip</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
