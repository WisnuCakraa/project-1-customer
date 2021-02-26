import React from "react";
import { Link } from "react-scroll";
import "./style.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

const component = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  scrollTo,
  smooth,
  durations,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to={scrollTo}
      smooth={smooth}
      duration={durations}
      className="btn-mobile"
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default component;
