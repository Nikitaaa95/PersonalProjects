import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project">
        <img src="path-to-project-image.jpg" alt="Project Name" />
        <div className='Project1'>
          <h3>Project Placeholder</h3>
          <p>Description space</p>
          <a href="project-link">View App</a>
          <a href="git-hub-link">GitHub Repo</a>
        </div>
        <div className='Project2'>
          <h3>Password Generator</h3>
          <p>Description Space</p>
          <a href="project-link">View App</a>
          <a href="git-hub-link">GitHub Repo</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
