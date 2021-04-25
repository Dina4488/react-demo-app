import React from 'react';
import { Button, Navbar, NavDropdown, Form , FormControl, Nav} from 'react-bootstrap';

function NavBar({filterText , setFilterText, sortBy ,setSortBy }) {
    return (       
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">           
            <Nav.Link href="#/actors">Actors</Nav.Link> 
            <Nav.Link href="#/movies">Movies</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Navbar>  
        
    );
}

export default NavBar;