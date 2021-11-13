import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './SingleReview.css';

const SingleReview = ({review}) => {
    const {user} = useAuth();
    console.log(user);

    const {comments, email, name, img, rating} = review;

    return (
        <div class="item">
        <div class="shadow-effect">
            <img class="img-circle" src={img}/>
            <h5>{name}</h5>
            <p>{email}</p>
            <p>{comments}</p>
            <small>{rating}</small>
         </div>
       </div>
    );
};

export default SingleReview;


