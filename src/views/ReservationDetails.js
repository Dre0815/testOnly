import React from "react";
import 'bootstrap';
import './dateTimePicker';
import $ from 'jquery';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Label } from "reactstrap";
 
function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group style={{marginLeft: '20px', marginRight: '30px' }}>
                        <label>Schedule (From date/time) </label>
                        <input class="form-control" id="dateFrom" type="datetime-local" placeholder="Select Date" />
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group style={{marginLeft: '20px', marginRight: '30px' }}>
                        <label>Schedule (To date/time)</label>
                        <input class="form-control" id="dateTo" type="datetime-local" placeholder="Select Date" />
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>  
                  <Col className="px-1" md="4">
                      <Form.Group style={{ marginLeft: '30px', marginRight: '30px' }}>
                        <label>People (Adult)</label>
                        <input class="form-control" type="number" id="pAdult" />
                            
                      </Form.Group>
                    </Col>
                    
                    <Col className="px-1" md="4">
                      <Form.Group style={{ marginLeft: '30px', marginRight: '30px' }}>
                        <label>People (Child)</label>
                        <input class="form-control" type="number" id="pChild" />
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group style={{ marginLeft: '30px', marginRight: '30px' }}>
                        <label>People (Infant)</label>
                        <input class="form-control" type="number" id="infant" />
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group style={{ marginLeft: '30px', marginRight: '30px'}} >
                        <label>Assign Table Seat</label>
                        <input class="form-control" list="tableSeat" type="text" id="myTableSeat" onClick="myFunction()" />
                            <datalist id="tableSeat">
                                <option value="Counter Table - 1 Person"/>
                                <option value="Two Tables - 2 to 4 Persons"/>
                                <option value="Long Table - 14 Persons"/>
                            </datalist>        
                      </Form.Group>
                    </Col>
                    
                    <Col className="px-1" md="6">
                      <Form.Group style={{ marginLeft: '30px', marginRight: '30px'}} >
                      <label>Room Number</label>
                        <br></br> 
                        <input class="form-control" type="text" id="room" />
                      </Form.Group>
                    </Col>
                    
                    <Col className="pr-1" md="4">
                      <Form.Group style={{ marginLeft: '30px', float: 'Left'}} > 
                        <button type="button" class="addTable">Add Table</button>
                      </Form.Group>
                    </Col>

                    {/*<Col className="pr-1" md="4">
                      <Form.Group style={{ marginLeft: '50px', float: 'Left'}} > 
                        <label >1x</label>
                      </Form.Group>
                    </Col>*/}

                  </Row>
                  <br />
                  <Button class="alignleft" className="btn-fill pull-right clearfix" id="clear" type="button" variant="info"
                  style={{marginLeft: '25px', marginRight: '25px', width: '100px', float: 'right'}}>
                    Cancel
                  </Button>

                  <Button class="alignleft" className="btn-fill pull-right clearfix" id="submit" type="submit" variant="info"
                  style={{marginLeft: '25px', marginRight: '25px', width: '100px', float: 'right'}}>
                    Save
                  </Button>
                  
                    
                  <div className="clearfix"></div>
                </Form>
                
                <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
                
              
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default User;
