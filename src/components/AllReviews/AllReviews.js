import React, { useEffect, useState} from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import "./AllReviews.css";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SingleReview from './SingleReview/SingleReview';


const AllReviews = () => {
   const [reviews, setReviews] = useState([]);

   useEffect( () => {
     fetch('http://localhost:5000/reviews')
     .then(res => res.json())
     .then(data=> {
         setReviews(data);
         console.log(data);
     })
   })



    //Owl Carousel Settings
    const options = {
      loop: true,
      center: true,
      items: 1,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      nav: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          900: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  };



    return (
      <div className="bgColor pt-5 pb-5">
      <div className="container pt-5">
      <h2>ALl Reserved {reviews.length}</h2>
        
      <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h4 className="miniTitle text-center">TESTIMONIALS</h4>
                <div className="text-center ">
                    <h3 className="sectionTitle">What Our Clients are Saying?</h3>
                </div>
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                reviews.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            {/* <img class="img-circle" src={reviews.img} /> */}
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                      </div>  
                                      :
                                    reviews.map(review => <SingleReview
                                      review={review}
                                      key={review._id} 
                                     />
                                    )               
                            } 
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>


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