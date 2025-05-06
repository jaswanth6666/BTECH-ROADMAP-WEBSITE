import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Card, ListGroup, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found. Redirecting to login...');
          window.location.href = '/login'; // Redirect to login page
          return;
        }
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/profile`, {
          headers: { Authorization: token },
        });
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch profile');
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <Container className="my-5">
    <h1 className="text-center mb-4">User Profile</h1>
    <Card className="shadow">
      <Card.Body>
        <Card.Text>
          <strong>Name:</strong> {user.username}
        </Card.Text>
        <Card.Title><strong>Completed Courses:</strong></Card.Title>
        <ListGroup variant="flush">
          {user.completedCourses.map((course, index) => (
            <ListGroup.Item key={index}>{course}</ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Title><strong>Enrolled Courses in Progress:</strong></Card.Title>
        <ListGroup variant="flush">
          {user.coursesInProgress.map((course, index) => (
            <ListGroup.Item key={index}>{course}</ListGroup.Item>
          ))}
        </ListGroup>
        <Button variant="primary" className="mt-3">
          Edit Profile
        </Button>
      </Card.Body>
    </Card>
  </Container>
  );
};

export default Profile;
