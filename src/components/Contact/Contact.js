import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, FormControl, Row } from 'react-bootstrap';
import './Contact.css';

// Font Awesome.
import { FcCallback } from "react-icons/fc";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


//Showing Contact from.
const Contact = () => {
    return (
      <div className="contact">
        <div className="container pt-5 pb-5">
            <Row className="g-4">
                <div className="row mt-4 mb-4">
                   <h4 className="after mt-4 mb-4 text-center m-auto fs-2 w-50">BeFoody Press</h4>
                   <p className="w-75 m-auto mb-4">We want your input: Questions, bug reports, complaints, praise, feature requests — every little bit helps. Let us know what we can do to improve Pathao.</p>
                </div>
                <Col className="p-4 shadow-lg m-3 text-left">
                   <div className="p-3 m-2">
                      <p className=" text-decoration-none" ><h5>Make a Call</h5> <FcCallback/><span className="text-darger"> +68 345 5902</span></p>
                   </div>
                   <div className="p-3 m-2">
                     <p className=" text-decoration-none" ><h5>Email Us</h5> <MdEmail />  info@yourdomain.com</p>
                   </div>
                   <div className="p-3 m-2">
                      <p className=" text-decoration-none" ><h5>Location</h5> <FaAddressCard/> 2nd Floor, House 12, Road 2/3, Block F, Chairman Bari (Panir Pump 6), Banani, Dhaka</p>
                   </div>
                </Col>
                <Col className="p-4 shadow-lg m-3 text-left">
                     <div style={{ display: 'block', padding:30 }}>          
                     <Form className="">
                         <h3 className="text-center mb-2">Send your message</h3>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write Your Name*</h6> </Form.Label>
                         <Form.Control className="input" type="text" placeholder="Enter your full name"/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write Your email*</h6> </Form.Label>
                         <Form.Control className="input" type="email" placeholder="Enter your your email address"/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write your Message*</h6> </Form.Label>
                         <FormControl className="input" as="textarea" aria-label="With textarea"/>
                       </Form.Group>
                       <Button variant="info" to='/notfound' type="submit">
                         Submit
                       </Button>
                     </Form>
                    </div>
                </Col>             
            </Row>      
        </div>       
      </div>       
    );
};
export default Contact;