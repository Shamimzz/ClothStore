import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [admins, setAdmins] = useState([]);

    const onSubmit = (data) => {
        fetch("http://localhost:5000/makeAdmin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      };


    useEffect(()=> {
      fetch("http://localhost:5000/admin")
        .then(res=> res.json())
        .then(data=> {
          setAdmins(data)
        })
    },[admins])



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 m-auto p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* <input
                        className="input-field"
                        name="name"
                        placeholder="Name"
                        type="text"
                        {...register("name", { required: true })}
                      />
                      <br /> */}
                      <input
                        className="input-field"
                        name="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                      />
                      <br />
                      <input
                        className="submit-btn btn btn-info mt-3"
                        type="submit"
                        value="make as Admin"
                      />
                    </form>
                    </div>

                    <div className="col-md-6 col-sm-12 m-auto p-5">
                     <table width="100%">
      								  <thead>
      								    <tr>
      								      <td>Email</td>
      								      <td>Role</td>
      								    </tr>
      								  </thead>
      								  <tbody>
                         {admins?.map((pd, index) => (
      								    <tr>
      								      <td>{pd?.email}</td>				     
      								      <td>{pd?.role}</td>				     
      								    </tr>
      								    ))}  
      								  </tbody>
      								</table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;