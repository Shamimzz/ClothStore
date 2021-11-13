import React, { useEffect, useState} from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import "./AllReviews.css";

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

    return (
      <div className="container pt-5">
       <h2>ALl Reserved {reviews.length}</h2>
       <Carousel>

       <Row xs={1} md={2} className="g-4">
        {reviews.map((pd, idx) => (
         <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src={pd?.img}
              alt="First slide"
            /> */}
            <Carousel.Caption>
              <h5 className="text-black"> className="text-black"{pd?.title}</h5>
              <p>{pd?.email}</p>
              <p className="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
            ))} 
         </Row> 


      </Carousel>
      </div>
    );
};

export default AllReviews;



//      <img
// className="d-block sliderImg"
// src="https://lh3.googleusercontent.com/proxy/PNxaEn74BQpx1Kof7r1EWeI3uMcPR_Hc_YYyiZKdcSHNj3R-FbzHBk4SXP42Nzgv4shaewHj7YnoTS-5IYvcOw_ZxwgX0umhgqsAPVUf67pZuECrdCJ0ztG1_2TiUPVuxkqZW8ZMp744UPtXPrK1F3sW9VNsyjjqL19kJR2bMkPq1Nra6c4"
// alt="First slide"
// />
// <Carousel.Caption>
// <h3>First slide label</h3>
// <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// </Carousel.Caption> 





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