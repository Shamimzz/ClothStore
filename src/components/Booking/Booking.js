import './Booking.css';
import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


 // from database ID Shown by getinng API. 
const Booking = () => {

    const {id} = useParams();
    const [Services, setService] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    useEffect( ()=>{
        fetch(`https://grisly-werewolf-53088.herokuapp.com/Services/${id}`)
         .then(res=> res.json())
         .then(data=> setService(data))
    },[isDelete])

    // DELETE products from the API,
    const handleDelete = (id) => {
        const url = `https://grisly-werewolf-53088.herokuapp.com/Services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
              console.log(data);
            //   const deleted = Services.filter(product=> product._id !== id);
            //   setService(deleted);
              if(data.deletedCount) {
                  setIsDelete(true);
              }
          })
     }


    return (
        <div className="container">
          {
            Services && 
            <div className="Booking">
               <div>
                  <img id="img" src={Services?.img} alt=""/>
               <div className="content">
                  <p>Name {Services?.name}</p>
                  <h5>Price: {Services?.price}</h5>
                  <p>{Services?.des}</p>
                 <button onClick={ ()=> handleDelete(Services?._id) }    className="btn btn-primary">Delete</button>
               </div>
              </div>
           </div>
          }
        </div>
    );
};

export default Booking;