import React, { useState,useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    return (
        <div className="m-2 background">
            <div className="container ">
            <h1 className="p-3">Meet Our Doctors</h1>
           <Row md={3}>
            {
                doctors.map(doctor=><Doctor doctor={doctor}></Doctor>)
            }
           </Row>
           
        </div>
        </div>
    );
};

export default Doctors;