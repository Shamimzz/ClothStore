import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../hooks/useAuth';

import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import './Header.css';
// import { FaUserCircle } from "react-icons/fa";


const Header = () => {

   const {user, handleLogOut} = useAuth();


    return (
        <div>
        <Navbar className="bg-Color" bg="light" expand="lg">
           <Container>
             <Navbar.Brand className="img-brand" href="#home" to="/home" as={Link}><h3 className="text-info"><span className="Be">Be</span> Foody</h3></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
               <Nav className="me-auto">
                  <Link to="/home" className="link">Home</Link>
                  <Link to="/Services" className="link">Services</Link>
                  { user?.email && <Link to="/myOrders" className="link">My-Orders</Link> }
                  { user?.email && <Link to="/collection" className="link">Wish-List</Link>}
                  { user?.email && <Link to="/addServices" className="link">Add-Services</Link>}
               </Nav>  
               <Navbar.Text className="">
                  <a href="#login" className="p-2 name">{user?.email && user.displayName}</a>
                  <span>{user?.email && <img className="profileImg" src={user.photoURL} alt=""/>}</span>
               </Navbar.Text> 
               { !user.email ? 
                <Nav.Link as={Link} to="/login#login" className="btn btn-warning color text-dark m-3"><AiOutlineLogin /> Log In</Nav.Link>
                :
               <span><Button onClick={handleLogOut} className="btn btn-warning color m-3" to="/logout"><AiOutlineLogout/> SignOut</Button>
                <Link to="/admin" className="text-bold" type="submit"><GrUserAdmin/></Link>
               </span>
               }
             </Navbar.Collapse>
           </Container>
        </Navbar>
        </div>
    );
};

export default Header;