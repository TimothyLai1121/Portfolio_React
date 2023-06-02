import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-toggle" onClick={handleNavToggle}>
        <span className="toggle-icon"></span>
      </div>
      <div className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className="nav-link" activeClassName="active">
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
