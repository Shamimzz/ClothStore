import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

import banner from './slider-courier-mask.png';

// Banner part
const Banner = () => {

    return (
        <div className="banner">
           <div className="row pt-5 pb-5" >
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
              <div className="heroText text-Center">
                  <h4 className="Express">Express</h4>
                  <h1 className="Care">Home Delivery</h1>
                  <p className="para">Let your kids get messy and play with their food. Something as simple as spreading peanut butter or another nut butter on a whole wheat English muffin and then creating a smiley face or another decoration with nutrient-rich sliced bananas.</p>
                 <Button to="/notfound" as={Link} className="search-btn text-decoration-none">View Details</Button>
             </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                  <img className="img-fluid" src={banner} alt="" srcset="" />
              </div>
           </div>
        </div>
    );
};

export default Banner; 

// banner
// https://codepen.io/Akimzzy/pen/JjGKMoX