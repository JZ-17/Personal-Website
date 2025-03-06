"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/components/me_component/Me.css";
import { motion } from "framer-motion";

const tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc tab-list">
        <li>Programming Languages: Python, R, JavaScript, C++, Swift, SQL</li>
        <li>Machine Learning Frameworks: Scikit-Learn, TensorFlow, PyTorch</li>
        <li>Front-End Development: React, Redux, Firebase, Tailwind, CSS</li>
        <li>Data Analysis: Pandas, Matplotlib, Seaborn, StatsModels</li>
        <li>Other Tools: AWS Cloud Services, Supabase, OpenAI API, Blender, Fusion360, Photoshop, Premiere Pro</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc tab-list">
        <li>Harvard College Computer Science Honors Bachelors of Arts (Expected 2026)</li>
        <li>Harvard College Statistics Bachelors of Arts (Expected 2026)</li>
        <li>Harvard College Education Studies Secondary (Expected 2026)</li>
        <li>Harvard College Chinese Language Citation</li>
        <li>Albemarle High School</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc tab-list">
        <li>Playing or watching Basketball</li>
        <li>Methodically planning my Fantasy Football team</li>
        <li>Thrifting and constructing new outfits</li>
        <li>Exploring local restaurants in Greater Boston</li>
        <li>Sleeping :)</li>
      </ul>
    ),
  },
];

const Me = () => {
  const [tab, setTab] = useState("skills");
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = (id) => {
    if (tab === id) return;

    setIsFading(true);
    setTimeout(() => {
      setTab(id); 
      setIsFading(false); 
    }, 300);
  };

  return (
    <section className="about-section" id="me">

        {/* Section Header */}
        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} className="section-header">
          <h2 className="header-text">About Me</h2>
          <hr className="header-border" />
        </motion.div>

          <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} className="about-container">
            <Image src="/images/Profile.png" width={600} height={600} alt="Profile" />
            <div className="about-content">
              <p className="about-description">
                Hi everyone! My name is Josh Zhang, and I am a junior at Harvard College studying Computer Science and Statistics. 
                Currently, I am extremely interested in learning much more about software engineering, data science, and machine learning, but I am very eager to learn about other miscellaneous tech-related topics outside of my scope :)
              </p>
              <div className="tab-buttons">
                {tab_data.map((tabData) => (
                  <button
                    key={tabData.id}
                    onClick={() => handleTabChange(tabData.id)}
                    className={`tab-button ${tab === tabData.id ? "active" : ""}`}
                  >
                    {tabData.title}
                  </button>
                ))}
              </div>
              <div className={`tab-content ${isFading ? "fade-out" : "fade-in"}`}>
                {tab_data.find((t) => t.id === tab).content}
              </div>
            </div>
          </motion.div>
    </section>
  );
};

export default Me;
