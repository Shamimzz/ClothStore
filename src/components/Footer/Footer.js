import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Font Awesome useing.
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";



// Global Footer .................... 
const Footer = () => {
    return (
        <div>
        <section id="footer">
          <div class="footer-top">
            <div class="container pt-5 pb-5">
              <div class="row">
                <div class="col-lg-4 col-md-6 footer-contact">
                  <h3 className="text-light">ClothStore</h3>
                  <div>
                    <p>A108 Saver Street</p>
                    <p> Dhaka, NY 535022</p>
                    <p>Dhaka, Bangladesh </p>
                    <p><strong>Phone:</strong> +88 5589 55488 55</p>
                    <p> <strong>Email:</strong> info@example.com</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 footer-links">
                  <h3 className="text-light">Get In Touch</h3>
                  <ul>
                    <li><Link to="*">Our Services</Link></li>
                    <li><Link to="*">Privacy Policy</Link></li>
                    <li><Link to="*">Disclamer</Link></li>
                    <li><Link to="*">Terms of service</Link></li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-6 footer-links">
                  <h3 className="text-light">Our Services</h3>
                  <ul>
                    <li><Link to="*">Cloth Reviews</Link></li>
                    <li><Link to="*">Cloth Qualities</Link></li>
                    <li><Link to="*">Service Management</Link></li>
                    <li><Link to="*">Traditions Cloth</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      
          <div class="container d-md-flex justify-content-between py-4">
            <div class="mr-md-auto text-center text-md-left">
              <div class="copyright">
                &copy; Copyright <strong><span>ClothStore</span></strong>. All Rights Reserved
              </div>
              <div class="credits">
                Designed by <a href="https://github.com/Shamimzz">Shamimzz</a>
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="www.twitter.com" class="twitter"> <FaTwitter /></a>
              <a href="www.facebook.com" class="facebook"> <FaFacebook/></a>
              <a href="www.instagram.com" class="instagram"><BsInstagram/></a>
              <a href="www.linkdin.com" class="linkedin"><AiFillLinkedin /></a>
            </div>
          </div>
        </section>
     </div>
    );
};

export default Footer;