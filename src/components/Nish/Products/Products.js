import React, {useState, useEffect} from 'react';
import './Products.css';
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Header from '../../Header/Header';
import useAuth from '../../../hooks/useAuth';

// swal alert.
import Swal from 'sweetalert2'



import { useHistory } from 'react-router';
import Button from '@restart/ui/esm/Button';


const Products = () => {
  const {user} = useAuth();
  const [products, setProducts] = useState([]);
  

  // Histroy & Location for redirect...........
  const history = useHistory();
  const location = {
   pathname: '/placeOrder',
   state: { fromDashboard: true }
  }

  // Useing Get method to show or read all data in Client Site.
   useEffect( () => {
       fetch('http://localhost:5000/products')
         .then(res => res.json())
         .then(data=> setProducts(data))
   }, [])



  // const handleBooking = (id) => {
  //    id.email = user.email;
    
  //    fetch('http://localhost:5000/ConfirmOrder', {
  //      method: 'POST',
  //      headers: { 'Content-Type': 'application/json'},
  //      body: JSON.stringify(id),
  //    }).then(res=>res.json())
  //      .then(data => {
  //         console.log(data)
  //         if(data.insertedId){
  //           Swal.fire(
  //             'Product Added!',
  //             'Thanks for Stay with Us!',
  //             'success'
  //           )
  //           console.log('Booking', id);
  //           history.push(location)
  //          }
  //          else{
  //           history.push('/products')
  //           Swal.fire(
  //             'Ops',
  //             'Products Already Exist',
  //             'error'
  //           )
  //          }
  //      })
  // }

  // onClick={()=>handleBooking(pd?._id)} 


    return (
        <div>
          <Header></Header>
          <div className="row pt-5">
              <h2 className="fs-1">#Exclusive<span className="text"> Collections</span> </h2>
          </div>
          <div className="shell">
            <div className="container">
              <div className="row">
               { products.map((pd, index) => (
                 <div className="col-md-3">
                 <div className="wsk-cp-product">
                   <div className="wsk-cp-img">
                     <img className="" src={pd?.img} alt=""/>
                 </div>
                 <div className="wsk-cp-text">
                   <div className="category">
                     <span>Ethnic</span>
                   </div>
                   <div className="title-product">
                     <h3>{pd?.title}</h3>
                     </div>
                     <div className="description-prod">
                       <p>{pd?.des}</p>
                     </div>
                     <div className="card-footer">
                       <div className="wcf-left"><span className="price">{pd?.price}</span></div>
                       <div className="wcf-right">
                         <Link to={`/products/${pd._id}`}className="buy-btn"><AiOutlineShoppingCart /></Link>
                       </div>
                     </div>
                   </div>
                  </div>
                </div>
              ))
             }
             </div>
          </div>
        </div>
     </div>          
                               
    );

};

export default Products;



   

