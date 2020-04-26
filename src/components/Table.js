import React from "react";
import {Table} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
export default function TableData(props) {
  let index=1
  const tableValues=props.data.filter(user=>(typeof(user)!=='undefined'))
const tableRows=tableValues.map(user=>(<tr><td>{index++}</td><td>{user.user_name}</td><td>{user.score}</td></tr>))
  return (
    <React.Fragment>
      <h4 className='mt-5'>{props.title}</h4>
      <Table striped bordered hover variant="dark">

        <tr>
          <th>Rank</th>
          <th>User Name</th>
          <th>Score</th>
        </tr>
        {
          tableRows
        }
      </Table>
    </React.Fragment>
  );
}
