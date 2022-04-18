import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slides/slide-1.jpg';
import slide2 from '../../images/slides/slide-2.jpg';
import slide3 from '../../images/slides/slide-3.jpg';

const Slider = () => {
    return (
        <div className='container-fluid'>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
        <h3 className='fw-bolder'>Push Harder Than Yesterday If You Want A Different Tomorrow</h3>
        <p className='text-danger'>NO DAYS OFF</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
        <h3>Pain Is Weakness Leaving The Body</h3>
        <p className='text-danger'>EVERY WORKOUT COUNTS</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
        <h3>I Heard Them Talking Behind My Back</h3>
      <p className='text-danger'>DO YOUR BEST AND FORGET THE REST</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;