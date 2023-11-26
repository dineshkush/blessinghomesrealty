import React from "react";
import "./RequestCallBack.css"

function RequestCallBack() {
  return (
    <>
      <div className="popup_form">
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
    </>
  );
}

export default RequestCallBack;
