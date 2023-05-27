import React from "react";
import img1 from "./images/agri.jpg";
import img2 from "./images/tourister.jpg";
import img3 from "./images/tree.jpg";


function Image(){
    return(
        
        <div className="row imagesection">
            <div className="col-md-12">
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
            </div>
        </div>
    )
}
export default Image;