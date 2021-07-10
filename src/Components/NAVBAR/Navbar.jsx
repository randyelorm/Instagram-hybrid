import React from 'react';
import "./nav.css"
import profile from "../../Images/profile.jpeg"

const Navbar = () => {
    return (
        <div className = "row nav-box">


                    <div class=" mynav-items container">
                        
                     
                        <div class="logo-div">

                        <a class="logo" href="#">Instagram</a>
                        </div>


                        <form class="search-form">
                         
                            <input type="text" class="search-input text-center" placeholder="Search"/>
                          
                        
                        </form>



                        <div class ="right-links">
                        
                            <a href="#"> <i class= "fas fa-home"></i></a>
                            <a href="#"> <i className="fas fa-paper-plane"></i> </a>
                            <a href="#"> <i className="far fa-compass "></i> </a>
                            <a href="#"> <i className="far fa-heart"></i> </a>
                            <a href="#"> <img src={profile} class = "nav-profile-img" alt="" /> </a>
                        
                        </div>

                    
                    </div>

        </div>
    );
}

export default Navbar;
