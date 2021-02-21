import React from "react";
import "./style.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Configs";

function component() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Jaga koneksi anda kepada kami
        </p>
        <p className="footer-subscription-text">
          Ikuti lebih dari 200 orang untuk mendapatkan info lebih terkait produk
          kami !
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Masukkan Email Anda"
            />
            <Button buttonStyle="btn--outline">Kirim Email</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Kontak</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <div class="social-icons">
              <a
                className="social-icon-link facebook"
                href={ROUTES.FACEBOOK()}
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </a>
              <a
                class="social-icon-link instagram"
                href={ROUTES.INSTAGRAM()}
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          {/* <div class="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
          </div> */}
          <small class="website-rights">
            <a
              style={{ color: "white" }}
              href={ROUTES.INSTAGRAM()}
              target="_blank"
              aria-label="Instagram"
            >
              NunuDEV © 2021
            </a>
          </small>
        </div>
      </section>
    </div>
  );
}

export default component;
