import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/firebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fw-bolder" as={HashLink} to="/home">Tour<span className="text-danger"> X</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/contactus">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            {user.email ? <Nav.Link as={HashLink} to="/mybooking">My Order</Nav.Link> : " "}
                            {user.email ? <Nav.Link as={HashLink} to="/allorders">All Orders</Nav.Link> : " "}
                            {user.email ? <Nav.Link onClick={() => logOut()}>Log out</Nav.Link> : <Nav.Link as={HashLink} to="/login">Log In</Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                <span className='text-danger'>{
                                    user.displayName
                                }</span>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
