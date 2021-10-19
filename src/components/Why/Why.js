import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Why = (props) => {

    const {name, description} = props.why;
    return (
        <div>
            <Col>
      <Card>
        
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Col> 
        </div>
    );
};

export default Why;