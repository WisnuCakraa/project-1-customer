import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./style.css";

function HeroSection({ images, title, subTitle, getStarted }) {
  return (
    <div className="hero-container">
      <img src={images} />
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {getStarted && (
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
