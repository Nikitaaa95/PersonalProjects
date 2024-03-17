import React from 'react';

function AboutMe() {
  return (
    <section id="about-me" className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/public/My-picture.jpeg"
            alt="Picture of Nikita at a tea garden"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <p>
            I studied Economics and Business in California and honed my skills through several valuable internships during my college years. My journey in the professional world began at First Republic Securities Company, where I started as an operations associate. Through dedication and hard work, I've since climbed the ranks and currently hold the position of Senior Director of Operations. I'm passionate about my work, and as the world is changing, I've realized that I'm consistently working with team members in tech and product. In an effort to become a better colleague to them, I'm trying to increase my own technical skills. Please reach out to me to talk about my work and how I could be a good addition to your team!
            <br></br>
            I also love to discuss history and literature. My favorite book is Pride and Prejudice!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
