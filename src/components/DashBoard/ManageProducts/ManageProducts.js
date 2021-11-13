import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


// swal alert.
import swal from 'sweetalert';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [Isdelete, setIsDelete] = useState(false);

    useEffect(()=> {
        fetch("http://localhost:5000/productManagement")
          .then(res=> res.json())
          .then(data=> {
            setProducts(data);
          })
      },[Isdelete])
  



    const ProductDelete = (key) => {
       console.log(key);
       fetch(`http://localhost:5000/productManagement/${key}`,{
           method: 'DELETE',
       }).then(res=> res.json())
         .then(data=> {
             console.log(data);
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
            <h2 className="fs-2 text-danger">Products Management</h2>
            <h4>Total Products : {products.length}</h4>
 
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial</th>
            <th>Image</th>
            <th>Service Title</th>
            <th>Product Key</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {products?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td><img  className="serviceImg" src={pd?.img} alt="" srcset="" /> </td>
              <td>{pd?.title}</td>
              <td>{pd?.key}</td>
              <td>{pd?.price}</td>
              <button onClick={() =>ProductDelete(pd?.key)} className="btn bg-danger p-2">Delete</button>
              <button className="btn bg-success p-2 disabled">Update</button>
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
    );
};

export default ManageProducts;