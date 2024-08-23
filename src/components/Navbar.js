import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/logo.png'; // Importa l'immagine dalla cartella assets
import avatar from '../assets/Fox.png'; // Importa l'immagine dell'avatar
import './Navbar.css'; // Importa il file CSS per le animazioni

function CustomNavbar() {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <Navbar bg="#212121" expand="lg" style={{ marginLeft: '10px' }}>
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo} // Usa l'immagine importata
          width="125"
          height="60"
          className="d-inline-block align-top"
          alt="Brand Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" className="text-white nav-link-home">Home</Nav.Link>
          <Nav.Link as={Link} to="/tvshows" className="text-white">Tv Shows</Nav.Link>
          <Nav.Link as={Link} to="/movies" className="text-white">Movies</Nav.Link>
          <Nav.Link as={Link} to="/recentlyadded" className="text-white">Recently Added</Nav.Link>
          <Nav.Link as={Link} to="/mylist" className="text-white">My List</Nav.Link>
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
              src={avatar} // Usa l'immagine dell'avatar
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
