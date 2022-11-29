import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { leftArrow, rightArrow } from "../assets";
import infoLogement from "../data/kassa.json"
import '../styles/fichelogement.css'
import DropDown from "./DropDown"
import Rating from "./rating"
// import Slider from "./slider"

export default function FicheLogement(){
    let [count, setCount] = useState(0)

    const {id} = useParams();
    let info = infoLogement.find(e => e.id === id);
    let photos = Object.values(info.pictures);
    let tags = Object.values(info.tags);
    let dec = () => {
        const lastPos = count === 0; 
        const newPos = lastPos ? photos.length - 1 : count - 1;
        setCount(newPos);
    }
    let aug = () => (setCount((count + 1)%photos.length));


    return (
        <main>
            { photos.length === 1 ? (
                <div className="slider-photo" style={{top: "0%"}}>
                    <img src={photos[count]} alt=""></img>
                </div>
            ) : (
                <div className="slider-container">
                    <div className="slider-wrapper">
                        <button onClick={dec} id="leftArrow">
                            <img src={leftArrow} alt="left arrow" ></img></button>
                        <button onClick={aug} id="rightArrow">
                            <img src={rightArrow} alt="right arrow" ></img>
                        </button>
                        <p className="counter">{count + 1}/{photos.length}</p>
                    </div>
                    <div className="slider-photo">
                        <img src={photos[count]} alt="" className=""></img>
                    </div>
                </div>
            ) }

            <div className="title-wrapper">
                <div className="title-container">
                   <div className="title">{info.title}</div>
                   <div className="location">{info.location}</div>
                </div>
                <div className="landlord-container">
                    <div className="landlord-name">{info.host.name}</div>
                    <img src={info.host.picture} alt="" className="landlord-pic"></img>
                    < Rating rating = {info.rating} />
                </div>
            </div>
            <div className="tags-wrapper">
                {tags.map((e, i)=>(
                    <div className="tags" key={i}> {e}</div>
                ))}
            </div>
            <div className="info">
                <DropDown title = "Description" contenu = {info.description} />
                <DropDown title = "Equipments" equipments = {info.equipments} />
            </div>
        </main>
            
        
        )
}