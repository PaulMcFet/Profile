import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project One</h3>
          <p>Description of project one.</p>
        </div>
        <div className="project-item">
          <h3>Project Two</h3>
          <p>Description of project two.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;