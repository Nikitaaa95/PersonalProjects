import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ paddingTop: '200px', paddingBottom: '100px' }}>
          <Routes>
            <Route exact path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
