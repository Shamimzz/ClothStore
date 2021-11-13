import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Notfound from './components/Notfound/Notfound';
import Collection from './components/Collection/Collection';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Products from './components/Nish/Products/Products';
import Blog from './components/Blog/Blog';
import PlaceOrder from './components/Shipping/PlaceOrder/PlaceOrder';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AllReviews from './components/AllReviews/AllReviews';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
       <BrowserRouter>
         <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/slider">
             <Slider></Slider>
           </Route>
           <Route exact path="/products">
             <Products></Products>
           </Route>
           <Route exact path="/blog">
             <Blog></Blog>
           </Route>
           <PrivateRoute exact path="/collection">
             <Collection></Collection>
           </PrivateRoute>
           <Route exact path="/signup">
             <SignUp></SignUp>
           </Route>
           <Route exact path="/placeOrder">
             <PlaceOrder></PlaceOrder>
           </Route>
           <Route exact path="/allReviews">
             <AllReviews></AllReviews>
           </Route>
           <Route exact path="/products/:productId">
             <PlaceOrder></PlaceOrder>
           </Route>
           <PrivateRoute path="/dashBoard">
             <DashBoard></DashBoard>
           </PrivateRoute>
           <Route path="/login">
             <Login></Login>
           </Route>
           <Route path="/about">
             <About></About>
           </Route>
           <Route path="/contact">
             <Contact></Contact>
           </Route>
           <PrivateRoute path="/placeorder">
             <PlaceOrder></PlaceOrder>
           </PrivateRoute>
           <Route path="*">
             <Notfound></Notfound>
           </Route>
         </Switch>
         <Footer></Footer>
       </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
