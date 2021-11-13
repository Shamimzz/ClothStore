import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import useAuth from '../../../hooks/useAuth';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { HashLink as Link } from 'react-router-hash-link';

// swal alert.
import swal from 'sweetalert';

const MyOrders = () => {
   const {user, setIsLoading} = useAuth();
   const [products, setProducts] = useState([]);
   const [Isdelete, setIsDelete] = useState(false);

    useEffect(()=>{
      // setIsLoading(true);
      fetch(`https://grisly-werewolf-53088.herokuapp.com/dashboard/myOrders?email=${user.email}`)
       .then(res=> res.json())
       .then(data => {
         setProducts(data)
         console.log(data);
         if(data.length === 0){
          setIsLoading(false);
         }
       })
    },[Isdelete])
 
    
    // handle Delete......
    const handleDelete = (key) => {
        console.log(key);
       fetch(`https://grisly-werewolf-53088.herokuapp.com/dashboard/myOrders/${key}`, {
         method: 'DELETE',
       }).then(res => res.json())
         .then(data => {
            if(data.deletedCount){
                setIsDelete(true);  
                swal('Deleted Successfully')
            }else{
                setIsDelete(false);
            }
        })
    }
      



    return (
        <div>
			<div class="composant">
				<div class="ventes">
					<div class="case">
						<div class="header-case">
							<h4>Total Order: {products.length}</h4>
							<Link to="*" class="button">See More<span class="fa fa-arrow-right"></span></Link>
						</div>
						<div class="body-case">
							<div class="tableau">
								<table width="100%">
								  <thead>
								   <tr>
								      <td>Name</td>
								      <td>Email</td>
								      <td>Phone</td>
								      <td>Product</td>
								      <td>Price</td>
								      <td>Date</td>
								      <td>Status</td>
								      <td>#</td>
								   </tr>
								  </thead>
								  <tbody>
                   {products.length? products.map((pd, index)=>( 
								    <tr>
								      <td>{pd?.name}</td>
								      <td>{pd?.email}</td>
								      <td>{pd?.phone}</td>
								      <td><img className="img" src={pd?.img} alt="" srcset="" /> </td>
								      <td>{pd?.price}</td>
								      <td>{pd?.Date}</td>
								      <td><span></span>{pd?.status}</td>
								      <td><span onClick={()=>handleDelete(pd.key)} className="m-1 p-2 fs-2 text-danger"><RiDeleteBin2Fill/></span></td>
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

export default MyOrders;