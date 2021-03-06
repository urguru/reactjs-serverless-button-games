import React from "react";
import { Jumbotron, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ComingUp() {
  return (
    <Jumbotron className="p-5 m-2 rounded-lg" fluid>
      <Container>
        <h1>Thanks for Coming</h1>
        <p>
          We are finding different ways to stop you from being bored and here is
          one such effort that is in progress
        </p>
        <Row>
          <Col xs={5}>
            <Button variant="dark">
              <Link to="/level_1" className="text-light">
                Play Level 1
              </Link>
            </Button>
          </Col>
          <Col xs={5}>
            <Button variant="dark">
              <Link to="/level_2" className="text-light">
                Play Level 2
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
