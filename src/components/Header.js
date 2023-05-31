import React from 'react';
import Navigation from './Navigation';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Another Portfolio but with React</h1>
      <Navigation />
    </header>
  );
};

export default Header;
