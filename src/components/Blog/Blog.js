import React from 'react';
import './Blog.css'
import { HashLink as Link } from 'react-router-hash-link';



const Blog = () => {
    return(         
           <>    
           <div className="container pt-5 pb-5">
                <div className="row">
                    <h1>#Blog</h1>
                </div>
                <div className="row">	  
                   <div className="col-md-4 col-sm-6">	   	 
                      <figure class="snip1418"><img src="https://i.ibb.co/q1v4YRx/products14.jpg" alt="sample85"/>
                       <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
                      <figcaption>
                         <h3>Pudol Doux</h3>
                         <p>All this modern technology just makes people try to do everything at once.</p>
                         <div class="price">
                           <s>$24.00</s>$19.00
                         </div>
		        		           <button as={Link} to="*" className="blog-btn">Read More</button>
                           </figcaption>
                        </figure>
                 </div>
		             <div className="col-md-4 col-sm-6">
		                <figure class="snip1418 hover"><img src="https://i.ibb.co/xmGvZYw/products1.jpg" alt="sample96"/>
                         <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
                         <figcaption>
                           <h3>Kurie Secco</h3>
                           <p>If you do the job badly enough, sometimes you don't get asked to do it again. </p>
                           <div class="price">
                             <s>$24.00</s>$19.00
                           </div>
                          <button as={Link} to="*" className="blog-btn">Read More</button>
                          </figcaption>
                        </figure>
		        	 </div>
		             <div className="col-md-4 col-sm-6">
		        	 <figure class="snip1418"><img src="https://i.ibb.co/7K3dDDX/products13.jpg" alt="sample92"/>
                        <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
                        <figcaption>
                          <h3>Zosaisan Invec</h3>
                          <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life.</p>
                          <div class="price">
                            <s>$24.00</s>$19.00
                          </div>
                        <button as={Link} to="*" className="blog-btn">Read More</button>
                        </figcaption>
                      </figure>
		        	 </div>
		          </div>
		        </div> 
        </>
    );
}

export default Blog;