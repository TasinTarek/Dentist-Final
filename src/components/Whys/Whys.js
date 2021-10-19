import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Why from '../Why/Why';

const Whys = () => {
    const [whys, setWhys] = useState([])
    useEffect(()=>{
        fetch('why.json')
        .then(res => res.json())
        .then(data => setWhys(data))
    },[]);
    return (
        <div className="container">
                <h1 className="p-3">Why Choose Us</h1>
            <Row xs={1} md={3} lg={3} className="g-4">
                {
                    whys.map(why=> <Why why={why} ></Why>)
                }
            </Row>
        </div>
    );
};

export default Whys;