import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Exclusive from '../Nish/Exclusive/Exclusive';
import ShowcauseHome from '../Nish/ShowcauseHome/ShowcauseHome';
import AllReviews from '../AllReviews/AllReviews';


const Home = () => {

    return (
        <div>
          <Header></Header>
          {/* <Banner></Banner> */}
          <ShowcauseHome></ShowcauseHome>
          <Exclusive></Exclusive>
          <AllReviews></AllReviews>
          <Blog></Blog>
          {/* <About></About> */}
          {/* <Contact></Contact> */}
          <Footer></Footer>
        </div>
    );
};

export default Home;