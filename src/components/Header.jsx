import React from 'react'
import './Home.css';

import logo from '/images/logo.png';
import dexLogo from '/images/DexLogo.png';
import teleLogo from '/images/teleLogo.png';
import xLogo from '/images/xLogo.png';

import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  
useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, [])

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

  return (
    <>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
        <Container >
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#stories" className={activeLink === 'stories' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stories')}>Stories</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://pump.fun/"><img src={dexLogo} alt="dexfartella" /></a>
                <a href="https://x.com/fartella"><img src={xLogo} alt="xfartella" /></a>
                {/* <a href="https://t.me/fartella"><img src={teleLogo} alt="xfartella" /></a> */}
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header