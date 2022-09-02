import React from "react";
import { getPostersApi } from "../../APIs/getAllPosters";
import { Form } from "react-bootstrap";

const SearchPoster = (props) => {
  const handleTitleSearch = (e) => {
    const searchValue = e.target.value;
    getPostersApi().then((res) => {
      const filteredPosters = res.filter((poster) => {
        return poster.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      props.setPosters(filteredPosters);
    });
  };
  const handlePriceSearch = (e) => {
    const searchValue = e.target.value;
    getPostersApi().then((res) => {
      const filteredPosters = res.filter((poster) => {
        return poster.price.toLowerCase().includes(searchValue.toLowerCase());
      });
      props.setPosters(filteredPosters);
    });
  };
  const handleFeaturedSearch = (e) => {
    const searchValue = e.target.value;
    getPostersApi().then((res) => {
      const filteredPosters = res.filter((poster) => {
        return poster.featured
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      props.setPosters(filteredPosters);
    });
  };
  const handleBrandNameSearch = (e) => {
    const searchValue = e.target.value;
    getPostersApi().then((res) => {
      const filteredPosters = res.filter((poster) => {
        return poster.brandName
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      props.setPosters(filteredPosters);
    });
  };
  const handleLocationSearch = (e) => {
    const searchValue = e.target.value;
    getPostersApi().then((res) => {
      const filteredPosters = res.filter((poster) => {
        return poster.location
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      props.setPosters(filteredPosters);
    });
  };
  const handleTransmissionTypeSearch = (e) => {
    const searchValue = e.target.value;
    getPostersApi().then((res) => {
      const filteredPosters = res.filter((poster) => {
        return poster.transmission_type
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      props.setPosters(filteredPosters);
    });
  };
  return (
    <div>
      <Form className="border p-3">
        <h2>Search Form</h2>
        <Form.Label>Title</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Enter title to search"
          onChange={handleTitleSearch}
        />
        <Form.Label>Price</Form.Label>
        <Form.Control
          className="mb-2"
          type="number"
          placeholder="Enter price to search"
          onChange={handlePriceSearch}
        />
        <Form.Label>Featured</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Featured/Not for search"
          onChange={handleFeaturedSearch}
        />
        <Form.Label>Brand Name</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Enter Brand Name for search"
          onChange={handleBrandNameSearch}
        />
        <Form.Label>Location</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Enter Location for search"
          onChange={handleLocationSearch}
        />
        <Form.Label>Transmission Type</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Enter transmission type for search"
          onChange={handleTransmissionTypeSearch}
        />
      </Form>
    </div>
  );
};

export default SearchPoster;
