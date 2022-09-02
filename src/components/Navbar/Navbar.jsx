import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button } from "react-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate()
  const handleNewPoster = () => {
    navigate('/create')
  }
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Brand>Ad Poster</Navbar.Brand>
          <Button onClick={handleNewPoster}>New Poster</Button>
      </Container>
        </Navbar>
    </div>
  );
};

export default NavbarComponent;
