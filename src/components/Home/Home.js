import React from 'react';
// import useAuth from '../../hooks/useAuth'
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    // const {user} = useAuth();
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
        </div>
    );
};

export default Home;