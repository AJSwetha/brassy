import React from "react";
import stepfarm from "./images/stepfarms.jpg"
function Stepfarming(){
    return(
        <div className="row stepfarm">
            <div className="col-md-6 gardenimage">
                <img src={stepfarm}></img>
            </div>
            <div className="col-md-6 gardenpara">
                <h4>Community-Based Hill Side and Step Farming</h4>
                <p>With years of experiance and expertise in this field,Kodai Agriorg has successfully implemented step farming techniques to cultivate a variety of crops on the slopes of hills in the kodaikanal region.For hill side and step farming.CSA (Community Supported Agriculture) can be particularly beneficial. These farming practices rquire a significant amount of labor and resources to create the level platforms and terraces necessary to grow crops on slopes.By participating in CSA, consumers can directly support the farmers who undertake this difficult work and help to sustain these traditional farming practices.</p>
                <button>Read More</button>
            </div>
        </div>
    )
}
export default Stepfarming;