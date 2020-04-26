import React, { Component, useContext } from "react";
import Table from "../Table";
import { UsersContext } from "../../Context";
import { Container, Row, Col, Button } from "react-bootstrap";
import Timer from "../Timer";
import ScoreRegisterModal from "../ScoreRegister";
export default class Level_1 extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = UsersContext;
  render() {
    const tableData = this.context.generateTableData(1);
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className="mx-auto">
              <h3 className="mt-3 text-center">How Fast can you tap</h3>
            </Col>
          </Row>
          {this.context.startGame && (
            <Row>
              <Col className="text-center">
                <Timer
                  minutes={0}
                  stopGame={this.context.stopGame}
                  seconds={5}
                />
              </Col>
            </Row>
          )}
          <Row>
            <Col className="mx-auto">
              <h1 className="text-center display-1">{this.context.score}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button variant="dark" onClick={this.context.updateScore}>
                {this.context.startGame ? "Tap" : "Start"}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={10} lg={6} className="mx-auto">
              <Table title={"Leader Board"} data={tableData} />
            </Col>
          </Row>
        </Container>
        <ScoreRegisterModal level={1} />
      </React.Fragment>
    );
  }
}
