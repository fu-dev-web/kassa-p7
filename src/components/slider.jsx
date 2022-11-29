import React from "react";

export default function Slider(photos){
    console.log(photos);
    let pictures = Object.values(photos);
    return (
        <div className="slider-container">
            {/* {pictures.map((e, i)=>(
                <div key={i.toString()}>
                <img src={e} alt="" ></img>
                </div>
            ))} */}
            {/* {pictures[0]} */}
            <img src={pictures[0]} alt=""></img>
        </div>
    )

}