import './Admin.css';
import React,{useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth'


const Admin = () => {

    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    // const [isApprov, setIsisApprov] = useState(false);
    

   // Handle Admin pannel...............
   useEffect(() => {
    fetch(`https://grisly-werewolf-53088.herokuapp.com/adminPannel`)
    .then(res => res.json())
    .then(data=> {
        setOrders(data)
    });
   },[isDelete])

  
   // handle Cancel collection product..................... 
   const handleDelete = (key) => {
     console.log(key);
     fetch(`https://grisly-werewolf-53088.herokuapp.com/adminPannel/${key}`, {
         method: 'DELETE',
         headers: {"content-type": "application/json"}
     }).then(res => res.json())
       .then(data=> {
           if(data.deletedCount){
             setIsDelete(true);  
           }else{
             setIsDelete(false);
           }
       })
   }

     // handle Updatee collection product..................... 
   const handleUpadate = (id) => {
     fetch(`https://grisly-werewolf-53088.herokuapp.com/adminPannel/approved/${id}`, {
       method: 'PUT',
       headers: { "content-type": "application/json" },
     }).then(res=> res.json())
       .then(data=> {
          console.log(data)
          if(data.modifiedCount){
            let NewOrders = [] ;
            orders.forEach(order => {
                if(order._id === id){
                   order.status = 'Approved';  
                }
                NewOrders.push(order);      
            })
            setOrders(NewOrders);
          }
       })
   }



    return (
        <div className="container mt-5 mb-5">
              <h2 className="text-bold text-danger">Admin Dashboard</h2>
              <h5>Total Order: {orders.length}</h5> 
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Serial</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Email</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              
              <tbody>
              {orders.map((pd) => (  
                <tr>
                  <th scope="row">#</th>
                  <td>{pd?.name}</td>
                  <td>{pd?.email}</td>
                  <td>{pd?._id}</td>
                  <td>{pd?.phone}</td>
                  { 
                    pd.status === 'pending' ? <td onClick={()=> handleUpadate(pd._id)} className="text-light btn btn-success">Approved</td>
                    :
                    ''
                   }
                  <td onClick={()=> handleDelete(pd.key)} className="text-light btn btn-danger">Delete</td>
                  <td>{pd?.status}</td>
                </tr>
                ))}
              </tbody>
            </table>
         </div>
    );
};

export default Admin;