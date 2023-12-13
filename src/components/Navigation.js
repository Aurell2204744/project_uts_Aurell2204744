import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  const navbarStyle = {
    backgroundColor: '#82A0D8', 
  };

  return (
    <Navbar style={navbarStyle} variant="dark" expands="lg">
      <Container>
        <Navbar.Brand href="/Home">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
