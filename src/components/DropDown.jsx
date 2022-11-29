import React, {useState} from "react";
import {
    arrowDown,
    arrowUp
} from '../assets/index.js';
// import aproposInfo from "../data/kassa-apropos.json"

export default function DropDown({title, contenu, equipments}) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
                <div className='unfold-wrapper'>
                    <div className="unfold-title">
                        <p>{title}</p>
                        <button onClick={()=> setIsOpen(false)}
                        ><img src={arrowUp} alt="arrowUp-menu" /></button>
                    </div>
                    {equipments ? (
                        <div className="unfold-content"> 
                            {equipments.map((e,i)=>(
                                <p key={i}>{e}</p>
                            ))}
                        </div>
                     ) : ( 
                    <div className="unfold-content">
                        <p>{contenu}</p>
                    </div>
                     )}
                    
                </div>  
            ) : (
                <div className='unfold-wrapper'>
                    <div className="unfold-title">
                        <p>{title}</p>
                        <button onClick={()=> setIsOpen(true)}
                        ><img src={arrowDown} alt="arrowUp-menu" /></button>
                    </div>
                </div>  
            )
        
    
}