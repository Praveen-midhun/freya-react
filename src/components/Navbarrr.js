import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import './Navbarrr.css'

function Navbarrr() {
  return (
    <div><Navbar collapseOnSelect expand="lg" className="navshape">
    <Container className='navshape1'>
      <Navbar.Brand><h1 className='logoh1'>Freya</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link className='linking' to="/home">Home</Link></Nav.Link>
          <Nav.Link><Link className='linking' to="/pages">Pages</Link></Nav.Link>
          <Nav.Link><Link className='linking' to="/projects">Projects</Link></Nav.Link>
          <Nav.Link><Link className='linking' to="/blogs">Blog</Link></Nav.Link>
          <Nav.Link><Link className='linking' to="/pages">Contact</Link></Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link href="#"><FaFacebookF /></Nav.Link>
          <Nav.Link href="#"><FaTwitter /></Nav.Link>
          <Nav.Link href="#"><FaInstagram /></Nav.Link>
          <Nav.Link href="#"><FaDribbble /></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navbarrr