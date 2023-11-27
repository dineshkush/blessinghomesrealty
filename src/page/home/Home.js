import React from "react";
import "./home.css";
import HomeSlider from "./homeslider/HomeSlider";
import About from "../about/About";
import Counter from "../../shared/counter/Counter";
import ParallaxImg from "../../img/parallax-img.jpg";

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
                    src="http://utouchdesign.com/themes/realfun/images/popular-location-01.jpg"
                    alt=""
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
                    src="http://utouchdesign.com/themes/realfun/images/popular-location-02.jpg"
                    alt=""
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
                    src="http://utouchdesign.com/themes/realfun/images/popular-location-03.jpg"
                    alt=""
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
                    src="http://utouchdesign.com/themes/realfun/images/popular-location-04.jpg"
                    alt=""
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
                    src="http://utouchdesign.com/themes/realfun/images/popular-location-05.jpg"
                    alt=""
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
                    src="http://utouchdesign.com/themes/realfun/images/popular-location-06.jpg"
                    alt=""
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
              <a
                className="btn site_btn border_btn"
                tabindex="0"
                href="/our-project">
                View All Projects
              </a>
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
                <a
                  href="/contact-us"
                  className="btn site_btn">
                  Search Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      
    </>
  );
}

export default Home;
