import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Login.css';
import { AiOutlineLogin } from "react-icons/ai";

// swal alert.
import swal from 'sweetalert';

// Reacts Icons
// import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';



// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



const Login = () => {
  // Gets data from returen firebase by UseAuth().......
  const {StoreUserInfoDb, handlePasswordSet, email, password, auth, handleEmailSet, handeleGoogleAuth} = useAuth();

  // used for privateRouter locations.
  const location = useLocation();  
  const history = useHistory();

  // Shop korte chaile taree direct kore ene login page a anlm || r jodi direct login kore tahle Home a pathay dibo.
  const redirect_uri = location.state?.from || '/home';
  



  //signup with google.
  const handelGoogle = (e) => {
    e.preventDefault();
    handeleGoogleAuth()
    .then((result) => {

      // Modal that rePresents Login success.
      const Toast = Swal.mixin({ 
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      // After Login Redirect Annother Pages.
       history.push(redirect_uri) 
      // after sign in it will store data on mongodb database.
        StoreUserInfoDb(result.user.displayName, result.user.email);
    })
  }


   // Sign In with email And Password.
   const SignInWithEmail = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      history.push(redirect_uri);
    })
    .catch((error)=>{
      //useing sweetalert.
      swal("Oops!", "Maybe You Enter wrong email & password!", "error");
    })   
   }


    return (
     <div className="m-auto">

      <div className="signup-form">
            <form onSubmit={SignInWithEmail}>
            <h1>Please Log In First</h1>
              <div className="form-group">       	
                </div>
                <div className="form-group">
                	<input className="form-control"         
                    onBlur={handleEmailSet}
                  type="email" placeholder="Email" required="required"/>
                </div>
        	    	<div className="form-group">
                    <input type="password" className="form-control"
                     onBlur={handlePasswordSet}
                    placeholder="Password" required="required"/>
                </div> 
                <div>
                </div>     
        	    	<div className="form-group">
                  <Button type="submit" className="btn btn-info  btn-block">Log In</Button>
                </div>
            </form>
           <div className="mb-3" controlId="formBasicCheckbox">
               <h6 className="text-muted">Sign In with</h6>
               <Button onClick={handelGoogle} className="btn btn-sm fs-4" type="submit"><AiOutlineLogin /> Google</Button>      
               {/* <Button onClick={handelFacbook} className="btn btn-sm" type="submit"><FaFacebook color="green" fontSize="20px"/></Button> */}
             </div>
           <Button to="/signup" as={Link} className="btn btn-info text-decoration-none text-light" type="submit">Register Account</Button>

       </div>
     </div>
    );
};

export default Login;