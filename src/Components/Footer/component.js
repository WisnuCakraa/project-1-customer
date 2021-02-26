import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  let message = "";
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Jaga koneksi anda kepada kami
        </p>
        <p className="footer-subscription-text">
          Ikuti lebih dari 200 orang untuk mendapatkan info lebih terkait produk
          kami.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Masukkan Email"
            />
            <Button buttonStyle="btn--outline">Kirim Email</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <a
              class="social-icon-link map"
              href="https://www.google.com/maps/place/Cv.luki+mandiri+corporation/@-7.2696086,112.675306,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fe82920c3ddd:0x32f06868e8db1d43!8m2!3d-7.2696086!4d112.6774947"
              target="_blank"
              aria-label="Map"
            >
              <i className="fas fa-map-marker-alt"></i>
              <small className="map-info">
                Jl. Gadel Tim. III No.29, Gadel, Kec. Tandes, Kota SBY, Jawa
                Timur 60188
              </small>
            </a>
          </div>
          <div class="footer-link-items">
            <h2>Kontak</h2>
            <div className="social-icon-telp">
              <i class="fas fa-phone"></i>
              <small>082139510449</small>
            </div>
            <div className="social-icon-telp">
              <i class="fas fa-envelope"></i>
              <small>lukimandiricorp@gmail.com</small>
            </div>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a target="_blank" href="/">
              Instagram
            </a>
            <a target="_blank" href="/">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              LMC
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">LMC © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <a
              class="social-icon-link whatsapp"
              href="https://api.whatsapp.com/send?phone=6289688238329&text=Send20%a20%quote"
              target="_blank"
              aria-label="Whatsapp"
            >
              <i class="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
