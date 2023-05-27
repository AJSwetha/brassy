import React from 'react';
import Nav from './nav';
import Background from './background';
import Service from './service';
import Stepfarming from './stepfarming';
import Journey from './journey';
import Plantation from './plantation';
import Image from './image';
import Pictures from './pictures';

function Home(){
    return(
        <div className='container-fluid'>
            <Nav/>
            <Background/>
            <Service/>
            <Stepfarming/>
            <Journey/>
            <Plantation/>
            <Image/>
            <Pictures/>
        </div>
    )
}
export default Home;