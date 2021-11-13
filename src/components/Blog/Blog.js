import React from 'react';
import './Blog.css'

const Blog = () => {
    return(         
           <>    
           <div className="container">
                <div className="row">
                    <h2 className="fs-1">#B<span className="cote">log</span> </h2>
                </div>
                <div className="row">	  
                   <div className="col-md-4 col-sm-6">	   	 
                      <figure class="snip1418"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample85.jpg" alt="sample85"/>
                       <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
                      <figcaption>
                         <h3>Pudol Doux</h3>
                         <p>All this modern technology just makes people try to do everything at once.</p>
                         <div class="price">
                           <s>$24.00</s>$19.00
                         </div>
		        		           <button className="blog-btn">Read More</button>
                           </figcaption><a href="#"></a>
                        </figure>
                 </div>
		             <div className="col-md-4 col-sm-6">
		                <figure class="snip1418 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample96.jpg" alt="sample96"/>
                         <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
                         <figcaption>
                           <h3>Kurie Secco</h3>
                           <p>If you do the job badly enough, sometimes you don't get asked to do it again. </p>
                           <div class="price">
                             <s>$24.00</s>$19.00
                           </div>
                          <button className="blog-btn">Read More</button>
                          </figcaption><a href="#"></a>
                        </figure>
		        	 </div>
		             <div className="col-md-4 col-sm-6">
		        	 <figure class="snip1418"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample92.jpg" alt="sample92"/>
                        <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
                        <figcaption>
                          <h3>Zosaisan Invec</h3>
                          <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life.</p>
                          <div class="price">
                            <s>$24.00</s>$19.00
                          </div>
                        <button className="blog-btn">Read More</button>
                        </figcaption><a href="#"></a>
                      </figure>
		        	 </div>
		          </div>
		        </div> 
        </>
    );
}

export default Blog;