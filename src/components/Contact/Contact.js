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
        <div className="container mt-5 mb-5">
            <Row className="g-4">
                <div className="row">
                   <h4 className="after mt-4 mb-4 text-center m-auto fs-2 w-50">For more information about our Services, Get in touch</h4>
                   <p className="w-75 m-auto mb-4">Let your customers book an appointment effortlessly or find the right doctor in no time. It’s easy with MediClinic!Residency is a post-graduate period in which a doctor practices medicine under the specialty.</p>
                </div>
                <Col className="p-4 shadow-lg m-3 ">
                   <div className="p-3 m-2">
                      <p className="text-dark text-decoration-none" ><h5>Make a Call</h5> <FcCallback/>  +68 345 5902</p>
                   </div>
                   <div className="p-3 m-2">
                     <p className="text-dark text-decoration-none" ><h5>Email Us</h5> <MdEmail />  info@yourdomain.com</p>
                   </div>
                   <div className="p-3 m-2">
                      <p className="text-dark text-decoration-none" ><h5>Location</h5> <FaAddressCard/>  123 Fifth Floor East, New York.</p>
                   </div>
                </Col>
                <Col className="p-4 shadow-lg m-3">
                     <div style={{ display: 'block', padding:30 }}>          
                     <Form className="">
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write Your Name</h6> </Form.Label>
                         <Form.Control className="input" type="text" placeholder="Enter your full name"/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write Your email</h6> </Form.Label>
                         <Form.Control className="input" type="email" placeholder="Enter your your email address"/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write your Message</h6> </Form.Label>
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
    );
};
export default Contact;