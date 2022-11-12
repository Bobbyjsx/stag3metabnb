
import "./home.css";
// 
import React from "react";
// 
import { Link } from "react-router-dom";
// 

import logo from "../../assets/Group.png"
import group from  "../../assets/Group 4028.png"

function App() {
  return (
   <body>
    
     <header>
      <img id="logo" src={logo} />

      <nav> 
        <a href="#">Home</a>
        <a href="#">Place to stay</a>
        <a href="./nft">NFT's</a>
        <a href="#">Community</a>
      </nav>
      <button id="connect">Connect wallet</button>
      </header>
      <div id="container">
      
        <div id="container-text">
           <h1>Rent a <span id="purple">Place</span> away from <span id="purple">Home</span> in the <span id="purple">Metaverse</span></h1>
           <p id="para"> we provide you access to luxury
               and affordable houses in the metaverse,
               get a chance to turn your imagination to
               reality at your comfort zone
           </p>
           <div id="input-el">
           <input id="in" type="text" placeholder="search for location" /><button id="s-btn">Search</button>
           </div>
        </div>
        <div id="container-img">
            <img src={group} />
        </div>
     </div>
     </body>
   
  );
}

export default App;
