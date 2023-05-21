import React from 'react';
import '../styles/project.css'

const Project = ({ image, title, appLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div>
        <a href={appLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
};

export default Project;
