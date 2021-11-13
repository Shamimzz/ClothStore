
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const {user} = useAuth();
    const history = useHistory();
    const {register, handleSubmit} = useForm();


    // Add Service on database.................
    const onSubmit = data =>{
        data.img = user.photoURL;
        console.log(data);
      fetch(`https://grisly-werewolf-53088.herokuapp.com/reviewInserting`,{
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
        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div class="form-group">
            <input
              readOnly
              type="text"
              className="p-2 m-2"
              {...register("name", { required: true })}
              class="form-control"
              defaultValue={user.displayName}
              />
          </div>

          <div class="form-group">
            <input
              readOnly
              type="email"
              className="p-2 m-2"
              {...register("email", { required: true })}
              class="form-control"
              id="exampleFormControlInput1"
              defaultValue={user.email}
              />
          </div>
          <div class="form-group">
            <input
              type="number"
              min="1" max="5"
              className="p-2 m-2"
              {...register('rating', { required: true })}
              required
              class="form-control"
              placeholder="Rating*"
              />
          </div>
          <div class="form-group">
            <textarea {...register("comments", { required: true })} required class="form-control" placeholder="Add your Comments" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button class="btn btn-info" type="submit">Add Service</button>
        </form>
     </div>
    );
};

export default Review;