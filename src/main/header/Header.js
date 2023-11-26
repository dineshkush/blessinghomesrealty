import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import RequestCallBack from "../../shared/request-call-back/RequestCallBack";

function Header(props) {
  return (
    <header className="header_area">
      <div className="top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="top_bar_contact">
                <ul>
                  <li>
                    <a href={`mailto:${props.email}`}>
                      <i className="fa-solid fa-envelope"></i> {props.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${props.phone}`}>
                      <i className="fa-solid fa-phone"></i> {props.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header_social_media">
                <ul>
                  <li>
                    <a
                      href={props.facebookLink}
                      title="Facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.instagramLink}
                      title="Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav_header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="our-project">
                    Our Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact-us">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item request_call_back">
                  <button
                    type="button"
                    className="header_btn nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Request Call Back
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Modal  */}
        <div
          className="modal fade request_popup"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title fs-5" id="exampleModalLabel">
                  Request Call Back
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <RequestCallBack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
