import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Maps() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Table Map</Card.Title>
                <p className="card-category">
                  <br></br>
                Table locations
                </p>
              </Card.Header>
              <Card.Body>
                <div className="reservation-line">
                  <h2>
                    <span></span>
                    Under Maintenance
                  </h2>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Maps;
