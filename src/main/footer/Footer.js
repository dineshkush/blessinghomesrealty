import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../img/logo.png";

function Footer(props) {
  return (
    <footer className="footer_section">
      <div className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="footer_logo">
                <img src={Logo} alt="Logo" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer_about">
                <h4>About</h4>
                <p>
                  At Homes Fynder, we are more than just a real estate
                  agency; we are your partners in finding your dream home in the
                  thriving city of Gurgaon/Gurugram.
                </p>
                <Link to="about-us">Read More</Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_nav">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="our-project">Our Project</Link>
                  </li>
                  <li>
                    <Link to="contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_contact_info">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                  <i className="fa-solid fa-thumbtack"></i> {props.address}
                  </li>
                  <li>
                  <i className="fa-solid fa-phone"></i> {props.phone}
                  </li>
                  <li>
                  <i className="fa-solid fa-envelope"></i> {props.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>© Copyright 2023 By Homes Fynder</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
