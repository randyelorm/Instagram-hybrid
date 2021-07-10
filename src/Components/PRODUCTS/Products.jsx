import React, { Component } from 'react';
import "./products.css"
import { Link } from "react-router-dom"
import Pro1 from "../../Images/pro1.jpeg"
import Pro2 from "../../Images/pro2.jpeg"
import Pro3 from "../../Images/pro3.jpeg"
import Pro4 from "../../Images/pro4.jpeg"
import Pro5 from "../../Images/pro5.jpeg"
import Pro6 from "../../Images/pro6.jpeg"
import Pro7 from "../../Images/pro7.jpeg"
import Pro8 from "../../Images/pro8.jpeg"
import Pro9 from "../../Images/pro9.jpeg"
import Pro10 from "../../Images/pro10.jpeg"
import Pro11 from "../../Images/pro11.jpeg"
import Pro12 from "../../Images/pro12.jpeg"

class Products extends Component {
    render() {
        return (
 <div className ="pages container text-center">
            <hr className = "hr-breaker" />
        
            <Link to = "/"> <h1 className ="main-page-heading"><i class="fas fa-th"></i> Posts</h1>  </Link> 
            <Link to = "/products"> <h1><i class="fas fa-shopping-bag"></i> Shop</h1></Link>
         
          <br />
        
    <div className = "container col-sm-12 products">

                <div className ="">
            
                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro1} alt="..."/>
                        <div class="caption">
                            <h3>Shirt and Jeans combo</h3>
                            <p>$250</p>
                         <p><a href="#" class="btn btn-primary" role="button"> 
                            Shop <i class="fas fa-shopping-bag"></i> 
                             </a>  
                             <a href="#" class="btn btn-default text-center" role="button">
                           Add to Cart <i class="fas fa-shopping-cart"></i> 
                            </a>
                         </p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro2} alt="..."/>
                        <div class="caption">
                            <h3>Shirt, Jeans, Shoe mix</h3>
                            <p>$399</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro3} alt="..."/>
                        <div class="caption">
                            <h3>Shirt, Jeans, cap mix</h3>
                            <p>$199</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default text-center" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>
                
                                        
                </div>




                <div className ="">
            
                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro4} alt="..."/>
                        <div class="caption">
                            <h3>Plain cotton shirt</h3>
                            <p>$50</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default text-center" role="button">Add to Cart <i class="fas fa-shopping-cart"></i> </a></p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro5} alt="..."/>
                        <div class="caption">
                            <h3>Mens Hot casual combo</h3>
                            <p>$329</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag text-center"></i></a> <a href="#" class="btn btn-default" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro6} alt="..."/>
                        <div class="caption">
                            <h3>Jeans Top shoe combo</h3>
                            <p>$299</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default text-center" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>
                
                                        
                </div>





                <div className ="">
            
                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro7} alt="..."/>
                        <div class="caption">
                            <h3>Mens Long Sleeves mix (3 in 1)</h3>
                            <p>$199</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default text-center" role="button">Add to Cart <i class="fas fa-shopping-cart"></i> </a></p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro8} alt="..."/>
                        <div class="caption">
                            <h3>Plain white cotton shirt</h3>
                            <p>$29</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default text-center" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro9} alt="..."/>
                        <div class="caption">
                            <h3>Womens vacation wear</h3>
                            <p>$279</p>
                            <p><a href="#" class="btn btn-primary text-center" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default text-center" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>
                
                                        
                </div>




                <div className ="">
            
                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro10} alt="..."/>
                        <div class="caption">
                            <h3>Converse casual</h3>
                            <p>$29</p>
                            <p><a href="#" class="btn btn-primary" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default" role="button">Add to Cart <i class="fas fa-shopping-cart"></i> </a></p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro11} alt="..."/>
                        <div class="caption">
                            <h3>Nike Casual</h3>
                            <p>$49</p>
                            <p><a href="#" class="btn btn-primary" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="thumbnail">
                        <img src={Pro12} alt="..."/>
                        <div class="caption">
                            <h3>Funky brogue</h3>
                            <p>$70</p>
                            <p><a href="#" class="btn btn-primary" role="button">Shop <i class="fas fa-shopping-bag"></i></a> <a href="#" class="btn btn-default" role="button">Add to Cart <i class="fas fa-shopping-cart"></i></a></p>
                        </div>
                        </div>
                    </div>
                
                                  
                </div>

    </div>
    <h4>Built in React by:</h4>
   <h4> <a href="https://www.linkedin.com/in/randy-davoh-820642171/"> Randy Davoh <i className ="fab fa-linkedin"></i> </a> </h4> 
   <h4> <a href="https://twitter.com/randydavoh">@randydavoh<i className ="fab fa-twitter"></i> </a> </h4> 
 </div>
        );
    }
}

export default Products;
