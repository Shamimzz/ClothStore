import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


// Banner part
const Banner = () => {
    return (
        <div>
        <div className="banner d-flex flex-column justify-content-center" >
            <div className="heroText">
               <h4 className="Express">Express</h4>
               <h1 className="Care">Home Delivery</h1>
               <p className="para">Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
               <div >
                 <Button to="/notfound" as={Link} className="search-btn text-decoration-none">View Details</Button>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Banner; 