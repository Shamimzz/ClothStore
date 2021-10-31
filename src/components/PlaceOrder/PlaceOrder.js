import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


// Place Oeder................... 
const PlaceOrder = () => {
  const {user} = useAuth();
  const {register, handleSubmit, formState: { errors }} = useForm();
  const history = useHistory();

  const onSubmit = data =>{
    const status = "pending"
    data.status = status;
    console.log(data);
    fetch(`https://grisly-werewolf-53088.herokuapp.com/placeorder`,{
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
     .then(res => res.json())
     .then(data=> {
        console.log(data);
        if(data.insertedId){
          history.push("/myOrders")
        }
     })
  };
 


  return (
     <div className="mt-5 mb-5 customer">
         <h2>Comstomer Information</h2>
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)}>  
          {/* register your input into the hook by invoking the "register" function */}
          <input
            readOnly
            defaultValue={user.displayName}
            className="p-2 m-2"
            {...register("name")}
            required
            placeholder="User name"
          /><br/>
          <input
            readOnly
            className="p-2 m-2"
            {...register("email")}
            required
            defaultValue={user.email}
            placeholder="User email"
          /><br/>
          <input
            className="p-2 m-2"
            {...register("city", { required: true })}
            required
            placeholder="City"
          /><br/>
         
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="p-2 m-2"
            type="number"
            {...register("phone",{ required: true })}
            required
            placeholder="Phone"
          /><br/>
          <input
            className="p-2 m-2"
            type="Date"
            {...register("Date")}
            required
            placeholder="Date"
          /><br/>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
            <button className="btn btn-warning m-2">Order Now</button>
        </form>
     </div>

     );
}

export default PlaceOrder;