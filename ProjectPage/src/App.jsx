import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
