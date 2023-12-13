import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image1 from "./../assets/Aurell.jpg";

const About = () => {
  return (
    <main className="flex-shrink-0">
      <div>
        <h1 className="mt-5 text-center mb-4">About me</h1>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>Hallo! My Name is Aurell</h3>
              <p>Hello! I am Aurell Nur Jasmine, the founder and creator behind this website. I want to share a little about myself</p>
              <h3>Who Am I ?</h3>
              <p>I am a student at the Indonesian University of Education, Computer Science education study program</p>
              <h3>Interests and Dreams</h3>
              <p>I have a special interest in makeup, art and photography</p>
            </Col>
            <Col className="text-center"> {/* Menambahkan kelas text-center */}
              <Image src={Image1} roundedCircle alt="Foto Profil" width={300} height={300} />
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1 }}>
          <path fill="#82A0D8" fillOpacity="1" d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,197.3C560,213,640,235,720,224C800,213,880,171,960,181.3C1040,192,1120,256,1200,256C1280,256,1360,192,1400,160L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </main>
  );
};

export default About;
