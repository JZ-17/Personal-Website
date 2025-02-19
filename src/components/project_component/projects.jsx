"use client";
import { useState, useEffect } from "react";
import "@/components/project_component/Projects.css";

const Projects = ({ project }) => {
  const [showAll, setShowAll] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(project.slice(0, 3));

  useEffect(() => {
    if (showAll) {
      setVisibleProjects(project);
    } else {
      setFadeOut(true);
      setTimeout(() => {
        setVisibleProjects(project.slice(0, 3));
        setFadeOut(false);
      }, 500); // Match fadeOut animation duration
    }
  }, [showAll, project]);

  // Toggle between showing 3 cards and all cards
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Open modal
  const openModal = (proj) => {
    setSelectedProject(proj);
    document.body.classList.add("modal-open"); 
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="projects-container" id="projects">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="header-text">Projects</h2>
        <hr className="header-border" />
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {visibleProjects.map((proj, id) => (
          <div
            className={`project-card ${fadeOut ? "fade-out" : "fade-in"}`}
            key={id}
            onClick={() => openModal(proj)}
          >
            <h3 className="project-title">{proj.title}</h3>
            <h4 className="project-company">{proj.company}</h4>
            {proj.award && <p className="project-award">{proj.award}</p>}
            <p className="project-accomplishment">{proj.accomplishment}</p>
            <div className="project-skills">
              {proj.skills.map((skill, i) => (
                <span key={i} className="project-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="toggle-button">
        <button onClick={toggleShowAll}>
          {showAll ? "View Less" : "View More"}
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-title-container">
            <h3 className="modal-title">{selectedProject.title}</h3>
          </div>
            <h4 className="modal-company">{selectedProject.company}</h4>
            {selectedProject.award && (
              <p className="modal-award">{selectedProject.award}</p>
            )}
            <h4><b>Accomplishments:</b></h4>
            <p className="modal-accomplishment">
              {selectedProject.accomplishment}
            </p>
            <h4><b>Actions:</b></h4>
            <ul className="modal-actions">
              {selectedProject.actions.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
            <div className="modal-links">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  Visit Project
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  GitHub
                </a>
              )}
              {selectedProject.paper && (
                <a
                  href={selectedProject.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  View Paper
                </a>
              )}
            </div>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
