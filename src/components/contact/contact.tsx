import React from "react";
import "./contact.scss";
import { ContactForm } from "../contactForm/contactForm";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container contact-container">
        <h2>
          <span className="highlight">CONTACT ME</span>
        </h2>
        <div className="container contactForm-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
