import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../hooks/useAuth';

import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import './Header.css';



const Header = () => {
   const {user, admin, handleLogOut} = useAuth();
   console.log(user);


    return (
        <div>
        <Navbar expand="lg">
           <Container>
             <Navbar.Brand className="img-brand" href="#home" to="/home" as={Link}><h3 className="cloth">ClothStore</h3></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
             <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-white">
               <Nav className="me-auto">
                  <Link to="/home" className="link">Home</Link>
                  <Link to="/products" className="link">Products</Link>
                  {/* <Link to="/blog" className="link">Blog</Link>  */}
                  <Link to="/blog" className="link">Life-Style</Link>
               </Nav>  
               <Navbar.Text className="">
                  <a href="#login" className="p-2 name text-white">{user?.email && user.displayName}</a>
                  <span>{user?.email && <img className="profileImg" src={user.photoURL} alt=""/>}</span>
               </Navbar.Text> 
               { !user.email ? 
                <Nav.Link as={Link} to="/login#login" className="btn btn-black text-white color m-3"><AiOutlineLogin/> Log In</Nav.Link>
                :
               <span><Button onClick={handleLogOut} className="btn btn-black text-white color m-3" to="/logout"><AiOutlineLogout/> SignOut</Button>
                {
                  admin ?
                   <Link to="/dashboard/adminDashboard" className="text-bold fs-3" type="submit"><MdDashboardCustomize/></Link>
                   :
                   <Link to="/dashboard" className="text-bold fs-3" type="submit"><MdDashboardCustomize color="white" /></Link>
                }
               </span>
               }
             </Navbar.Collapse>
           </Container>
        </Navbar>
        </div>
    );
};

export default Header;






// https://codepen.io/Mukarram09/pen/mgzGYp