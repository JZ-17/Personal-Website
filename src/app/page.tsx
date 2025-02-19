"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar_component/navbar";
import Intro from "@/components/intro_component/Intro";
import Me from "@/components/me_component/me";
import Experience from "@/components/experience_component/experience";
import Projects from "@/components/project_component/projects";
import Email from "@/components/email_component/email";
import { project as projectData } from "@/components/project_component/project";
import { useEffect } from "react";
import "@/app/globals.css";
import Footer from "@/components/footer_component/footer";

export default function Home() {
  useEffect(() => {
    const starContainer = document.getElementById("stars-container");

    if (starContainer) {
      for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        starContainer.appendChild(star);
      }
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 20, transition: { duration: 2.5 } },
  };

  return (
    <>
      {/* Background Stars */}
      <motion.div
        id="stars-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      ></motion.div>

      {/* Main Content */}
      <main className="flex min-h-screen flex-col">
        <div className="container mt-24 mx-auto px-12 py-4">

            <Navbar />
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Intro />
              <Me />
              <Experience />
            </motion.div>
            <Projects project={projectData} />
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Email />
              <Footer />
            </motion.div>
        </div>
      </main>
    </>
  );
}