import React from "react";
import { Table } from 'react-bootstrap'
export default function LevelTable(props) {
    const tableRows = props.data.map(user => (<tr><td>Level {user.level}</td><td>{user.user_name}</td><td>{user.score}</td></tr>))
    return (
        <React.Fragment>
            <h4>{props.title}</h4>
            <Table striped bordered hover variant="dark">
                <tr>
                    <th>Level</th>
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
