import React from 'react';
import './DashBoard.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../../DashBoard/MyOrders/MyOrders';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddServices from '../AddServices/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';

// react Icons.......
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { FcAddDatabase } from "react-icons/fc";
import { FcDeleteDatabase } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import Review from '../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';



const DashBoard = () => {
  const {admin, user, handleLogOut} = useAuth();	
  let { path, url } = useRouteMatch();


  return(
  <>
	<div class="parent">
	<div class="sidebar">
		<div class="sidebar-brand">
		  <Link to="/home" className="fs-2 text-white"><span class="fa fa-user-o"></span>ClothStore</Link>
		</div>

		<div class="sidebar-menu">
			<ul className="align-start">
          { !admin &&
            <>
              <Link to={`${url}`}>
                 <li className="dashboard-menu mt-5"><FcHome fontSize="1.5em"/> DashBoard</li>
               </Link>
              <Link to={`${url}/myOrders`}>
                <li className="dashboard-menu"><span class="fa fa-tasks"></span>My-Orders</li>
              </Link> 
              <Link to={`${url}/review`}>
                <li className="dashboard-menu"><span class="fa fa-tasks"></span>Review</li>
              </Link> 
              <Link to="/home">
                <li onClick={handleLogOut} className="dashboard-menu"><span class="fa fa-tasks"></span>Logout</li>
              </Link> 
            </>
          } 
          { admin &&
            <>
               <Link to={`${url}/adminDashboard`}>
                 <li className="dashboard-menu mt-5"><FcHome fontSize="1.5em"/> Admin-DashBoard</li>
               </Link>
               <Link to={`${url}/manageProducts`}>
                 <li className="dashboard-menu mt-5"><FcBiotech fontSize="1.5em"/>Manage-Products</li>
               </Link>
               <Link to={`${url}/manageOrder`}>
                 <li className="dashboard-menu"><FcDeleteDatabase fontSize="1.5em"/>Manage-Orders</li>
               </Link>
               <Link to={`${url}/makeAdmin`}>
                 <li className="dashboard-menu"><FcBusinessman fontSize="1.5em"/> Make-Admin</li>
               </Link>
               <Link to={`${url}/addServices`}>
                 <li className="dashboard-menu"><FcAddDatabase  fontSize="1.5em"/> Add-Services</li>
               </Link>
            </>
          }
			</ul> 
		</div>
	</div>

	<div class="content">
      <Navbar>
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <a href="#" className="p-2 name text-white">{user?.email && user.displayName}</a>
                <span>{user?.email && <img className="profileImg" src={user.photoURL} alt=""/>}</span>
               </Navbar.Text> 
                { !user.email ? 
                  <Nav.Link as={Link} to="/login#login" className="btn btn-warning color text-dark m-3"><AiOutlineLogin /> Log In</Nav.Link>
                  :
                 <Button onClick={handleLogOut} className="btn btn-info color m-3" to="/logout"><AiOutlineLogout/> SignOut</Button>
                }
          </Navbar.Collapse>
        </Container>
       </Navbar>

		   <main>
             <div className="container">
               <div className="row">
                 <div className="col-md-12">
                 <Switch>
                       <Route exact path={path}>
                         <MyOrders></MyOrders>
                       </Route>
                       <Route exact path={`${path}/adminDashboard`}>
                         <AdminDashBoard></AdminDashBoard>
                       </Route>
                       <Route exact path={`${path}/manageProducts`}>
                         <ManageProducts></ManageProducts>
                       </Route>
                       <Route exact path={`${path}/manageOrder`}>
                         <ManageOrder></ManageOrder>
                       </Route>
                       <Route exact path={`${path}/makeAdmin`}>
                         <MakeAdmin></MakeAdmin>
                       </Route>
                       <Route exact path={`${path}/makeAdmin`}>
                         <MakeAdmin></MakeAdmin>
                       </Route>
                       <Route exact path={`${path}/myOrders`}>
                          <MyOrders></MyOrders>
                       </Route>
                    
                       <Route exact path={`${path}/addServices`}>
                         <AddServices></AddServices>
                       </Route>
                       <Route exact path={`${path}/review`}>
                         <Review></Review>
                       </Route>
                     </Switch>
                 </div>
               </div>
             </div>
		   </main>
	  </div>
	  </div>
    </>
    );
};

export default DashBoard;



