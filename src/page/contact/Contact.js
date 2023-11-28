import React, { useState } from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';

function Contact({phone, email, address, website}) {

  // const navigate = useNavigate();

  const [messageSend, setMessageSend] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(emailData.email)) {
      console.error("Invalid email format");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_rzlyyp1",
        "template_9l7bi35",
        emailData,
        "vFo*69)2WjU[L"
      )
      .then(
        (response) => {
          setMessageSend("Email sent successfully");
        },
        (error) => {
          setMessageError("Email sending failed");
        }
      )

      .finally(() => {
        setIsSending(false); // Email sending completed, change button text back
      });
  };

  const validateEmail = (email) => {
    // Define a simple regex pattern for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <section className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-12">
            <section id="contact">
              <div className="contact_heading">
                <h3>
                  <i class="fa-solid fa-layer-group"></i> Contact Form
                </h3>
              </div>
              <div className="contact_form_box">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        name="name"
                        value={emailData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        name="email"
                        type="email"
                        value={emailData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        name="phone"
                        type="tel"
                        value={emailData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="comments"
                        cols="40"
                        rows="3"
                        value={emailData.message}
                        onChange={handleChange}
                        placeholder="Message..."
                        spellcheck="true"
                        required=""
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                    <button type="submit" class="btn site_btn"  disabled={isSending}>
                    {isSending ? "Sending..." : "Submit"}
                    </button>
                    <p className="formmessage">{messageSend} {messageError}</p>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>

          <div className="col-md-5 col-12">
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
