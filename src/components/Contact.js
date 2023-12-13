import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <main className="flex-shrink-0 text-center">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1 }}
        >
          <path
            fill="#82A0D8"
            fillOpacity="1"
            d="M0,32L48,32C96,32,192,32,288,69.3C384,107,480,181,576,186.7C672,192,768,128,864,122.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
          <h1 className="mt-5">Contact</h1>
          <p>Contact me via the following social media:</p>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button variant="outline-primary" href="https://instagram.com/ur.jasminee_" target="_blank">
                Instagram
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="outline-success" href="https://wa.me/628558532507" target="_blank">
                WhatsApp
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="outline-info" href="https://www.linkedin.com/in/aurell-nur-jasmine-362550279" target="_blank">
                Linkedln
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
