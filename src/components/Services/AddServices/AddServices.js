import './AddServices.css';
import { useForm } from "react-hook-form";
import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";

const AddServices = () => {
    const history = useHistory();
    const {register, handleSubmit, formState: { errors }} = useForm();


    // Add Service on database.................
    const onSubmit = data =>{
        console.log(data);
      fetch(`https://grisly-werewolf-53088.herokuapp.com/addServiceDB`,{
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
      })  
         .then(res => res.json())
         .then(data =>{
             console.log(data);
             history.push('/home')
         })
    }


    return (
        <div className="addServices mt-5 mb-5">
            <h2>Add Your Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div class="form-group">
                <input
                  type="text"
                  className="p-2 m-2"
                  {...register("name", { required: true })}
                  required
                  class="form-control"
                  placeholder="Your Product Title"
                  />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  className="p-2 m-2"
                  {...register("price", { required: true })}
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Price"
                  />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  className="p-2 m-2"
                  {...register("img", { required: true })}
                  required
                  class="form-control"
                  placeholder="Image-Url"
                  />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  className="p-2 m-2"
                  {...register("key", { required: true })}
                  required
                  class="form-control"
                  placeholder="Product key Should be unique."
                  />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Add Product Details</label>
                <textarea {...register("details", { required: true })} required class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button class="btn btn-warning" type="submit">Add Service</button>
              <Link to="/admin" class="btn btn-info" type="submit"><GrUserAdmin/> Admin</Link>
            </form>
         </div>
     );
 }
export default AddServices;