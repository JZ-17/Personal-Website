"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import ProfilePNG from "@/components/intro_component/Spaceship1.png";
import Image from "next/image";
import "@/components/intro_component/Intro.css";

const Intro = () => {
  return (
    <section className="hero-section" id="intro">
      <div className="hero-container">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 1, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Josh Zhang
            <br />
            <TypeAnimation
              className="hero-subtitle"
              sequence={[
                "Software Engineer",
                1000,
                "Virginia Native",
                1000,
                "Basketball Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="hero-description">
            Hi! My name is Josh Zhang, and I am a junior at{" "}
            <a
              href="https://www.college.harvard.edu/"
              target="_blank"
              className="link"
            >
              Harvard University
            </a>{" "}
            studying a double major in{" "}
            <a
              href="https://seas.harvard.edu/computer-science/bachelors-degree-computer-science"
              target="_blank"
              className="link"
            >
              Computer Science
            </a>{" "}
            and{" "}
            <a
              href="https://statistics.fas.harvard.edu/"
              target="_blank"
              className="link"
            >
              Statistics
            </a>. I am actively seeking a 2025 summer internship. Feel free to
            reach out!
          </p>

          {/* Buttons Section */}
          <div className="hero-buttons">
            <button>
              <Link href="mailto:JoshZhang@college.harvard.edu">Contact Me</Link>
            </button>
          </div>
        </motion.div>

        {/* PNG Section */}
        <motion.div
          initial={{ opacity: 1, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="hero-astronaut"
        >
          <Image
            src={ProfilePNG}
            alt="Profile"
            width={5000}
            height={5000}
            className="astronaut-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
