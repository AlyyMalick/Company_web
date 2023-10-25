import React, { useState } from "react";

import { images } from "../../Constants";
//import { AppWrap, MotionWrap } from "../../wrapper";
//import { client } from "../../client";
import "./Footer.scss";
import axios from "axios";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    axios
      .post("/send-email", formData)
      .then((response) => {
        setLoading(false);
        setIsFormSubmitted(true);
        console.log("Email sent successfully");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending email", error);
      });
  };

  return (
    <div id="contact" className="app__center">
      <div className="hh">
        <h2 className="head-text">
          Grab a coffee and let’s meet to solve your problems
        </h2>
      </div>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            hello@micael.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +1 (123) 456-7890
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex app__center">
          <div className="app__flex app__form-row">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex app__form-row">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__form-row">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div className="app__center">
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default Footer;
