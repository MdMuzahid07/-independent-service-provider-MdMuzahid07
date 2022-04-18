import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='pb-5'>
            <Navbar style={{position: "fixed", top: "0", left: "0", zIndex: "100", width: "100%"}} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Fitness Gym</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                          <Nav.Link as = {Link} to="/Home">Home</Nav.Link>
                          <Nav.Link as = {Link} to="/about">About</Nav.Link>
                          <Nav.Link as = {Link} to="/blogs">Blogs</Nav.Link>
                          <Nav.Link as = {Link} to="/getintouch">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as = {Link} to="/login">Login</Nav.Link>
                            <Nav.Link className='bg-danger rounded' as = {Link} to="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;