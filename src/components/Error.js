import React from 'react'
import {Container,Row,Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import error from '../images/error.jpg'
export default function Error() {
    return (
      <Container fluid>
        <Row>
          <Image className='mx-auto'  src={error} thumbnail />
        </Row>
        <Row>
          <Link to="/" className="btn btn-primary btn mx-auto">
            Go Back To Home
          </Link>
        </Row>
        
      </Container>
    );
}
