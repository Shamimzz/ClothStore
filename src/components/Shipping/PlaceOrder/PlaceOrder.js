import './PlaceOrder.css';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Header from '../../Header/Header';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
// swal alert.
import Swal from 'sweetalert2'



const PlaceOrder = () => {
    const {user} = useAuth();
    const {productId} = useParams();

    const {register, handleSubmit} = useForm();
    const [orders, setOrders] = useState({});
 

  // Histroy & Location for redirect...........
  const history = useHistory();
  // const location = {
  //  pathname: '/placeOrder',
  //  state: { fromDashboard: true }
  // }



    useEffect(()=>{
      fetch(`http://localhost:5000/singleProduct/${productId}`)
      .then(res=> res.json())
      .then(data => {
        setOrders(data)
        console.log(data)
      })
    },[])

      const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";

        // from state passing key & price with data....
        data.key = orders?.key;
        data.price = orders?.price;
        data.img = orders?.img;

        fetch("http://localhost:5000/Shipping", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
         if(result.insertedId){
            Swal.fire(
              'Product Added!',
              'Thanks for Stay with Us!',
              'success'
            )
            history.push('/products')
           }
           else{
            Swal.fire(
              'Ops',
              'Products Already Exist',
              'error'
            )
           }
          });
      }; 



    return (
        <div>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div class="card">
                <span id="green-arrow"><a href="#">&#8592;</a></span>
                <div className="d-flex">
                <div class="item">
                   <div class="text">
                     <h1>EXECUTIVE</h1>
                     <h2>Office Chair</h2>
                     <span id="price1">{orders?.price}</span>
                     <img src={orders?.img}/>
                   </div>
                 </div>
                 <div class="item">
                    <p>{orders?.des}</p>
                    <div class="stock">In Stock</div><br/>
                    <div>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" id="grey" aria-hidden="true"></i><span class="open">  &nbsp;(4.5 - 30 reviews)</span>
                   </div><br/>
                   {/* <div><button id="cart">ADD TO CART</button></div> */}
                  </div>
                </div>
               </div>
             </div>
             <div className="col-md-5 col-sm-12">
		          	<div class="main-login main-center">
                    <h4>Shipping Information</h4>
		          			<form onSubmit={handleSubmit(onSubmit)} class="form-horizontal">
          
		          				<div class="form-group">
		          					<div class="cols-sm-10">
		          						<div class="input-group">
		          							<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                             <input
                              {...register("name")}
                              class="form-control"
                              type="text"
                              readOnly
                              defaultValue={user?.displayName}
                              className="p-2 m-2 w-100 input-field"
                             />
		          						</div>
		          					</div>
		          				</div>
		          				<div class="form-group">
		          					<div class="cols-sm-10">
		          						<div class="input-group">
		          							<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                              <input
                               {...register("email")}
                               class="form-control"   
                               type="text"                                
                               readOnly
                               defaultValue={user?.email}
                               className="p-2 m-2 w-100 input-field"
                              />
		          						</div>
		          					</div>
		          				</div>
          
		          				<div class="form-group">
		          					<div class="cols-sm-10">
		          						<div class="input-group">
		          							<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
		          							<input
                              {...register("city")}
                              class="form-control"
                              type="text"
                              placeholder="City"
                              className="p-2 m-2 w-100 input-field"
                             />
		          						</div>
		          					</div>
		          				</div>
          
		          				<div class="form-group">
		          					<div class="cols-sm-10">
		          						<div class="input-group">
		          							<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
		          							<input
                            {...register("phone")}
                            class="form-control"
                            type="number"
                            placeholder="Phone"
                            className="p-2 m-2 w-100 input-field"
                            />
		          						</div>
		          					</div>
		          				</div>
          
		          				<div class="form-group">
		          					<div class="cols-sm-10">
		          						<div class="input-group">
		          							<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
		          							<input
                             {...register("name")}
                             class="form-control"
                             type="Date"
                             {...register("Date")}
                             required
                             placeholder="Date"
                             className="p-2 m-2 w-100 input-field"
                             />
		          						</div>
		          					</div>
		          				</div>
		          				<div class="form-group ">
		          					<button type="submit" class="btn btn-primary btn-lg btn-block login-button">Confirm Order</button>
		          				</div>
		          			</form>
		          		</div>
		          	</div>
              </div>
           </div>
      </div>
    );
};

export default PlaceOrder;