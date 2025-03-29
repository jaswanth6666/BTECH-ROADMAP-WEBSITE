import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Footer.css"; // Custom CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Careers Roadmap</h5>
            <p className="footer-text">
              Your guide to building a successful career. We provide resources, courses, and mentorship to help you achieve your professional goals.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">Home</a>
              </li>
              <li className="mb-2">
                <a href="/courses" className="footer-link">Courses</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="footer-link">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms-of-service" className="footer-link">Terms of Service</a>
              </li>
            </ul>
          </Col>

          {/* Follow Us Section */}
          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Follow Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#facebook" className="footer-link">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#twitter" className="footer-link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#linkedin" className="footer-link">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href="#instagram" className="footer-link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="footer-text mb-0">
              &copy; {new Date().getFullYear()} Careers Roadmap. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;