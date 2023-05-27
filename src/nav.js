import React from "react";
import logo from "./images/kodailogo.png"

function Nav(){
    return(
        <div className="row header">
            <div className="row">
            <div className="col-md-12 headicon">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            </div>
            <div className="col-md-2">
           
        <img src={logo} alt=""  className="d-inline-block align-text-top logoimg"/>
       
        
            </div>
            <div className="col-md-10">
            <ul className="liststyle">
            <li>ABOUT US</li>
            <li>OUR SERVICES</li>
            <li>OUR PROJECTS</li>
            <li>TOUR OUR FARM</li>
            <li>OUR GALLERY</li>
            <li>JOURNAL</li>
            <li>CONTACT US</li>
          
            </ul>

            </div>
            </div>
    )
}
export default Nav;