"use client"
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

  return (
    <>
      {/* Background Stars */}
      <div id="stars-container"></div>

      {/* Main Content */}
      <main className="flex min-h-screen flex-col">
        <div className="container mt-24 mx-auto px-12 py-4">
          <Navbar />
          <Intro />
          <Me />
          <Experience />
          <Projects project = { projectData }/>
          <Email />
          <Footer />
        </div>
      </main>
    </>
  );
}