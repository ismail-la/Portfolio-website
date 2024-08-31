"use client";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "./LanguageContext"; // Import useLanguage hook
import "./Contact.css";

export const Contact = () => {
  const { language } = useLanguage(); // Use language from context
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
      alert(
        language === "en"
          ? "Please complete the reCAPTCHA"
          : "Veuillez compléter le reCAPTCHA"
      );
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
        alert(
          language === "en"
            ? "Thank you for your message. It has been sent."
            : "Merci pour votre message. Il a été envoyé."
        ); // Show success alert
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
            {language === "en" ? "Let's Chat." : "Discutons."} <br />{" "}
            {language === "en"
              ? "Tell me about your project."
              : "Parlez-moi de votre projet."}
          </h1>
          <span>
            {language === "en"
              ? "Let's create something together ✨"
              : "Créons quelque chose ensemble ✨"}
          </span>
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
            <h1>
              {language === "en"
                ? "Send me a message"
                : "Envoyez-moi un message"}
            </h1>
            <span>🚀</span>
          </div>
          <label htmlFor="name">{language === "en" ? "Name:" : "Nom:"}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={
              language === "en" ? "Enter your name" : "Entrez votre nom"
            }
            required
          />
          <label htmlFor="email">
            {language === "en" ? "Email:" : "Email:"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={
              language === "en" ? "Enter your email" : "Entrez votre email"
            }
            required
          />
          <label htmlFor="message">
            {language === "en" ? "Message:" : "Message:"}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={
              language === "en" ? "Enter your message" : "Entrez votre message"
            }
            required
          ></textarea>

          <ReCAPTCHA
            sitekey="6LffOSsqAAAAAJI4m5CurBSfTOQEL0nglX3VYuhE" // actual reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />

          <button type="submit">
            {language === "en" ? "Send" : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
