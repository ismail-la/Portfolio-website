"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const form = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    emailjs
      .sendForm(
        "service_7bwrcvl",
        "template_6d8j2ke",
        form.current,
        "9Plj2SnYw-hO43NpT"
      )
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        setRecaptchaToken(""); // Reset the token after sending the email
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <div
          className="contact-text"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h1>
            Let's Chat. <br /> Tell me about your project.
          </h1>
          <span>Let's create something together ✨</span>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="form-heading">
            <h1>Send me a message</h1>
            <span>🚀</span>
          </div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="message for contact"
            required
          ></textarea>

          <ReCAPTCHA
            sitekey="6LffOSsqAAAAAJI4m5CurBSfTOQEL0nglX3VYuhE" // actual reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
