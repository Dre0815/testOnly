import React from "react";

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

function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="2">
                      <Form.Group style={{ marginLeft: '0px', marginRight: '0px' }}>
                      <label>Title</label>
                        <input class="form-control" placeholder="e.g. Mr." list="titleName" type="text" id="title" />
                            <datalist id="titleName">
                                <option value="Mr."/>
                                <option value="Ms."/>
                                <option value="Mrs."/>
                                <option value="Dr."/>
                                <option value="Rev"/>
                                <option value="Others"/>
                            </datalist>
                      </Form.Group>
                    </Col>
                    <Col md="5">
                      <Form.Group style={{ marginLeft: '0px', marginRight: '0px' }}>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Enter First Name "
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="5">
                      <Form.Group style={{ marginLeft: '0px', marginRight: '0px' }}>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Enter Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md="6">
                      <Form.Group style={{ marginLeft: '0px', marginRight: '0px' }}>
                        <label>Email Address</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="e.g. you@gmail.com"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group style={{ marginLeft: '0px', marginRight: '0px' }}>
                        <label>Contact Number</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="e.g. 0081 xxxxx"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <Form.Group style={{ marginLeft: '0px', marginRight: '0px' }}> 
                      <br></br>
                      <label>Notes</label>
                      <br></br>
                      <textarea class="form-control" type="text" style={{ height: '90px' }}/>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <br />
                  <Button class="alignleft" className="btn-fill pull-right clearfix" id="clear" type="button" variant="info"
                  style={{marginLeft: '10px', marginRight: '10px', width: '100px', float: 'right'}}>
                    Cancel
                  </Button>

                  <Button class="alignleft" className="btn-fill pull-right clearfix" id="submit" type="submit" variant="info"
                  style={{marginLeft: '10px', marginRight: '10px', width: '100px', float: 'right'}}>
                    Save
                  </Button>

                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default User;
