import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const location = useLocation();

  return (
    <header className="fixed-top bg-light">
      <div className="container">
        <h1 className="text-center py-3">Nikita Thomas</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
