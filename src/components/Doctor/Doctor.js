import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = (props) => {
    const {name, description, img} = props.doctor;
    return (
        <>
           <Col>
           <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h6>{description}</h6>
          <Link to="/appointment">Book Appointment</Link>
        </Card.Body>
      </Card>
    </Col>  
        </>
    );
};

export default Doctor;