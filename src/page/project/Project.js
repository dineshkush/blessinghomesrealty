import React from "react";
import "./Project.css";
import CBSDeveloper from "../../img/cbs-developer-img.jpg";
import VictoryFloor from "../../img/victory-floor-img.jpg";
import TrehanBuilderFloors from "../../img/Trehan-Builder-Floors.jpg";
import SushantLok1 from "../../img/Sushant-Lok-1.jpg";
import DLFCityPhaseI from "../../img/DLF-City-Phase-I.jpg";
import DLFCityPhase4 from "../../img/DLF-City-Phase-4.jpg";


function Project() {
  return (
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
          <div className="col-md-3 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-06.jpg"
                  alt="South City 2"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>South City 2</h4>
                  <span>20 Properties</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="project_item">
              <div className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-06.jpg"
                  alt="DLF City Phase 2"
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>DLF City Phase 2(4BHK)</h4>
                  <span>25 Properties</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
