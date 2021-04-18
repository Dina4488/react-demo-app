import React from 'react';
import { Button, Navbar, NavDropdown, Form , FormControl} from 'react-bootstrap';

function NavBar({filterText , setFilterText, sortBy ,setSortBy }) {
    return (       
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Form inline>
            <FormControl type="text" className="mr-sm-2"
                value={filterText} onChange={(e) => setFilterText(e.target.value)} 
                placeholder="Filter by a first or Last name" className="filterInp" />
                <Form.Label>Example select</Form.Label>
                <FormControl as="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="age">age</option>
                </FormControl>
        </Form>                     
    </Navbar>
        
    );
}

export default NavBar;