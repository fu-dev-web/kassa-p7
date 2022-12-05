import React from 'react';

export default function Slider(photos) {
     console.log(photos);
     let pictures = Object.values(photos);
     return (
          <div className="slider-container">
               <img src={pictures[0]} alt=""></img>
          </div>
     );
}
