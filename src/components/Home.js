import React from 'react';
import  wilson from './wilson.gif'
import './MyStyles.css' 

const home = () => {
    return (
       <div>
          <h1>AceBook MySpace</h1>
          <div className = "home">
           <p>Welcome to AceBook MySpace, clearly the best social media platform to be on. Wooooooow...
           </p>
           <img src={wilson} alt="The legend himself" />
           </div>
       </div>
    );
}
 
export default home;
