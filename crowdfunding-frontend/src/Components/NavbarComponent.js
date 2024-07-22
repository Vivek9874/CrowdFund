import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { logo } from '../Images'; // Adjust path as needed
import '../Stylings/Navbar.css';

const NavbarComponent = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => navigate('/');
    const handleRiseNowClick = () => navigate('/RiseNow');
    const handleContactClick = () => navigate('/contact');
    const handleSignInClick = () => navigate('/sign-in');
    const handleSignUpClick = () => navigate('/sign-up');

    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container fluid>
                <img src={logo} alt="CrowdFund Logo" height="90" width="90" className="navbar-brand" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>
                        <Nav.Link onClick={handleRiseNowClick}><b>Rise-Now!!</b></Nav.Link>
                        <Nav.Link onClick={handleContactClick}>Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light" onClick={handleSignInClick} className="me-2">Sign In</Button>
                        <Button variant="outline-light" onClick={handleSignUpClick}>Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
