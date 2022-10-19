import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bullet-list-67 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Reservations</p>
                      <Card.Title as="h4">0</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Today
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bullet-list-67 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">New Reservations</p>
                      <Card.Title as="h4">0</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Today
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper-2 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Booked</p>
                      <Card.Title as="h4">0</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-layers-3 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tables Remaining</p>
                      <Card.Title as="h4">0</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Available Tables</Card.Title>
                <p className="card-category">Total 0 appointments made</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <p>  </p>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Table</th>
                      <th className="border-0">Capacity</th>
                      <th className="border-0">Booked</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>4</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>4</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>4</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>4</td>
                      <td>Available</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>4</td>
                      <td>Booked</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>4</td>
                      <td>Booked</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                
                <hr></hr>
                <div className="stats">
                  Page 1 2 3 4...
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4" class="alignleft">Latest Reservations
                  <p class="alignleft" className="card-category">You received 0 reservations today</p>
                </Card.Title>  
                  <p class="alignright"><button class="btn-social sharrre btn btn-viewSched"><a class="nav-link" href="/admin/icons">View Schedule</a></button></p>
                  
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Date and Time</th>
                      <th className="border-0">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>October 31, 2022</p>
                        <p>Confirmed</p>
                      </td>
                      <td>
                        <p>Juan Dela Cruz</p>
                        <p>From: 10/31/2022 : 13:00 To: 10/31/2022 : 15:00</p>
                        <p>People: 4</p>
                        <p>Table No.: 5</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>November 03, 2022</p>
                        <p>Confirmed</p>
                      </td>
                      <td>
                        <p>Pedro Cruz</p>
                        <p>From: 11/03/2022 : 13:00 To: 11/03/2022 : 15:00</p>
                        <p>People: 4</p>
                        <p>Table No.: 3</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                
                
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Montly Report</Card.Title>
                <p className="card-category">Weekly performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Day 1",
                        "Day 2",
                        "Day 3",
                        "Day 4",
                        "Day 5",
                        "Day 6",
                        "Day 7",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Test1 <i className="fas fa-circle text-danger"></i>
                  Test2 <i className="fas fa-circle text-warning"></i>
                  Test3
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Daily Performance</Card.Title>
                <p className="card-category">Last Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["40%", "20%", "40%"],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Test 1 <i className="fas fa-circle text-danger"></i>
                  Test 2 <i className="fas fa-circle text-warning"></i>
                  Test 3
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Update 1 hour ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Dashboard;
