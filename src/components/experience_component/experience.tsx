"use client";
import React from "react";
import "@/components/experience_component/Experience.css";
import { experiences } from "@/components/experience_component/experiences";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} className="experience-section" id="experience">

      {/* Section Header */}
      <div className="section-header">
        <h2 className="header-text">Experience</h2>
        <hr className="header-border" />
      </div>
      
      {/* Experience Cards */}
      <div className="experience-cards">
        {experiences.map((job, i) => (
          <div
            id={i.toString()}
            key={i}
            tabIndex={0}
            className="experience-card"
          >
            <a
              href={job.link ? job.link : ""}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link"
            >
              <div className="flex justify-between">
                <h3 className="experience-title">{job.title}</h3>
              </div>
              <h4 className="experience-company">{job.company}</h4>
              <ul className="experience-list">
                {job.description.map((point, i) => (
                  <li key={i} className="experience-list-item">
                    {point}
                  </li>
                ))}
              </ul>
            </a>
          </div>
        ))}
      </div>

      {/* Resume Button */}
      <div className="resume-button-container">
        <Link href="/Resume_Document.pdf" target="_blank" passHref>
          <button className="resume-button">
            View My Full Resume
          </button>
        </Link>
      </div>
    </motion.div>
  );
}