import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Dashboard.css"; // Custom CSS file

const Dashboard = () => {
  return (
    <Container className="mt-5">
      {/* Welcome Card */}
      <Card className="dashboard-card">
        <Card.Body>
          <h1 className="text-center dashboard-title">Welcome to the Careers Roadmap!</h1>
          <p className="text-center dashboard-subtitle">
            Explore your courses and manage your learning journey.
          </p>
          <div className="text-center">
            <Button as={Link} to="/courses" variant="primary" className="dashboard-button">
              Go to Courses
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* About Us Section */}
      <section id="about-us" className="mt-5">
        <Card className="dashboard-card">
          <Card.Body>
            <h2 className="text-center">About Us</h2>
            <p>
              Careers Roadmap is a platform designed to help you navigate your career journey. Whether you're a student, a professional, or someone looking to switch careers, we provide the tools and resources you need to succeed. Our mission is to empower individuals by offering curated courses, career planning tools, and mentorship opportunities to help you achieve your goals.
            </p>
          </Card.Body>
        </Card>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="mt-5">
        <Card className="dashboard-card">
          <Card.Body>
            <h2 className="text-center">How to Use the Website</h2>
            <p>
              Using Careers Roadmap is simple and intuitive. Start by exploring our wide range of courses tailored to various career paths. Once you find a course that aligns with your goals, enroll and begin your learning journey. Track your progress through our user-friendly dashboard, and take advantage of our career planning tools to set and achieve your objectives. Whether you're looking to upskill, reskill, or explore new opportunities, Careers Roadmap is here to guide you every step of the way.
            </p>
          </Card.Body>
        </Card>
      </section>

      {/* What to Do Section */}
      <section id="what-to-do" className="mt-5">
        <Card className="dashboard-card">
          <Card.Body>
            <h2 className="text-center">What to Do in the Website</h2>
            <p>
              On Careers Roadmap, you can take several actions to enhance your career prospects. Begin by creating an account or logging in to access personalized features. Browse through our extensive catalog of courses and enroll in the ones that match your career aspirations. Utilize our progress tracking tools to monitor your learning journey and stay motivated. Additionally, connect with experienced mentors who can provide guidance and support as you work towards your goals. Careers Roadmap is your one-stop destination for all things career-related.
            </p>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
};

export default Dashboard;