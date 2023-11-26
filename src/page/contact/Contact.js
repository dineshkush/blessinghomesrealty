import React from "react";
import "./Contact.css";

function Contact({phone, email, address, website}) {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12">
            <section id="contact">
              <div className="contact_heading">
                <h3>
                  <i class="fa-solid fa-layer-group"></i> Contact Form
                </h3>
              </div>
              <div className="contact_form_box">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="comments"
                        cols="40"
                        rows="3"
                        placeholder="Message..."
                        spellcheck="true"
                        required=""
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" class="btn site_btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>

          <div className="col-md-4 col-12">
            <div className="contact_heading">
              <h3>
                <i class="fa-solid fa-map-location-dot"></i> Office Address
              </h3>
            </div>
            <div className="contact_location_box sidebar-textbox margin-bottom-40">
              <ul className="contact-details">
                <li>
                  <i class="fa-solid fa-phone"></i>{" "}
                  <strong>Phone Number:</strong> <span><a href={`tel:${phone}`}>{phone}</a></span>
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>{" "}
                  <strong>Email Address:</strong>{" "}
                  <span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                </li>
                <li>
                  <i class="fa-solid fa-globe"></i> <strong>Website:</strong>{" "}
                  <span><a href={`${website}`}>blessinghomesrealty.in</a></span>
                </li>
                <li>
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <strong>Address:</strong>{" "}
                  <span>
                    {address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
