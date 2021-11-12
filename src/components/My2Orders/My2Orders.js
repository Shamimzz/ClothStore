// import React,{useState, useEffect} from 'react';
// import useAuth from '../../hooks/useAuth'
// import Header from '../Header/Header';

// const MyOrders = () => {
//    const {user} = useAuth();
//    const [users, setUsers] = useState([]);
   
//    // My Orders........
//    useEffect(() => {
//        fetch(`http://localhost:5000/confirmOrder`)
//        .then(res => res.json())
//        .then(data=> {
//           setUsers(data)
//        });
//    },[])



//     return (
//       <>
//         <Header></Header>
//         <div className="container mt-5 mb-5">
//             <h2><span className="text-bold text-danger">{user?.displayName}'s</span> Order Page</h2>
//               <h5>Total Order: {users.length}</h5>
//             <table class="table table-striped">
//               <thead>
//                 <tr>
//                   <th scope="col">Serial</th>
//                   <th scope="col">User Name</th>
//                   <th scope="col">User Email</th>
//                   <th scope="col">Product ID</th>
//                   <th scope="col">Phone</th>
//                   <th scope="col">Status</th>
//                 </tr>
//               </thead>
              
//               <tbody>
//               {users.length? users.map((pd, index) => (  
//                 <tr>
//                   <th scope="row">#</th>
//                   <td>{pd?.name}</td>
//                   <td>{pd?.email}</td>
//                   <td>{pd?._id}</td>
//                   <td>{pd?.phone}</td>
//                   <td>{pd?.status}</td>
//                 </tr>
//                 ))
//                 :
//                 <div>
//                 <div class="spinner-grow text-primary" role="status">
//                   <span class="sr-only">Loading...</span>
//                 </div>
//                 <div class="spinner-grow text-secondary" role="status">
//                   <span class="sr-only">Loading...</span>
//                 </div>
//                 <div class="spinner-grow text-success" role="status">
//                   <span class="sr-only">Loading...</span>
//                 </div>
//                 <div class="spinner-grow text-danger" role="status">
//                   <span class="sr-only">Loading...</span>
//                 </div>
//                </div>
//               }
//               </tbody>
//             </table>
//          </div>
//          </>
//       );
// };

// export default MyOrders;