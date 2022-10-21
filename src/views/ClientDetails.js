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
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4"> </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="3">
                      <Form.Group style={{ marginLeft: '20px', marginRight: '20px' }}>
                      <label>Title</label>
                        <input class="form-control" placeholder="e.g. Mr." list="titleName" type="text" id="title" onClick="myFunction()" />
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
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group style={{ marginLeft: '20px', marginRight: '20px' }}>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Enter First Name "
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group style={{ marginLeft: '20px', marginRight: '20px' }}>
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
                    
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group style={{ marginLeft: '20px', marginRight: '30px' }}>
                        <label>Email Address</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Enter email e.g. you@gmail.com"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group style={{ marginLeft: '20px', marginRight: '30px' }}>
                        <label>Contact Number</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Enter contact e.g. 0081 xxxxx"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <Form.Group style={{ marginLeft: '20px', marginRight: '20px'}} > 
                      <br></br>
                      <label>Notes</label>
                      <br></br>
                      <textarea class="form-control" type="text" style={{ height: '90px' }}/>
                      </Form.Group>
                    </Col>
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
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default User;
