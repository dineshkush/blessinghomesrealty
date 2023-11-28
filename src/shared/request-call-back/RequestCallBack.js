import React, { useState } from "react";
import "./RequestCallBack.css";
import emailjs from 'emailjs-com';

function RequestCallBack() {

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
    <>
      <div className="popup_form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                name="name"
                type="text"
                value={emailData.name}
                onChange={handleChange}
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
                name="message"
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
    </>
  );
}

export default RequestCallBack;
