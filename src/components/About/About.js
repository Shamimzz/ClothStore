import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';

import bg from './foodbanner.jpg';

const About = () => {
    return (
      <div>
        <div className="pt-5 pb-5 text-center">
          <div className="section-title">
             <h2 className="fs-1" >POPULAR GOODS</h2>
             <div class="title-icon">
               {/* <img class="mb-10" src={title} alt="title"/> */}
             </div>
             <p className="">Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin.</p>
          </div>
        </div>
          <div className="About-banner pb-5">
          <div className="Extra-course container">
         <Row xs={1} md={4} className="g-4 mt-4 text-center">
          <Col>
           <Card className="p-4 shadow-sm" text="dark">
              <div className="m-auto fs-3 text-success">
                <img className="logoImg" src={bg} alt="" srcset="" />
              </div>
              <h4 className="text-bold fs-3 text-warning">Fast Food</h4>
              <Card.Text>Your daily values may be higher or lower depending on your calorie needs.</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4 shadow-sm">
              <div className="m-auto fs-3 text-success">
              <img className="logoImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCNEb4uT2PpJUkJjSC2PXe4TEZz7reacsZZyt8Tpi4C9B5DcqFum3q5qXMmgHbQlEH5A&usqp=CAU" alt="" srcset="" />
              </div>
              <h4 className="text-bold fs-3 text-warning">Hot Pizza</h4>
              <Card.Text>Find hot pizza stock images in HD and millions of other royalty-free stock.</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4" text="dark">
              <div className="m-auto fs-3 text-success">
              <img className="logoImg" src="https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/army-stew/AFN_army_stew_main_image1.jpg.transform/desktop-img/img.jpg" alt="" srcset="" />
              </div>
              <h4 className="text-bold fs-3 text-warning">Asian Food</h4>
              <Card.Text>Asian Food Network, home of authentic and delicious asian food. Asian Food.</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4" text="dark">
              <div className="m-auto fs-3 text-success">
              <img className="logoImg" src="https://www.merakilane.com/wp-content/uploads/2019/12/The-Raw-Food-Diet_-7-Day-Meal-Plan-for-Beginners.jpg" alt="" srcset="" />
              </div>
              <h4 className="text-bold fs-3 text-warning">Raw Meal</h4>
              <Card.Text>Raw Organic Meal uniquely combines the goodness of Organic plant based.</Card.Text>
            </Card>
           </Col>
         </Row>
        </div>
         </div>
      </div>
    );
};

export default About;