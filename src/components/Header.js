import React from 'react';
import Navigation from './Navigation';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">React.Js</h1>
      <Navigation />
    </header>
  );
};

export default Header;
