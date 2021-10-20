import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../Images/banner (1).png'
import image2 from '../../Images/banner (2).png'
import image3 from '../../Images/banner (3).png'
import './Banner.css'
const Banner = () => {
    return (
        <>
         <Carousel>
  <Carousel.Item className="bannerimage">
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption className="bannerimage ">
    <div className="text-color">
      <h3 >We Make Your Smile Healthy</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
      <Link to="/appointment">Book Now</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="bannerimage">
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="text-color">
      <h3 >We Make Your Smile Healthy</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
      <Link to="/appointment">Book Now</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="text-color">
      <h3 >We Make Your Smile Healthy</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
      <Link to="/appointment">Book Now</Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;