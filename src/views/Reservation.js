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

function Reservation() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add new reservation</Card.Title>
                <p className="card-category">
                  <br></br>
                Fill in the form below to add a new reservation.
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

export default Reservation;
