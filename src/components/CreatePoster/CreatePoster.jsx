import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap'
import { createPosterAPI } from '../../APIs/createPosterAPI';

const CreatePoster = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [images, setImages] = useState('');
  const [price, setPrice] = useState('');
  const [featured, setFeatured] = useState('');
  const [location, setLocation] = useState('');
  const [leased, setLeased] = useState('');
  const [model_year, setModelYear] = useState('');
  const [milage, setMilage] = useState('');
  const [fuel_type, setFuelType] = useState('');
  const [engine_capacity, setEngineCapacity] = useState('');
  const [brandName, setBrandName] = useState('');
  const [transmission_type, setTransmissionType] = useState('');
  const [mobile_number, setMobileNumber] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleImagesChange = (e) => {
  setImages(e.target.files)
  }
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }
  const handleFeaturedChange = (e) => {
    setFeatured(e.target.value);
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }
  const handleLeasedChange = (e) => {
    setLeased(e.target.value);
  }
  const handleModelYearChange = (e) => {
    setModelYear(e.target.value);
  }
  const handleMilageChange = (e) => {
    setMilage(e.target.value);
  }
  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  }
  const handleEngineCapacityChange = (e) => {
    setEngineCapacity(e.target.value);
  }
  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  }
  const handleTransmissionTypeChange = (e) => {
    setTransmissionType(e.target.value);
  }
  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('title',title)
    for(var x = 0;x<images.length; x++){
      formData.append('images[]',images[x])
    }
    formData.append('price',price)
    formData.append('featured',featured)
    formData.append('location',location)
    formData.append('leased',leased)
    formData.append('model_year',model_year)
    formData.append('milage',milage)
    formData.append('fuel_type',fuel_type)
    formData.append('engine_capacity',engine_capacity)
    formData.append('brandName',brandName)
    formData.append('transmission_type',transmission_type)
    formData.append('mobile_number',mobile_number)
    createPosterAPI(formData);
    navigate('/');
  }
  return (
    <div>
      <Container>
        <h2 className='mt-3'>Create A New Poster
          <Button onClick={() => navigate(-1)} style={{float: "right"}}>Back</Button>
        </h2>
        <Form className='border p-3' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} placeholder="Enter Title" onChange={handleTitleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type='number' value={price} placeholder='Enter price' onChange={handlePriceChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBrandName">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control type='text' value={brandName} placeholder='Enter Brand Name' onChange={handleBrandNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type='text' value={location} placeholder='Enter location' onChange={handleLocationChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFeatured">
            <Form.Label>Featured</Form.Label>
            <Form.Control type='text' value={featured} placeholder='Featured or Unfeatured' onChange={handleFeaturedChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLeased">
            <Form.Label>Leased</Form.Label>
            <Form.Control type='text' value={leased} placeholder='Leased or Unleased' onChange={handleLeasedChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formModelYear">
            <Form.Label>Model Year</Form.Label>
            <Form.Control type='text'value={model_year} placeholder='Enter Model Year' onChange={handleModelYearChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEngineCapacity">
            <Form.Label>Engine Capacity</Form.Label>
            <Form.Control type='text' value={engine_capacity} placeholder='Enter Engine Capacity' onChange={handleEngineCapacityChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTransmission">
            <Form.Label>Transmission Type</Form.Label>
            <Form.Control type='text' value={transmission_type} placeholder='Enter Transmission Type' onChange={handleTransmissionTypeChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFuelType">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Control type='text' value={fuel_type} placeholder='Enter Fuel Type' onChange={handleFuelTypeChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMileage">
            <Form.Label>Mileage</Form.Label>
            <Form.Control type='text' value={milage} placeholder='Enter Mileage' onChange={handleMilageChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type='text' value={mobile_number} placeholder='Enter Mobile Number' onChange={handleMobileNumberChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImages">
            <Form.Label>Images</Form.Label>
            <Form.Control type='file' accept='image/*' multiple={true} onChange={handleImagesChange} />
          </Form.Group>
          <Button type="submit" >Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
export default CreatePoster;
