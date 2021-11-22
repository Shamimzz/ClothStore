import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    //  const handleTourBtn = (e) => {
    //       e.preventDefault();
    //       const target = e.target.getAttribute('href');
    //       const location = document.querySelector(target).offsetTop;
    //       window.scrollTo({
    //            left: 0,
    //            top: location - 80,
    //       })
    //  }
     return (
          <section id="cover">
               <Carousel fade indicators={false}>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src="https://i.ibb.co/7JsqWm8/slider-Good.png"
                              alt="First slide"
                         />
                         
                         <Carousel.Caption>
                         <h3 className="display-2 fw-bold text-white">SHOPPING IS MY FIRST</h3>
                              <h3 className="textDe">CHOICE</h3>
                              {/* <a href="#tours-section" className="btn btn-light px-4 py-2">Book Now</a> */}
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src="https://i.ibb.co/4T9xHh1/slider2.jpg"
                              alt="Second slide"
                         />
                         <Carousel.Caption>
                              <h3 className="display-2 fw-bold text-white">THE CLOTH EVERYONE</h3>
                              <h3 className="textDe">DESIRE</h3>
                              {/* <a href="#tours-section"  className="btn btn-light px-4 py-2">Book Now</a> */}
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src="https://i.ibb.co/Jy4XGxs/cover5.jpg"
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3 className="display-2 fw-bold text-white">SHOPPING MAKES ME</h3>
                              <h3 className="textDe">HAPPY</h3>
                              {/* <a href="#tours-section" className="btn btn-light px-4 py-2">Book Now</a> */}
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src="https://i.ibb.co/Jy4XGxs/cover5.jpg"
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3 className="display-2 fw-bold text-white">CHOOSE YOUR BEST</h3>
                              <h3 className="textDe">PRODUCTS</h3>
                              {/* <a href="#tours-section" className="btn btn-light px-4 py-2">Book Now</a> */}
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </section>
     );
};

export default Banner;
