import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

// import {banner} from '../images/slider-courier-mask.png';

// Banner part
const Banner = () => {
    const banner = 'http://gomoto.like-themes.com/wp-content/uploads/2020/04/slider-courier-mask.png';
    return (
        <div className="banner">
           <div className="row pt-5 pb-5" >
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
              <div className="heroText">
                  <h4 className="Express">Express</h4>
                  <h1 className="Care">Home Delivery</h1>
                  <p className="para">Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcuUt nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
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