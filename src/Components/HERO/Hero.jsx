import React from 'react';
import profile from "../../Images/profile.jpeg"

import "./hero.css"



const Hero = () => {

    
    return (
        <div className = "container">
        <span className ="col-sm-12 Profile-info">

                    <div className="col-sm-6  img-responsive">
                        <img src={profile} class = "hero-pro-img" alt="" />
                    </div>

                    <div className="col-sm-6 description ">

                                <div>

                                    <span>randy_davoh (Hybrid)</span>
                                    <button>Message</button>


                                </div>

                                <div className = "interactions">

                                    <span> <span className = "numbers">45 </span> posts</span> 
                                    <a> <span  className = "numbers">208 </span> Followers</a>
                                    <a> <span  className = "numbers">22K </span> Followers</a> 


                                </div>

                                 <div >

                                    <h3>Welcome to my page. I have a catolog of clothes you can shop from. Check out my shop </h3>


                                </div>

                            

                    </div>
           </span>
          
        </div>
    );
}

export default Hero;

