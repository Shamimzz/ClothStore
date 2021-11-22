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
      fetch(`https://grisly-werewolf-53088.herokuapp.com/singleProduct/${productId}`)
      .then(res=> res.json())
      .then(data => {
        setOrders(data)
        console.log(data)
      })
    },[productId])

      const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";

        // from state passing key & price with data....
        data.key = orders?.key;
        data.price = orders?.price;
        data.img = orders?.img;

        fetch("https://grisly-werewolf-53088.herokuapp.com/Shipping", {
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
            <h1>Shipping Information</h1>
            <div className="row">
              <div className="col-md-6 col-sm-12">
              <div className="shell">
                 <div className="wsk-cp-product">
                   <div className="wsk-cp-img">
                     <img className="imgPlace" src={orders?.img} alt=""/>
                 </div>
                 <div className="wsk-cp-text">
                   <div className="category">
                     <span>Ethnic</span>
                   </div>
                   <div className="title-product">
                     <h3>{orders?.title}</h3>
                     </div>
                     <div className="description-prod">
                       <p>{orders?.des}</p>
                     </div>
                     <div className="card-footer">
                       <div className="wcf-left"><span className="price">{orders?.price}</span></div>
                       <div className="wcf-right">
                       
                       </div>
                     </div>
                  </div>
                </div>
              </div>
             </div>
             <div className="col-md-6 col-sm-12">
		          	<div class="p-3 bow-shadow-lg">
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