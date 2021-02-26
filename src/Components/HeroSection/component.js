import React from "react";
import { Link } from "react-scroll";

import Button from "../../Components/Button";
import "./style.css";

function HeroSection({
  title,
  subTitle,
  getStarted,
  images,
  scrollTo,
  durations,
}) {
  return (
    <div className="hero-container">
      <img src={images} />
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {getStarted && (
        <div className="hero-btns">
          <Button
            scrollTo={scrollTo}
            smooth
            durations={durations}
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
