import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Slider.css';



const Slider = () => {



  // https://ibb.co/VV2wVwZ
  // https://ibb.co/bQRwbZP
  // https://ibb.co/ZdZHsn0
  // https://ibb.co/g3P6Q65

  // https://ibb.co/BBH4HbB
  // https://ibb.co/tXcTDfH


    return (
      <div className="slider">
       <Carousel>
        <Carousel.Item interval={1500} className="imgDiv">
          <img 
            className="carouselImg"
            src="https://i.ibb.co/MnMBnB4/cover1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption carousel_about">
             <h1 class="text-white">THE WATCH EVERYONE</h1>
             <h1 class=" mx-auto hero">DESIRE</h1>
             <p className="carousel_about">A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
             <Link to="/products" class="banner_btn btn-black">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="imgDiv">
          <img
            className="carouselImg"
            src="https://i.ibb.co/MZ5wB4s/cover2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caption carousel_about">
             <h1 class="text-white">THE WATCH EVERYONE</h1>
             <h1 class=" mx-auto">DESIRE</h1>
             <p className="carousel_about">A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
             <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="imgDiv">
          <img
            className="carouselImg"
            src="https://i.ibb.co/4WQsy6H/cover3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="caption carousel_about">
            <h1 class="text-white">THE WATCH EVERYONE</h1>
             <h1 class=" mx-auto hero">DESIRE</h1>
             <p className="carousel_about">A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
             <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} className="imgDiv">
          <img
            className="carouselImg"
            src="https://i.ibb.co/HqLNL6q/cover4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="caption carousel_about">
             <h1 class="text-white">THE WATCH EVERYONE</h1>
             <h1 class=" mx-auto">DESIRE</h1>
             <p className="carousel_about">A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
            <Link to="/products" class="btn btn-black heroBtn">SHOP NOW</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     </div>
      


     /* <div class="carousel slide carousel-fade">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="" aria-label="Slide 1" aria-current="false">
      </button><button type="button" data-bs-target="" aria-label="Slide 2" aria-current="true" class="active">
        </button>
        <button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false">
          </button>
          </div>
          <div class="carousel-inner">
            <div class="carousel_about carousel-item">
              <img class="d-block w-100  carouselImg" src="https://i.ibb.co/Dr6ZP53/slider1.jpg" alt="First slide"/>
                <div class="carousel_about carousel-caption">
                   <h1 class="text-white">THE WATCH EVERYONE</h1>
                   <h1 class=" mx-auto">DESIRE</h1>
                   <p>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
                   <a href="/all_watch">
                       <p><div role="group" class="banner_btn btn-group">SHOP NOW</div></p>
                   </a>
                  </div>
               </div>
                  <div class="active carousel-item">
                      <img class="d-block w-100  carouselImg" src="https://i.ibb.co/tzpg6YL/slider2.jpg" alt="Second slide"/>
                      <div class="carousel_about carousel-caption">
                        <h1 class="text-white"> AN EXTRAORDINARY</h1>
                        <h1 class=" mx-auto">CLASSIC</h1>
                        <p>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
                        <a href="/all_watch">
                          <p><div role="group" class="banner_btn btn-group">SHOP NOW</div></p>
                          </a>
                          </div>
                  </div>
                   <div class="carousel-item">
                            <img class="d-block w-100 carouselImg" src="https://i.ibb.co/Cz5QqqP/slide-3.jpg" alt="Third slide"/>
                              <div class="carousel_about carousel-caption">
                                <h1 class="text-white">WATCH FOR HIGH-TECH</h1>
                                <h1 class=" mx-auto">PEOPLE</h1>
                                <p>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
                                  <a href="/all_watch"><p>
                                     <div role="group" class="banner_btn btn-group">SHOP NOW</div>
                                  </p></a>
                                  </div>
                                  </div>
                                  </div>
                                  <a class="carousel-control-prev" role="button" tabindex="0"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a>
                                  <a class="carousel-control-next" role="button" tabindex="0"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a>
                                  </div> */



    );
};

export default Slider;
