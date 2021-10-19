import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    
    return (

        
        <div className="container ">
            <h1 className="p-3">Our Services</h1>
        
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service=> <Service service ={service}></Service>)
            }
</Row>
        </div>
    );
};

export default Services;