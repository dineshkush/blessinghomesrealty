import React from "react";
import { Link } from "react-router-dom";
import "./HomeSlider.css";

function HomeSlider() {
  return (
    <section className="home_banner">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/ac3a7c2b952f539f496b35acf443725bbd30fb86.jpg"
              className="d-block w-100"
              alt="Slide 1" />
            <div className="carousel-caption d-md-block">
              <div className="banner_content">
                <h3>
                Unlock Your Dream Home.
                </h3>
                <p>
                  You will be moving in the right direction with Blessing
                  Homes Realty.
                </p>
                <Link
                  className="btn site_btn border_btn"
                  to="/contact-us"
                  tabIndex="0"
                >
                  Make An Enquiry
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/ac3a7c2b952f539f496b35acf443725bbd30fb86.jpg"
              className="d-block w-100"
              alt="Slide 2" />
            <div className="carousel-caption d-md-block">
              <div className="banner_content">
                <h3>
                Your Guide to Home Sweet Home
                </h3>
                <p>
                  Creating quality urban lifestyles, building stronger
                  communities.
                </p>
                <Link
                  className="btn site_btn border_btn"
                  to="/contact-us"
                  tabIndex="0"
                >
                  Make An Enquiry
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default HomeSlider;
