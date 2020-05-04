import React, { Component, useContext } from "react";
import Table from "../Table";
import { UsersContext } from "../../Context";
import { Container, Row, Col, Button } from "react-bootstrap";
import Timer from "../Timer";
import ScoreRegisterModal from "../ScoreRegister";
export default class Level_2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            left:true,
            right:false,
            error:false
        }
    }
    handleOnClick=(event)=>{
        console.log("Hello")
        const btnType=event.target.name
        if(this.state.left===true && btnType==='left')
        {
            this.setState({left:false,right:true,error:false})
            this.context.updateScore()
        }
        else if (this.state.right === true && btnType === 'right') {
            this.setState({ left: true, right: false ,error:false})
            this.context.updateScore()
        }
        else{
            this.setState({error:true})
        }
    }
    handleGameOver=()=>{
        this.setState({
            left: true,
            right: false,
            error: false})
        this.context.stopGameFunc();
    }

    static contextType = UsersContext;
    render() {
        const errorWarning=this.state.error?"orange":"azure";
        const tableData = this.context.generateTableData(2);
        return (
            <React.Fragment>
                <Container style={{backgroundColor:errorWarning}}>
                    <Row>
                        <Col className="mx-auto">
                            <h3 className="mt-3 text-center">Left Right Left Right</h3>
                        </Col>
                    </Row>
                    {this.context.startGame && (
                        <Row>
                            <Col className="text-center">
                                <Timer
                                    minutes={0}
                                    stopGame={this.context.stopGame}
                                    stopGameFunc={this.handleGameOver}
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
                    <Row className="d-flex">
                        <Col className="text-center">
                            {console.log(this.state.left)}
                            <Button variant={this.state.left?"success":"danger"} name="left"  onClick={this.handleOnClick}>
                                {this.context.startGame ? "Left" : "Start"}
                            </Button>
                        </Col>
                        <Col className="text-center">
                            <Button variant={this.state.right ? "success" : "danger"}  name="right" onClick={this.handleOnClick}>
                                {this.context.startGame ? "Right" : "Not me"}
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} lg={6} className="mx-auto">
                            <Table title={"Leader Board"} data={tableData} />
                        </Col>
                    </Row>
                </Container>
                <ScoreRegisterModal level={2} />
            </React.Fragment>
        );
    }
}
