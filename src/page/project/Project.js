import React from "react";
import "./Project.css";

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
              <a href="listings-list-with-sidebar.html" className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-01.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Afghanistan</h4>
                  <span>14 Properties</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="project_item">
              <a href="listings-list-with-sidebar.html" className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-02.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Australia</h4>
                  <span>24 Properties</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="project_item">
              <a href="listings-list-with-sidebar.html" className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-03.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Bangladesh</h4>
                  <span>12 Properties</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="project_item">
              <a href="listings-list-with-sidebar.html" className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-04.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Miami</h4>
                  <span>9 Properties</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="project_item">
              <a href="listings-list-with-sidebar.html" className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-05.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Belize</h4>
                  <span>14 Properties</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="project_item">
              <a href="listings-list-with-sidebar.html" className="img-box">
                <img
                  src="http://utouchdesign.com/themes/realfun/images/popular-location-06.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="utf-cat-img-box-content visible">
                  <h4>Cambodia</h4>
                  <span>24 Properties</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
