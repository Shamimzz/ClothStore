import React, { useEffect, useState} from 'react';
import "./AllReviews.css";
import { HashLink as Link } from 'react-router-hash-link';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SingleReview from './SingleReview/SingleReview';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';


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
        <div className="container">
             <div className="text-center">
                 <h1 class="text-white"># REVIEWS</h1>
                 {/* <h5 className="text-white p-2">What Our Clients are Saying?</h5> */}
            </div>

          <Carousel className="bgColor">

          {reviews.map((pd, index)=>(  
              <Carousel.Item interval={1500} className="imgDiv">

                <Carousel.Caption className="caption carousel-contet bow-shadow-lg border-2">
                    <h4 className="text-warning">{pd?.name}</h4>
                    <h2 class="text-white">MY FIRST CHOISE IS CLOTHSTORE</h2>
                    <h3 class="hero">Absolutely Happy!</h3>
                   <p className="carousel-contet">{pd?.comments}</p>
                   <Rating
                      className="text-warning"
                      initialRating={pd?.rating}
                      readonly
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                    />
                </Carousel.Caption>
              </Carousel.Item>
              ))}

            </Carousel>
        </div>
      </div>
    );
};

export default AllReviews;
