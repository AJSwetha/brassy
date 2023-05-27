import React from "react";
import planty from "./images/jcb.jpg"

function Plantation(){
    return(
        <>
       <div className="row plantation">
        <div className="col-md-6 plantpara">
            <h3>Customized Plantation Services on Plains</h3>
            <p>Our customized plantation seervices  on plains are designed to imagine Our team and recommend the most suitable crops and farming techniques for the are. They will also be able to provide the neccessary equipmentated tools, Avacado farmers and enjoy a host of plantation services that make farming easy and hassle-free,With years of experiance and expertise in this field,Kodai Agriorg has successfully implemented step farming techniques to cultivate a variety of crops on the slopes of hills .For hill side and step farming. These farming practices rquire a significant amount of labor and resources to create the level platforms and terraces necessary to grow crops on slopes.By participating in CSA, consumers can directly support the farmers who undertake this difficult work and help to sustain these traditional farming practices.Community-Based Hill Side and Step Farming</p>
        </div>
        <div className="col-md-6">
         <img src={planty}></img>
        </div>
       </div>
       <div className="row quote">
        <div className="col-md-12">
            <p>"Agriculture not only gives riches to a nation,<br></br> but the only riches she can call her own."</p>
        </div>

       </div>
       </>
    )
}
export default Plantation;