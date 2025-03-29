import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navigationbar.css"; // Custom CSS file
import logo from '../images/clg-logo.png';

const Navigationbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if the current route is the root route (/)
  const isDashboard = location.pathname === '/';

  return (
    <Navbar
      expand="lg"
      fixed="top" // Fix the navbar at the top
      className={`transparent-navbar ${scrolled ? 'scrolled' : ''}`} // Apply transparent class
    >
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
          <span style={{ marginLeft: '10px' }}>Careers Roadmap</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate('/courses')}>Courses</Nav.Link>

            {/* Conditionally render About Us, How to Use, and What to Do links only on the Dashboard */}
            {isDashboard && (
              <>
                <Nav.Link onClick={() => scrollToSection('about-us')}>About Us</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('how-to-use')}>How to Use</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('what-to-do')}>What to Do</Nav.Link>
              </>
            )}

            <NavDropdown
              title={<FaUserCircle size={24} />}
              id="basic-nav-dropdown"
              align="end"
            >
              {isLoggedIn ? (
                <>
                  <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/reset-password')}>Reset Password</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item onClick={() => navigate('/login')}>Login</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate('/register')}>Register</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;