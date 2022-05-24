import React, { useContext, useState } from 'react';
import { Container, Form, FormControl, Navbar, NavDropdown,Button,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {SearchContext} from '../../Context/SearchContext';
import styles from './NavComp.module.css'
const NavComp = () => {
    
    const {setSearchText} = useContext(SearchContext);
    const [tempSearchText, setTempSearchText] = useState('');
    
    const handleOnChange = (e) => {
        setTempSearchText(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchText(tempSearchText);
        
        
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link className={styles.link} to='/'>Student List</Link>
                        </Nav.Link>
                        {/* <Nav.Link>
                            <Link className={styles.link} to='/addStudent'>Add Student</Link>
                        </Nav.Link> */}
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                        </NavDropdown.Item>
                        </NavDropdown> */}
                    
                    </Nav>
                    <Form onSubmit={handleSubmit} className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleOnChange}
                        />
                        <Button type='submit' variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavComp;