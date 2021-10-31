import './Services.css';
import React,{useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth';

// swal alert.
import swal from 'sweetalert';


const Services = () => {
    const {user, isLoading} = useAuth();
    const [Services, setServices] = useState([]);
    
   // Useing Get method to show or read all data in Client Site.
    useEffect( () => {
        fetch('https://grisly-werewolf-53088.herokuapp.com/foods')
          .then(res => res.json())
          .then(data=> setServices(data))
    }, [])

    
   // Add To Collection.....................
   const AddToCard = (index) => {
     const product = (Services[index]);
     product.email = user.email;

     fetch(`https://grisly-werewolf-53088.herokuapp.com/addToCart`, {
         method: 'POST',
         headers: { "content-type": "application/json" },
         body: JSON.stringify(product),
     })
      .then(res=> res.json())
      .then(data => {
         console.log(data);
        if(data.insertedId){
         swal("Your Order Added Successfully", "Plz Check Wish-List");
        }
        else{
         swal(data, "Choose annother One");
        }
      });
   }
    

   const handleOrderBtn = (index) => {
     if(user.email){
      AddToCard(index);
     }
     else{ 
       swal('For Ordering Foods', 'You have To Login First!')
     }
   }


    return (
        <div className="mt-5 mb-5">
        <div class="section-title">
          <h2>SERVICES</h2>
          <p>Remember that in the kitchen the perfect is the enemy of the good and also the good breakfast. I would happily serve these to a hungry crowd during brunch and even the most finicky of guests will be happy with them!</p>
        </div>
       <div className="all-products text-center">
          <p className="shown">Total [{Services.length}] Services Available</p>  
          <div className="row">
            { Services.length ? Services.map((pd, index) => (
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="product border border p-2 m-2">
                  <span className="off">-20% Off</span>
                  <img className="Img"src={pd?.img} alt="" srcset="" /> 
                  <h5>{pd?.name}</h5>
                  <h5>{pd?.price}</h5>
                  <h6>{pd?.details.slice(0, 120)}</h6>
                 
                  <button  onClick={()=> handleOrderBtn(index)} className="btn btn-warning m-2">Order Now</button>
                  {/* {user?.email &&
                     <button onClick={()=> AddToCard(index)} className="btn btn-warning m-2">Order Now</button>                           
                  } */}
                </div>
              </div>
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
          </div>
        </div>
      </div>
    );
};

export default Services;