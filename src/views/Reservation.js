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

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReservationDetails from "views/ReservationDetails.js";
import ClientDetails from "views/ClientDetails.js";
import test from "views/test.js";

function tabDetails() {
  return (
    
    <Container fluid>
      <Row>
          <Col md="12">
            <Card>
            <Card.Header>
                <Card.Title as="h4">Add new reservation</Card.Title>
                <p className="card-category">
                  <br></br>
                  Fill in the form below to add a new reservation.
                  <br></br>
                  <br></br>
                  <br></br>
                </p>
              </Card.Header>
              
                  <Tabs
                    defaultActiveKey="home"
                    className="mb-3"
                  >
                    <Tab eventKey="home" title="Reservation Details" data-tab="tabs-1">
                      <ReservationDetails />
                    </Tab>
                    <Tab eventKey="profile" title="Client Details" data-tab="tabs-2">
                    <ClientDetails />
                    </Tab>
                  </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
}

export default tabDetails;
