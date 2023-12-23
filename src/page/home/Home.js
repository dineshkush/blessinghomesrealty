import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import HomeSlider from "./homeslider/HomeSlider";
import About from "../about/About";
import Counter from "../../shared/counter/Counter";
import ParallaxImg from "../../img/parallax-img.jpg";
import CBSDeveloper from "../../img/cbs-developer-img.jpg";
import VictoryFloor from "../../img/victory-floor-img.jpg";
import TrehanBuilderFloors from "../../img/Trehan-Builder-Floors.jpg";
import SushantLok1 from "../../img/Sushant-Lok-1.jpg";
import DLFCityPhaseI from "../../img/DLF-City-Phase-I.jpg";
import DLFCityPhase4 from "../../img/DLF-City-Phase-4.jpg";


function Home() {
  return (
    <>
      <HomeSlider />
      <About />

      <section className="counter_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-4">
              <div className="counter_item text-center">
                <Counter number={756} title="Property Sell" />
              </div>
            </div>
            <div className="col-lg-4 col-4">
              <div className="counter_item text-center">
                <Counter number={680} title="Happy Clients" />
              </div>
            </div>
            <div className="col-lg-4 col-4">
              <div className="counter_item text-center">
                <Counter number={12} title="No. Of Sites" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our_project_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="site_title">
                <h4>Out Projects</h4>
                <h3>Most Popular Properties Places</h3>
              </div>
            </div>
          </div>

          <div className="row mt-3">
          <div className="col-md-4 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src={CBSDeveloper}
                  alt="CBS Developers"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>CBS Developers</h4>
                  <span>14 Properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src={VictoryFloor}
                  alt="Victory Floors"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Victory Floors</h4>
                  <span>24 Properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src={TrehanBuilderFloors}
                  alt="Trehan Builder Floors"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Trehan Builder Floors</h4>
                  <span>12 Properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src={SushantLok1}
                  alt="Sushant Lok 1"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Sushant Lok 1</h4>
                  <span>9 Properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src={DLFCityPhaseI}
                  alt="DLF City Phase I"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>DLF City Phase I</h4>
                  <span>14 Properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src={DLFCityPhase4}
                  alt="DLF City Phase 4"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>DLF City Phase 4</h4>
                  <span>24 Properties</span>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="row mt-4 text-center">
            <div className="col-lg-12">
              <Link
                className="btn site_btn border_btn"
                tabindex="0"
                to="/our-project">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax_sec"
        style={{
          backgroundImage: `url(${ParallaxImg})`,
        }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="parallax_content text-center">
                <h3>Search Smarter, From Anywhere</h3>
                <p>
                  Power your search with our Resideo real estate platform, for<br />
                  timely listings and a seamless experience.
                </p>
                <Link
                  to="/contact-us"
                  className="btn site_btn">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
