import React from "react";
import "./About.css"
import aboutImg from "../../img/about-img.jpg"

function About() {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="site_title">
              <h4>About</h4>
              <h3>Homes Fynder</h3>
            </div>

            <p>
              At Homes Fynder, we are more than just a real estate
              agency; we are your partners in finding your dream home in the
              thriving city of Gurgaon/Gurugram. With a passion for excellence
              and a commitment to exceptional service, we have established
              ourselves as a trusted name in the real estate industry.
            </p>

            <p>
              Homes Fynder was founded with a vision to redefine the
              real estate experience for our clients. Our journey began with a
              deep understanding of the unique dynamics of Gurgaon/Gurugram's
              real estate market. Over the years, we have honed our expertise to
              provide you with the finest selection of builder floors in this
              vibrant city.
            </p>

            <p>
              Empowering Your Home Dreams: Our mission is simple yet profound.
              We aim to empower individuals and families to find their perfect
              home, where they can create lasting memories and enjoy the best
              that Gurgaon/Gurugram has to offer.
            </p>
          </div>

          <div className="col-lg-5">
            <img src={aboutImg} alt="Home" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
