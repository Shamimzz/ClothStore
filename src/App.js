import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import AuthProvider from './context/AuthProvider';
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Notfound from './components/Notfound/Notfound';
import Services from './components/Services/Services';
import Booking from './components/Booking/Booking';
import Collection from './components/Collection/Collection';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import AddServices from './components/Services/AddServices/AddServices';
import Admin from './components/Admin/Admin';
import About from './components/About/About';

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
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/services">
             <Services></Services>
           </Route>
           <PrivateRoute path="/collection">
             <Collection></Collection>
           </PrivateRoute>
           <Route path="/booking/:id">
             <Booking></Booking>
           </Route>
           <Route path="/signup">
             <SignUp></SignUp>
           </Route>
           <PrivateRoute path="/placeorder">
             <PlaceOrder></PlaceOrder>
           </PrivateRoute>
           <PrivateRoute path="/admin">
             <Admin></Admin>
           </PrivateRoute>
           <Route path="/login">
             <Login></Login>
           </Route>
           <Route path="/about">
             <About></About>
           </Route>
           <Route path="/addServices">
             <AddServices></AddServices>
           </Route>
           <PrivateRoute path="/MyOrders">
             <MyOrders></MyOrders>
           </PrivateRoute>
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
