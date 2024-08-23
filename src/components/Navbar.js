import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import logo from '../assets/logo.png'; 
import avatar from '../assets/Fox.png'; 
import './Navbar.css'; 

function CustomNavbar() {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <Navbar bg="#212121" expand="lg" style={{ marginLeft: '10px' }}>
      <Navbar.Brand href="#home">
        <img
          src={logo} 
          width="125"
          height="60"
          className="d-inline-block align-top"
          alt="Brand Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#link1" className="text-white nav-link-home">Home</Nav.Link>
          <Nav.Link href="#link2" className="text-white">Tv Shows</Nav.Link>
          <Nav.Link href="#link3" className="text-white">Movies</Nav.Link>
          <Nav.Link href="#link4" className="text-white">Recently Added</Nav.Link>
          <Nav.Link href="#link5" className="text-white">My List</Nav.Link>
        </Nav>
        <Form className="search-form ms-auto d-flex align-items-center">
          <FormControl
            type="text"
            placeholder="Search"
            className={`search-bar ${searchVisible ? 'visible' : ''}`}
          />
          <button
            onClick={() => setSearchVisible(!searchVisible)}
            className="search-button"
          >
            <i className="bi bi-search"></i>
          </button>
          <Link to="/account" className="avatar-link ms-2">
            <img
              src={avatar}
              alt="Avatar"
              className="avatar-image"
            />
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
