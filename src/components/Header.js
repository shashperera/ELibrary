import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './header.css'


const Header = () => (
  <header id="app-header">
    <Navbar className="color-nav" variant="light">
      <Navbar.Brand href="#/">E-Library</Navbar.Brand>
    </Navbar>
  </header>
)
export default Header;
