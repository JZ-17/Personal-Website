"use client";
import React from "react";
import "@/components/email_component/Email.css";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <section id="contact" className="email-section">
      <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} className="section-header">
        <h2 className="header-text">Say Hi!</h2>
        <hr className="header-border" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }}>
        <p className="email-text">
          Hello! Thanks for taking the time to check out my website. I am always open to meeting new people so feel free to reach out to me about anything!
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} className="button-container">
        <a href="mailto:JoshZhang@college.harvard.edu" className="contact-button">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Email;

