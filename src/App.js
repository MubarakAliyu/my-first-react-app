// src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="text-center my-5">
          <h1>Welcome to My First React App</h1>
          <p>This is a simple React app using React-Bootstrap components</p>
        </Container>

        {/* Cards */}
        <Container className="my-5">
          <Row className="g-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>First Card</Card.Title>
                  <Card.Text>
                    This is the first card. You can put any content here.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Second Card</Card.Title>
                  <Card.Text>
                    This is the second card. You can customize it as needed.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Third Card</Card.Title>
                  <Card.Text>
                    This is the third card. Add any content you like.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
