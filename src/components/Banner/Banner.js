import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../Images/banner (1).png'
import image2 from '../../Images/banner (2).png'
import image3 from '../../Images/banner (3).png'
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
    <Carousel.Caption className="bannerimage">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Link to="/appointment">Book Now</Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;