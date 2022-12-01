import React from "react";
// import FLbanner from "../assets/FicheLogement/FL-img-banner.png"
import {FlImgBanner } from '../assets/index.js'
import aproposInfo from '../data/kassa-apropos.json';
import '../styles/apropos.css'
import DropDown from "./DropDown.jsx";




export default function Apropos(){


    return (
        <main className="home">
            <section className="home-section" id="apropos-banner">
                <div className='banner-img'>
                    <img src={FlImgBanner} alt="décor montaignes" />
                </div>
            </section>
            
                {
                    aproposInfo.map((e, i)=>(
                        <article key={i}> 
                           <DropDown title={e.title} contenu={e.contenu} /> 
                        </article>
                    ))
                }
                
            
        </main>
    )

}

