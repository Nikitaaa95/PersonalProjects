import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="container">
      <div className="row">
        <div className="col-md-6">
        <div className="project" style={{ marginBottom: '50px', marginRight: '50px' }}>
            <img src="/dashboard.png" alt="picture of weather app showing weather in boston" style={{ height: '350px' }} className="img-fluid" />
            <h3>Weather Dashboard</h3>
            <p>The purpose of this site is to help users who might be traveling in planning. This will give the ability to quickly retrieve a snapshot of their destination anywhere within the US!</p>
            <a href="https://nikitaaa95.github.io/Weather-Dashboard/" className="btn btn-primary">View App</a>
            <a href="https://github.com/Nikitaaa95/Weather-Dashboard" className="btn btn-secondary">GitHub Repo</a>
          </div>
        </div>
        <div className="col-md-6">
        <div className="project" style={{ marginBottom: '50px', marginRight: '50px' }}>
            <img src="/scheduler.png" alt="picture of scheduler app from November 2023" style={{ height: '350px' }} className="img-fluid" />
            <h3>Work Day Scheduler</h3>
            <p>Stay on top of your schedule with ease using my intuitive interface. My app displays the current date and time prominently, so you always know where you stand in your day. With visually distinct time blocks for past, present, and future hours, you can quickly glance at your schedule and see what's coming up next. Easily add, edit, and remove tasks, and watch as the time blocks update in real-time to reflect your changes.</p>
            <a href="https://nikitaaa95.github.io/Work-Day-Scheduler/" className="btn btn-primary">View App</a>
            <a href="https://github.com/Nikitaaa95/Work-Day-Scheduler" className="btn btn-secondary">GitHub Repo</a>
          </div>
        </div>
        <div className="col-md-6">
        <div className="project" style={{ marginBottom: '50px', marginRight: '50px' }}>
            <img src="/PourDecisions.png" alt="picture of culinarycanvas homepage" style={{ height: '350px' }} className="img-fluid" />
            <h3>PourDecisions</h3>
            <p>The purpose of this site is to help users find new beers and to search up a cocktail recipe that could suit their needs!</p>
            <a href="https://kateredkina.github.io/recipe-catalog/" className="btn btn-primary">View App</a>
            <a href="https://github.com/KateRedkina/pour-decisions" className="btn btn-secondary">GitHub Repo</a>
          </div>
        </div>
        <div className="col-md-6">
        <div className="project" style={{ marginBottom: '50px', marginRight: '50px' }}>
          <img src="/recipe.png" alt="picture of recipe homepage" style={{ height: '350px' }} className="img-fluid" />
            <h3>Culinary Canvas</h3>
            <p>This project aimed to develop a recipe website where users can post, retrieve, and view recipe details after signing in. It combines front-end and back-end technologies to efficiently manage recipe information, including prep time, cook time, and ingredients. By incorporating handlebars, authentication, and sequelize models, the project enables CRUD functionality for a seamless user experience.</p>
            <a href="https://culinarycanvas-ab69a55b38cf.herokuapp.com/profile" className="btn btn-primary">View App</a>
            <a href="https://github.com/Nikitaaa95/Project-2" className="btn btn-secondary">GitHub Repo</a>
          </div>
        </div>
        <div className="col-md-6">
        <div className="project" style={{ marginBottom: '50px', marginRight: '50px' }}>
            <img src="/testPage.png" alt="picture of timed test app" style={{ height: '350px' }} className="img-fluid" />
            <h3>Timed Test</h3>
            <p>The purpose of this site is for the user to be able to test some basic coding knowledge and review the information they know. It sets a timer to appropriately challenge the user and provides them with their final score at the end.</p>
            <a href="https://nikitaaa95.github.io/Timed-Test" className="btn btn-primary">View App</a>
            <a href="https://github.com/Nikitaaa95/Timed-Test" className="btn btn-secondary">GitHub Repo</a>
          </div>
        </div>
        <div className="col-md-6">
        <div className="project" style={{ marginBottom: '50px', marginRight: '50px' }}>
            <img src="/passwordGenerator.png" alt="picture of generator app" style={{ height: '350px' }} className="img-fluid" />
            <h3>Password Generator</h3>
            <p>The purpose of this site is for the user to come to the site and build a non-predictive password meeting the criteria they need for any third party program they might be using. The site is seeking to relieve the user from the work of creating that password.</p>
            <a href="https://nikitaaa95.github.io/Password-Generator" className="btn btn-primary">View App</a>
            <a href="https://github.com/Nikitaaa95/Password-Generator" className="btn btn-secondary">GitHub Repo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
