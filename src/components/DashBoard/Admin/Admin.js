// import React from 'react';
// import './Admin.css';
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// // import { HashLink as Link } from 'react-router-hash-link';
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import MyOrders from '../../DashBoard/MyOrders/MyOrders';
// import ManageOrder from '../ManageOrder/ManageOrder';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import useAuth from '../../../hooks/useAuth';

// import { GrUserAdmin } from "react-icons/gr";
// import { AiOutlineLogin } from "react-icons/ai";
// import { AiOutlineLogout } from "react-icons/ai";

// const Admin = () => {
//   const {user, handleLogOut} = useAuth();	
//   let { path, url } = useRouteMatch();

//   return(

//   <>
// 	<div class="parent">
// 	<div class="sidebar">
// 		<div class="sidebar-brand">
// 		  <h3><span class="fa fa-user-o"></span>ClothStore</h3>
// 		</div>

// 		<div class="sidebar-menu">
// 			<ul className="align-start">
//               <Link to={`${url}`}>
//                 <li className="dashboard-menu mt-5"><span class="fa fa-home"></span>DashBoard</li>
//               </Link>
//               <Link to={`${url}/AdminManagement`}>
//                 <li className="dashboard-menu mt-5"><span class="fa fa-tasks"></span>Admin-Mangement</li>
//               </Link>
//               {/* <Link to={`${url}/manageServices`}>
//                 <li className="dashboard-menu mt-5"> Manage-Services</li>
//               </Link> */}
//               <Link to={`${url}/manageOrder`}>
//                 <li className="dashboard-menu">Mange-Order</li>
//               </Link>
//               <Link to={`${url}/makeAdmin`}>
//                 <li className="dashboard-menu"><GrUserAdmin/> Make-Admin</li>
//               </Link>
//               <Link to={`${url}/manageServices`}>
//                 <li className="dashboard-menu"><span class="fa fa-tasks"></span>Manage-Service</li>
//               </Link>
//               <Link to="/">
//                 <li className="dashboard-menu"><span class="fa fa-tasks"></span>Home</li>
//               </Link>
//               <Link to={`${url}/myOrders`}>
//                 <li className="dashboard-menu"><span class="fa fa-tasks"></span>My-Orders</li>
//               </Link>
// 			</ul> 
// 		</div>
// 	</div>

// 	<div class="content">
//       <Navbar>
//         <Container>
//           <Navbar.Brand href="#home"></Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Navbar.Text>
//                   <a href="#login" className="p-2 name">{user?.email && user.displayName}</a>
//                   <span>{user?.email && <img className="profileImg" src={user.photoURL} alt=""/>}</span>
//                </Navbar.Text> 
//                 { !user.email ? 
//                   <Nav.Link as={Link} to="/login#login" className="btn btn-warning color text-dark m-3"><AiOutlineLogin /> Log In</Nav.Link>
//                   :
//                  <Button onClick={handleLogOut} className="btn btn-warning color m-3" to="/logout"><AiOutlineLogout/> SignOut</Button>
//                 }
//           </Navbar.Collapse>
//         </Container>
//        </Navbar>

// 		  <main>
// 			<div class="cards">
// 				<div class="card-single">
// 					<div>
// 						<h2>2.000.000</h2>
// 						<small>Ventes</small>
// 					</div>
// 					<div>
// 						<span class="fa fa-shopping-cart"></span>
// 					</div>
// 				</div>

// 				<div class="card-single">
// 					<div>
// 						<h2>+30</h2>
// 						<small>Stock</small>
// 					</div>
// 					<div>
// 						<span class="fa fa-newspaper-o"></span>
// 					</div>
// 				</div>
// 				<div class="card-single">
// 					<div>
// 						<h2>58</h2>
// 						<small>Fournisseur</small>
// 					</div>
// 					<div>
// 						<span class="fa fa-outdent"></span>
// 					</div>
// 				</div>
// 				<div class="card-single">
// 					<div>
// 						<h2>20k</h2>
// 						<small>Communauté</small>
// 					</div>
// 					<div>
// 						<span class="fa fa-group"></span>
// 					</div>
// 				</div>
// 			</div>

// 			<div class="composant">
// 				<div class="ventes">
// 					<div class="case">
// 						<div class="header-case">
// 							<h2>Listes produits</h2>
// 							<button class="button">voir plus<span class="fa fa-arrow-right"></span></button>
// 						</div>
// 						<div class="body-case">
// 							<div class="tableau">
// 								<table width="100%">
// 								  <thead>
// 								    <tr>
// 								      <td>First</td>
// 								      <td>Last</td>
// 								      <td>Handle</td>
// 								    </tr>
// 								  </thead>
// 								  <tbody>
// 								    <tr>
// 								      <td>Mark</td>
// 								      <td>Otto</td>
// 								      <td><span class="status-produit color-one"></span>@mdo</td>
// 								    </tr>
// 								    <tr>
// 								      <td>Jacob</td>
// 								      <td>Thornton</td>
// 								      <td><span class="status-produit color-two"></span>@fat</td>
// 								    </tr>
// 								    <tr>
// 								      <td>Larry the Bird</td>
// 								      <td>@twitter</td>
// 								      <td><span class="status-produit color-three"></span>@twitter</td>
// 								    </tr>
// 								     <tr>
// 								      <td>Larry the Bird</td>
// 								      <td>@twitter</td>
// 								      <td><span class="status-produit color-four"></span>@twitter</td>
// 								    </tr>
// 								     <tr>
// 								      <td>Larry the Bird</td>
// 								      <td>@twitter</td>
// 								      <td><span class="status-produit color-five"></span>@twitter</td>
// 								    </tr>
// 								  </tbody>
// 								</table>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

     
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//         <Switch>
//               <Route exact path={path}>
//                 <MyOrders></MyOrders>
//               </Route>
//               <Route exact path={`${path}/manageOrder`}>
//                 <ManageOrder></ManageOrder>
//               </Route>
//               <Route exact path={`${path}/makeAdmin`}>
//                 <MakeAdmin></MakeAdmin>
//               </Route>
//               {/* <Route exact path={`${path}/makeAdmin`}>
//                 <MakeAdmin></MakeAdmin>
//               </Route>
//               <Route exact path={`${path}/addService`}>
//                 <AddServices></AddServices>
//               </Route>
//               <Route exact path={`${path}/manageServices`}>
//                 <ManageServices></ManageServices>
//               </Route> */}
//             </Switch>
//         </div>
//       </div>
//     </div>


// 		  </main>
// 	  </div>
// 	  </div>
//     </>
//     );
// };

// export default Admin;