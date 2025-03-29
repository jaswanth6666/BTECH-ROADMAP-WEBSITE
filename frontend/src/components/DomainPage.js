import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DomainPage = () => {
  const { domainId } = useParams();
  const [domain, setDomain] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/domains/${domainId}`);
        setDomain(response.data);
      } catch (err) {
        console.error('Failed to fetch domain:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDomain();
  }, [domainId]);

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="my-5">
        {/* Header */}
        <h1 className="text-center mb-4">{domain.name}</h1>
        <p className="text-center lead">
        Your guide to building a career in {domain.name}
        </p>

        {/* Description Section */}
        <Card className="mb-4 shadow">
        <Card.Body>
            <Card.Title as="h2">Description</Card.Title>
            <Card.Text>{domain.description}</Card.Text>
        </Card.Body>
        </Card>

        {/* Pathways Section */}
        <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title as="h2">Pathways to Achieve Expertise</Card.Title>
          <ListGroup variant="flush">
            {domain.pathways.map((pathway, index) => (
              <ListGroup.Item key={index}>{pathway}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

        {/* Certifications Section */}
        <Card className="mb-4 shadow">
        <Card.Body>
            <Card.Title as="h2">Certifications</Card.Title>
            <ListGroup variant="flush">
            {domain.certifications.map((certification, index) => (
              <ListGroup.Item key={index}>
                {certification}
                {/* <Button
                  variant="primary"
                  className="mt-2"
                  href="#"
                  target="_blank"
                >
                  Learn More
                </Button> */}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        </Card>
  </Container>
  );
};

export default DomainPage;