import React from "react";

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
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Reservations List</Card.Title>
                <p className="card-category">
                  <br></br>
                Below you can see all the reservations and enquiries made. Click on any of them to view and edit it. Using the buttons you can filter the reservation by their status. Use the advance search to quickly locate a reservation.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">From date/time</th>
                      <th className="border-0">People</th>
                      <th className="border-0">Table</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">  </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>31-10-2022, 13:00</td>
                      <td>4</td>
                      <td>5</td>
                      <td>Juan Dela Cruz</td>
                      <td>juan@gmail.com</td>
                      <td>Confirmed</td>
                      <td>   </td>
                    </tr>
                    <tr>
                    <td>2</td>
                      <td>31-10-2022, 16:00</td>
                      <td>3</td>
                      <td>4</td>
                      <td>Pepe Dela Cruz</td>
                      <td>pepe@gmail.com</td>
                      <td>Confirmed</td>
                      <td>   </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>31-10-2022, 13:00</td>
                      <td>4</td>
                      <td>3</td>
                      <td>Maria Theresa</td>
                      <td>marie@gmail.com</td>
                      <td>Confirmed</td>
                      <td>   </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>31-10-2022, 13:00</td>
                      <td>4</td>
                      <td>2</td>
                      <td>Dre Payns</td>
                      <td>payns@gmail.com</td>
                      <td>Confirmed</td>
                      <td>   </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>31-10-2022, 13:00</td>
                      <td>4</td>
                      <td>1</td>
                      <td>Jeffrey Marty</td>
                      <td>meme@gmail.com</td>
                      <td>Confirmed</td>
                      <td>   </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>31-10-2022, 17:00</td>
                      <td>4</td>
                      <td>1</td>
                      <td>Marley Marty</td>
                      <td>marley@gmail.com</td>
                      <td>Confirmed</td>
                      <td>   </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default TableList;
