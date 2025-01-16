"use client";
import React from "react";
import "@/components/email_component/Email.css";

const Email = () => {
  return (
    <section id="contact" className="email-section">
      <div className="section-header">
        <h2 className="header-text">Say Hi!</h2>
        <hr className="header-border" />
      </div>
      <div>
        <p className="email-text">
          Hello! Thanks for taking the time to check out my website. I am always open to meeting new people so feel free to reach out to me about anything!
        </p>
      </div>
      <div className="button-container">
        <a href="mailto:JoshZhang@college.harvard.edu" className="contact-button">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Email;

