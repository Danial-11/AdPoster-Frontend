import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import { updatePosterAPI } from "../../APIs/updatePosterAPI";

const EditPoster = () => {
  const ulocation = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(ulocation.state.poster.title);
  const [featured, setFeatured] = useState(ulocation.state.poster.featured);
  const [location, setLocation] = useState(ulocation.state.poster.location);
  const [leased, setLeased] = useState(ulocation.state.poster.leased);
  const [model_year, setModelYear] = useState(
    ulocation.state.poster.model_year
  );
  const [milage, setMilage] = useState(ulocation.state.poster.milage);
  const [fuel_type, setFuelType] = useState(ulocation.state.poster.fuel_type);
  const [engine_capacity, setEngineCapacity] = useState(
    ulocation.state.poster.engine_capacity
  );
  const [brandName, setBrandName] = useState(ulocation.state.poster.brandName);
  const [transmission_type, setTransmissionType] = useState(
    ulocation.state.poster.transmission_type
  );
  const [mobile_number, setMobileNumber] = useState(
    ulocation.state.poster.mobile_number
  );

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFeaturedChange = (e) => {
    setFeatured(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleLeasedChange = (e) => {
    setLeased(e.target.value);
  };
  const handleModelYearChange = (e) => {
    setModelYear(e.target.value);
  };
  const handleMilageChange = (e) => {
    setMilage(e.target.value);
  };
  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  };
  const handleEngineCapacityChange = (e) => {
    setEngineCapacity(e.target.value);
  };
  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };
  const handleTransmissionTypeChange = (e) => {
    setTransmissionType(e.target.value);
  };
  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePosterAPI({
      id: ulocation.state.poster.id,
      title,
      featured,
      location,
      transmission_type,
      engine_capacity,
      milage,
      model_year,
      mobile_number,
      leased,
      fuel_type,
      brandName,
    })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  };
  return (
    <div>
      <Container>
        <h2>Edit Poster</h2>
        <Form className="border p-3">
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Enter Title"
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBrandName">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              type="text"
              value={brandName}
              placeholder="Enter Brand Name"
              onChange={handleBrandNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              placeholder="Enter location"
              onChange={handleLocationChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFeatured">
            <Form.Label>Featured</Form.Label>
            <Form.Control
              type="text"
              value={featured}
              placeholder="Featured or Unfeatured"
              onChange={handleFeaturedChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLeased">
            <Form.Label>Leased</Form.Label>
            <Form.Control
              type="text"
              value={leased}
              placeholder="Leased or Unleased"
              onChange={handleLeasedChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formModelYear">
            <Form.Label>Model Year</Form.Label>
            <Form.Control
              type="text"
              value={model_year}
              placeholder="Enter Model Year"
              onChange={handleModelYearChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEngineCapacity">
            <Form.Label>Engine Capacity</Form.Label>
            <Form.Control
              type="text"
              value={engine_capacity}
              placeholder="Enter Engine Capacity"
              onChange={handleEngineCapacityChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTransmission">
            <Form.Label>Transmission Type</Form.Label>
            <Form.Control
              type="text"
              value={transmission_type}
              placeholder="Enter Transmission Type"
              onChange={handleTransmissionTypeChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFuelType">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Control
              type="text"
              value={fuel_type}
              placeholder="Enter Fuel Type"
              onChange={handleFuelTypeChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMileage">
            <Form.Label>Mileage</Form.Label>
            <Form.Control
              type="text"
              value={milage}
              placeholder="Enter Mileage"
              onChange={handleMilageChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              value={mobile_number}
              placeholder="Enter Mobile Number"
              onChange={handleMobileNumberChange}
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={() => navigate(-1)} className="mx-2">
            Back
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default EditPoster;
