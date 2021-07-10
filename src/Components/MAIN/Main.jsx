import React from 'react';
import "./main.css"
import { Link } from "react-router-dom"
import post1 from "../../Images/post1.jpeg"
import post2 from "../../Images/post2.jpeg"
import post3 from "../../Images/post3.jpeg"
import post4 from "../../Images/post4.jpeg"
import post5 from "../../Images/post5.jpeg"
import post6 from "../../Images/post6.jpeg"
import post7 from "../../Images/post7.jpeg"
import post8 from "../../Images/post8.jpeg"
import post9 from "../../Images/post9.jpeg"
import post10 from "../../Images/post10.jpeg"
import post11 from "../../Images/post11.jpeg"
import post12 from "../../Images/post12.jpeg"


const Main = () => {
    return (
        <div className ="pages col-sm-12 container text-center">
          <hr className = "hr-breaker" />
    
          <Link to = "/"> <h1 className ="main-page-heading"><i class="fas fa-th"></i> Posts</h1>  </Link> 
          <Link to = "/products"> <h1><i class="fas fa-shopping-bag"></i> Shop</h1></Link>
        
        <br />
        <br />
       <div className =  " posts container ">

            <div className = "">
                <img src={post1} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post2} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post3} alt="" className = " col-sm-4 img-posts img-responsive" />
            </div> 

              <div className = "">
                <img src={post4} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post5} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post6} alt="" className = " col-sm-4 img-posts img-responsive" />
            </div> 

              <div className = "">
                <img src={post7} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post8} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post9} alt="" className = " col-sm-4 img-posts img-responsive" />
            </div> 

              <div className = "">
                <img src={post10} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post11} alt="" className = " col-sm-4 img-posts img-responsive" />
                <img src={post12} alt="" className = " col-sm-4 img-posts img-responsive" />
            </div>  
             
           
      
            
          </div>
        </div>
    );
}

export default Main;
