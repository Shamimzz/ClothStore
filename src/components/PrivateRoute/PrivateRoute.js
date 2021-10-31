import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const {children, ...rest} = props;
    const {user, isLoading} = useAuth();

    // 1. Used For Show Loading Whwn dataBase Will be load....... 
    // 2. used For after login if you refresh your website it won't be redirect annother Router....
    if(isLoading){

        return <div>
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

    return (
        <Route
          {...rest}
          render={({location}) => user.email ?
          children : <Redirect to={{
              pathname:'/login',
              state: {from: location}
          }}></Redirect> }
        >
            
        </Route>
    );
};

export default PrivateRoute;