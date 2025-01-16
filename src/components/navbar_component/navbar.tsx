import Link from "next/link";
import React from "react";
import GithubIcon from "@/components/navbar_component/navbar_icons/github";
import LinkedinIcon from "@/components/navbar_component/navbar_icons/linkedin";
import InstagramIcon from "@/components/navbar_component/navbar_icons/instagram";
import YoutubeIcon from "@/components/navbar_component/navbar_icons/youtube";
import "@/components/navbar_component/Navbar.css";

const navLinks = [
  { title: "About Me", path: "#me" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact Me", path: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="#">
            <img
              src="/images/navbar_logo.png"
              className="logo-icon"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          {navLinks.map((link, index) => (
            <a key={index} href={link.path} className="navbar-link">
              {link.title}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="navbar-icons">
          <a
            href="https://github.com/jz-17/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/thejoshzhang/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://www.instagram.com/jz.03_/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@jz.03"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

