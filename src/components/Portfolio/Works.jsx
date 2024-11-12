import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "./Data";
import { projectsNav } from "./Data";

// import components
import WorkItems from "./WorkItems";
import WorkItems1 from "./WorkItems1";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize screenWidth state

  // Track screen width and update on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Update screenWidth on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const handleBackToWorksClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Set minimum number of projects based on screen size
  const minProjectsForButton = screenWidth <= 768 ? 2 : 4; // Determine based on screen width

  return (
    <div>
      {/* projects nav */}
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      {/* projects */}
      <div className="work__container container grid">
  {projects.map((item) => {
    if (item.category.toLowerCase() === "photography" || item.category.toLowerCase() === "mobile") {
      return <WorkItems1 item={item} key={item.id} />;
    } else {
      return <WorkItems item={item} key={item.id} />;
    }
  })}
</div>


      {/* Show the "Back to Works Filter" button if there are enough projects */}
      {projects.length >= minProjectsForButton && (
        <div className="back-to-works-container">
          <button className="back-to-works-btn" onClick={handleBackToWorksClick}>
            Back to Works Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
