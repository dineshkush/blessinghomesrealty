import React from "react";
import { Link } from "react-router-dom";
import RequestCallBack from "../../shared/request-call-back/RequestCallBack";

function Header() {
  return (
    <header>
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
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
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
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
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
    </header>
  );
}

export default Header;
