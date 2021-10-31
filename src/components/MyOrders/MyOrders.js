import React,{useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth'



const MyOrders = () => {
   const {user} = useAuth();
   const [users, setUsers] = useState([]);
   

   // My Orders........
   useEffect(() => {
       fetch(`https://grisly-werewolf-53088.herokuapp.com/confirmorder`)
       .then(res => res.json())
       .then(data=> {
          setUsers(data)
       });
   },[])



    return (
        <div className="container mt-5 mb-5">
            <h2><span className="text-bold text-danger">{user?.displayName}'s</span> Order Page</h2>
              <h5>Total Order: {users.length}</h5>
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
              {users.map((pd, index) => (  
                <tr>
                  <th scope="row">#</th>
                  <td>{pd?.name}</td>
                  <td>{pd?.email}</td>
                  <td>{pd?._id}</td>
                  <td>{pd?.phone}</td>
                  <td>{pd?.status}</td>
                </tr>
                ))}
              </tbody>
            </table>
         </div>
      );
};

export default MyOrders;