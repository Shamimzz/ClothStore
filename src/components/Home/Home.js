import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Exclusive from '../Nish/Exclusive/Exclusive';
import ShowcauseHome from '../Nish/ShowcauseHome/ShowcauseHome';
import AllReviews from '../AllReviews/AllReviews';
import Slider from '../Slider/Slider';


const Home = () => {

    return (
        <div>
          <Slider></Slider>
          {/* <Banner></Banner> */}
          <ShowcauseHome></ShowcauseHome>
          <Exclusive></Exclusive>
          <AllReviews></AllReviews>
          <Blog></Blog>
          <About></About>
        </div>
    );
};

export default Home;