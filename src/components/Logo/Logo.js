import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import AI from './AI.png'

const Logo = () => {
    return(
       <div>

          <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
           <div className="Tilt-inner"> <img class=' w-full h-full p-8' src={AI} alt='logo'/></div>
          </Tilt>
       </div>
    )
}

export default Logo;