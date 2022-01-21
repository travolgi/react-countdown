import React, { useState, useEffect } from 'react';
import './Count.css';

const Count = props => {

   // const flip = { transform: "rotateX(90deg)" }

   return(
      <div className="card-flip">
         <span className="card-number">
            <span className="card-number-top" />
            {props.count}
         </span>
         <p>{props.time}</p>
      </div>
   );
}

export default Count;