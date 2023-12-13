import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image1 from "./../assets/nana.jpg";
import Image2 from "./../assets/Jasmine.png";
import { Carousel } from "react-bootstrap";
import hero1 from "./../assets/Home1.jpg";
import hero2 from "./../assets/museum.jpeg";

const Hero = () => {
  return (
    <main className="flex-shrink-0">
      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: "absolute", bottom: 0, left: 0, zIndex: -1 }}>
          <path
            fill="#82A0D8"
            fillOpacity="1"
            d="M0,32L48,32C96,32,192,32,288,69.3C384,107,480,181,576,186.7C672,192,768,128,864,122.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row className="align-items-center justify-content-center">
            <Col>
              <div className="text-center">
                <h3>Hello Mates!</h3>
                <p>Introduce! I am Aurell Nur Jasmine, welcome to my web. Let me share about myself!</p>
              </div>
            </Col>
            <Col className="text-center">
              <div className="d-flex justify-content-center align-items-center">
                <Image src={Image2} roundedCircle alt="Foto Profil" style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Hero;
