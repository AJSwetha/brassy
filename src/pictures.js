import React from "react";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.jpg";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import finalimg from "./images/kodailogo.png";

function Pictures(){
    return(
        <>
        <div className="row pictures">
            <div className="col-md-12">
                <img src={pic1}></img>
                <img src={pic2}></img>
                <img src={pic3}></img>
                <img src={pic4}></img>
                <img src={pic5}></img>
                <img src={pic6}></img>
                <img src={pic7}></img>
                <img src={pic8}></img>
            </div>
        </div>
        <div className="row kodai">
            <div className="col-md-12">
                <img src={finalimg}></img>
            </div>
        </div>
        <div className="row foot">
            <div className="col-md-12">
                <p>COPYRIGHT 2023@KODAI AGRIORG<br></br>
                DESIGNED BY BRASSY TECHNOLOGIES</p>
            </div>
        </div>
        </>
    )
}
export default Pictures;