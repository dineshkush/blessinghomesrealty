import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_about">
              <p>
                At Blessing Homes Realty, we are more than just a real estate
                agency; we are your partners in finding your dream home in the
                thriving city of Gurgaon/Gurugram. With a passion for excellence
                and a commitment to exceptional service, we have established
                ourselves as a trusted name in the real estate industry.
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
                <li><strong>Address:</strong> {props.address}</li>
                <li><strong>Phone:</strong> {props.phone}</li>
                <li><strong>Email:</strong> {props.email}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_contact_info">
              <h4>Request Call Back</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
