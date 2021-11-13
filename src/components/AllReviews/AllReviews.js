import React, { useEffect, useState} from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import "./AllReviews.css";
import { HashLink as Link } from 'react-router-hash-link';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SingleReview from './SingleReview/SingleReview';


const AllReviews = () => {
   const [reviews, setReviews] = useState([]);

   useEffect( () => {
     fetch('https://grisly-werewolf-53088.herokuapp.com/reviews')
     .then(res => res.json())
     .then(data=> {
         setReviews(data);
         console.log(data);
     })
   })


    return (
      <div className="bgColor pt-5 pb-5">
        <div className="container pt-5">
             <div className="text-center">
                 <h2>ALl Reserved {reviews.length}</h2>
                 <h3 className="sectionTitle">What Our Clients are Saying?</h3>
            </div>

          <Carousel className="bgColor">
              <Carousel.Item interval={1500} className="imgDiv">
                {/* <img 
                  className="carouselImg"
                  src="https://i.ibb.co/MnMBnB4/cover1.jpg"
                  alt="First slide"
                /> */}
                <Carousel.Caption className="caption carousel-contet">
                   <h1 class="text-white">SHOPPING IS MY FIRST</h1>
                   <h1 class=" hero">CHOICE</h1>
                   <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
                    <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500} className="imgDiv">
                {/* <img
                  className="carouselImg"
                  src="https://i.ibb.co/MZ5wB4s/cover2.jpg"
                  alt="Second slide"
                /> */}
                <Carousel.Caption className="caption carousel-contet">
                   <h1 class="text-white">THE CLOTH EVERYONE</h1>
                   <h1 class="heroText">DESIRE</h1>
                   <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
                   <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500} className="imgDiv">
                {/* <img
                  className="carouselImg"
                  src="https://i.ibb.co/4WQsy6H/cover3.jpg"
                  alt="Third slide"
                /> */}
                <Carousel.Caption className="caption carousel-contet">
                  <h1 class="text-white">SHOPPING MAKES ME</h1>
                   <h1 class="hero">HAPPY</h1>
                   <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
                   <Link to="/products" class="text-white btn btn-black">SHOP NOW</Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500} className="imgDiv">
                {/* <img
                  className="carouselImg"
                  src="https://i.ibb.co/HqLNL6q/cover4.jpg"
                  alt="Third slide"
                /> */}
                <Carousel.Caption className="caption carousel-contet">
                   <h1 class="text-white">THE WATCH EVERYONE</h1>
                   <h1 class="heroText">DESIRE</h1>
                   <p className="carousel-contet">Drag and drop anywhere you want and start uploading your images now</p>
                  <Link to="/products" class="btn btn-black heroBtn">SHOP NOW</Link>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

        </div>
      </div>
    );
};

export default AllReviews;




                    



                                    //   <Row xs={1} md={2} className="g-4">
                                    //    {reviews.map((pd, idx) => (
                                    //       <Col className="m-3">
                                    //         <Card className="p-3">
                                    //           <Card.Img className="circle" variant="top" src={pd?.img} />
                                    //           <Card.Body>
                                    //             <Card.Title>{pd?.title}</Card.Title>
                                    //             <Card.Text>
                                    //              {pd?.des}
                                    //             </Card.Text>
                                    //             <Card.Text>
                                    //              {pd?.price}
                                    //             </Card.Text>
                                    //           </Card.Body>
                                    //         </Card>
                                    //       </Col>
                                    //     ))}
                                    //   </Row>




// reviews.length === 0 ?
// <div class="item">
//     <div class="shadow-effect">
//         <img class="img-circle"/>

//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
//     </div>
//     <div class="testimonial-name">
//         <h5>Rajon Rony</h5>
//         <small>ITALY</small>
//     </div>
// </div> :












// {/* <h2>ALl Reserved {reviews.length}</h2>
// <Carousel>

// <Row xs={1} md={2} className="g-4">
//  {reviews.map((pd, idx) => (
//   <Carousel.Item>
//      {/* <img
//        className="d-block w-100"
//        src={pd?.img}
//        alt="First slide"
//      /> */}
//      <Carousel.Caption>
//        <h5 className="text-black"> className="text-black"{pd?.title}</h5>
//        <p>{pd?.email}</p>
//        <p className="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//      </Carousel.Caption>
//    </Carousel.Item>
//      ))} 
//   </Row> 
// </Carousel> */}









// <Row xs={1} md={2} className="g-4">
//   {Array.from({ length: 4 }).map((_, idx) => (
//     <Col>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}
// </Row>