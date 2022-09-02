import React, { useEffect, useState } from "react";
import { getPostersApi } from "../../APIs/getAllPosters";
import SearchPoster from "../Search/SearchPoster";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../Card/CardComponent";

const ShowAllPosters = () => {
  const [posters, setPosters] = useState([]);
  useEffect(() => {
    getPostersApi().then((res) => {
      setPosters(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col md={4}>
            <SearchPoster setPosters={setPosters} />
          </Col>
          <Col md={8}>
            {posters.map((poster) => (
              <CardComponent poster={poster} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ShowAllPosters;
