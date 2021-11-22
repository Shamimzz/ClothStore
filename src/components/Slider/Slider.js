import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Slider.css';



const Slider = () => {

    return (
      <div className="slider">
       <Carousel fade>
        <Carousel.Item interval={1500} className="imgDiv">
          <img 
            className="carouselImg"
            src="https://i.ibb.co/qy3CT2X/cover2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption carousel-contet">
             <h1 class="text-white">SHOPPING IS MY FIRST</h1>
             <h1 class=" hero">CHOICE</h1>
             <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
              <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="imgDiv">
          <img
            className="carouselImg"
            src="https://i.ibb.co/4T9xHh1/slider2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caption carousel-contet">
             <h1 class="text-white">THE CLOTH EVERYONE</h1>
             <h1 class="heroText">DESIRE</h1>
             <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
             <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="imgDiv">
          <img
            className="carouselImg"
            src="https://i.ibb.co/Jy4XGxs/cover5.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="caption carousel-contet">
            <h1 class="text-white">SHOPPING MAKES ME</h1>
             <h1 class="hero">HAPPY</h1>
             <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
             <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="imgDiv">
          <img
            className="carouselImg"
            src="https://i.ibb.co/r6cjYcJ/cover1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="caption carousel-contet">
             <h1 class="text-white">CHOOSE YOUR BEST</h1>
             <h1 class="heroText">PRODUCTS</h1>
             <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
            <Link to="/products" class="btn btn-black heroBtn">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     </div>
    );
};

export default Slider;
