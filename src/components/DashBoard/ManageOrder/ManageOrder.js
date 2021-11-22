import React, { useEffect, useState } from 'react';
import './ManageOrder.css';
import useAuth from '../../../hooks/useAuth';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FcOk } from 'react-icons/fc';
import { HashLink as Link } from 'react-router-hash-link';


// swal alert.
import swal from 'sweetalert';


const ManageOrder = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [Isdelete, setIsDelete] = useState(false);


     useEffect(()=>{
       fetch('https://grisly-werewolf-53088.herokuapp.com/dashboard/manageOrder')
        .then(res=> res.json())
        .then(data => {
         setOrders(data)
        })
     },[Isdelete])   

  
  // handle Delete......
  const handleDelete = (key) => {
    const confirmMessage = "Are you sure, you want to delete all the new tour packages?"
    if (window.confirm(confirmMessage)) {
   fetch(`https://grisly-werewolf-53088.herokuapp.com/dashboard/myOrders/${key}`, {
     method: 'DELETE',
   }).then(res => res.json())
     .then(data => {
        console.log(data)
        if(data.deletedCount){
            setIsDelete(true);  
            swal('Deleted Successfully')
        }else{
            setIsDelete(false);
        }
    })
 }
}




//  const handleDeleteAllNewTours = () => {
//   const confirmMessage = "Are you sure, you want to delete all the new tour packages?"
//   if (window.confirm(confirmMessage)) {
//        //eslint-disable-line
//        fetch('https://mighty-beyond-61990.herokuapp.com/tours', {
//             method: 'DELETE'
//        })
//             .then(res => res.json())
//             .then(data => {
//                  console.log(data)
//             })
//   }
// }








   // handle Approved...........
   const handleApprove = (id) => {
    fetch(`https://grisly-werewolf-53088.herokuapp.com/dashboard/manageOrder/approved/${id}`, {
        method: 'PUT',
        headers: { "content-type": "application/json" },
      }).then(res=> res.json())
        .then(data=> {
           console.log(data)
           if(data.modifiedCount){
             let newOrder = [];
             orders.forEach(order => {
                 if(order._id === id){
                     order.status = 'Approved';
                 }
                 newOrder.push(order);
             })
             setOrders(newOrder);
           }
        })
   }



    return (
        <div>
        <div class="composant">
            <div class="ventes">
                <div class="case">
                    <div class="header-case">
                        <h4>Total Order: {orders.length}</h4>
                        <button class="button">See More<span class="fa fa-arrow-right"></span></button>
                    </div>
                    <div class="body-case">
                        <div class="tableau">
                            <table width="100%">
                              <thead>
                               <tr>
                                  <td>Name</td>
                                  <td>Email</td>
                                  <td>Phone</td>
                                  <td>Product ID</td>
                                  <td>Price</td>
                                  <td>Date</td>
                                  <td>Status</td>
                                  <td>Verify</td>
                               </tr>
                              </thead>
                              <tbody>
                             {orders.length? orders.map((pd, index)=>( 
                                <tr>
                                  <td>{pd?.name}</td>
                                  <td>{pd?.email}</td>
                                  <td>{pd?.phone}</td>
                                  <td>{pd?.key}</td>
                                  <td>{pd?.price}</td>
                                  <td>{pd?.Date}</td>
                                  <td>{pd?.status}</td>
                                  <td>
                                    <span className="d-flex">
                                        <a onClick={()=>handleApprove(pd._id)} className="m-1 p-2 fs-2"><FcOk/></a>
                                        <a onClick={()=>handleDelete(pd.key)} className="m-1 p-2 fs-2 text-danger"><RiDeleteBin2Fill/></a>                     
                                    </span>
                                  </td>
                                </tr>
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
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         </div>
  </div>
    );
};

export default ManageOrder;