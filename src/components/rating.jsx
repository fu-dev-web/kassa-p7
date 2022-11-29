import React from "react";
import { redStar, greyStar } from "../assets/index";

export default function Rating({rating}){
    const ratingNeg = [0, 0, 0, 0, 0];
    let ratingPos = [];
    for (let i = 0; i < rating; i++){
        ratingPos.splice(i, rating, 1)
    }  
    ratingPos = ratingPos.concat(ratingNeg).splice(0, 5);
    
    return (
        <div className="rating">
            {ratingPos.map((e, i)=>(
                e === 1 ? (
                    <img key={i} src={redStar} alt="vote positive"></img>
                ) : (
                    <img key={i} src={greyStar} alt="vote negative"></img>
                )))}
        </div>
    )
}