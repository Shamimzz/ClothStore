
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

// swal alert.
import swal from 'sweetalert';


const Collection = () => {
    const {user} = useAuth();
    const email =user.email;
    console.log(email);

    const [orders, setOrders] = useState([]);
    const [Isdelete, setIsDelete] = useState(false);

    useEffect( () => {
      fetch(`https://grisly-werewolf-53088.herokuapp.comorderCollection/${email}`)
       .then((response) => response.json())
       .then(data => {
          setOrders(data)
       });
    },[Isdelete])



  // handle Delete...................
   const handleDelete = (key) => {
     fetch(`https://grisly-werewolf-53088.herokuapp.comdeleted/${key}`, {
        method: "DELETE",
        // headers: { "Content-type": "application/json" },
     }).then((response) => response.json())
       .then(result => {
            console.log(result)
          if(result.deletedCount){  
              setIsDelete(true);
              swal('Deleted Successfully')
          }
          else{
              setIsDelete(false);
          }

       });
   }


    return (
       <div className="mt-5">
          <div className="d-flex justify-content-around">
            <h4>Total Product Added: {orders.length}</h4>
            <h4><span className="text-warning fs-2">{user.displayName}</span> enjoy your Food!</h4>
          </div>
       <div className="all-products">  
        <div className="row container text-center">
          {orders.length ? orders.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className=" border border p-2 m-2">
              <img className="Img"src={pd?.img} alt="" srcset="" /> 
                <h5>{pd?.name}</h5>
                  <h5>{pd?.price}</h5>
                  <h6>{pd?.details.slice(0, 120)}</h6>
                <Link to="/placeOrder" >
                  <button className="btn btn-info m-2">Confirm</button>
                </Link>
                {/* <Link  to="" > */}
                  <button onClick={()=> handleDelete(pd.key)} className="btn btn-danger m-2">Cancel</button>
                {/* </Link> */}
              </div>
             </div>
           ))
           :
           <div>
              <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-success" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-danger" role="status">
                <span class="sr-only">Loading...</span>
              </div>
           </div>
          }
         </div>
       </div>
      </div>    
    );
};

export default Collection;