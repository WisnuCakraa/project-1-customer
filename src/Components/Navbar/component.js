import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./style.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState("");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showNav = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNav("nav-black");
      } else setNav("");
    });

    return () => {
      window.removeEventListener("scroll");
    };
  };

  useEffect(() => {
    showNav();
  }, []);

  return (
    <>
      <nav className={`navbar ${nav}`}>
        <div className="navbar-container">
          <Link className="navbar-logo" onClick={closeMobileMenu}>
            <div onClick={() => scroll.scrollToTop()}>
              LMC
              <i class="fab fa-typo3" />
            </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/galery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Galery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
