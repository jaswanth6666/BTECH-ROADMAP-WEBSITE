import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap';

const DomainsPage = () => {
  const { courseId } = useParams();
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        setDomains(response.data.domains);
      } catch (err) {
        console.error('Failed to fetch domains:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, [courseId]);

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
    <Container className="mt-5">
      <h1 className="text-center mb-4">Domains</h1>
      <Row>
        {domains.map((domain) => (
          <Col key={domain._id} md={4} className="mb-4">
            <Card
              onClick={() => navigate(`/domains/${domain._id}/details`)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Body>
                <Card.Title>{domain.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DomainsPage;