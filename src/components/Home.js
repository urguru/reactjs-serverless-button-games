import React from "react";
import { useContext } from "react";
import { UsersContext } from "../Context";
import Table from "../components/Table";
import LevelTable from "../components/LevelTable"
import { Container,Row ,Col} from "react-bootstrap";
export default function Home() {
  const { generateTotalsTableData, generateLevelWiseTableData}=useContext(UsersContext)
  const totalTableData = generateTotalsTableData()
  const levelWiseTableData=generateLevelWiseTableData()
  return (
    <React.Fragment>
     <Container className='py-5 '>
        <Row className="align-items-center">
          <Col  sm={12} md={6}> <LevelTable data={levelWiseTableData} title={"Level Toppers"}/></Col>
          <Col sm={12} md={6}><Table data={totalTableData} title={"Overall Highest Score"}/></Col>
       </Row>
     </Container>
    </React.Fragment>
  )
}

