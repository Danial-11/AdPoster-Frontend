import axios from "axios";
import React from "react";
import { Card, Row, Col, Dropdown, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ poster }) => {
  const navigate = useNavigate();
  const handleDeletePoster = (poster) => {
    axios
      .delete(`http://localhost:3000/api/posters/${poster.id}`)
      .then((res) => {});
  };
  const handleEditPoster = (poster) => {
    navigate(`/edit/${poster.id}`, {
      state: {
        poster,
      },
    });
  };
  return (
    <Card className="mb-2 mx-5" style={{ width: "650px" }} key={poster.id}>
      <Carousel>
        {poster.images.map((image) => (
          <Carousel.Item interval={2000}>
            <Card.Img src={image} style={{ height: "420px" }} key={image.id} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Dropdown>
          <Dropdown.Toggle
            split
            style={{
              float: "right",
              fontSize: "11px",
              marginTop: "-5px",
            }}
            id="dropdown-basic"
          >
            Options{" "}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDeletePoster(poster)}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleEditPoster(poster)}>
              Edit
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Card.Title>{poster.title}</Card.Title>
        <Row>
          <Col>
            <Card.Text>{poster.location}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.price}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.featured}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.brandName}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.mobile_number}</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>{poster.fuel_type}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.engine_capacity}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.transmission_type}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.model_year}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{poster.leased}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
