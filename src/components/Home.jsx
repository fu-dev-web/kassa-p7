import '../App.css';
import appartments from '../data/kassa.json';
import BannerImg from '../assets/Home/bannerImg.png'
import "../styles/home.css"
import {Link} from "react-router-dom";
// import React, { useState } from 'react';
import '../index.css'

function App() {

  

  return (
      
    <main className='home'>
       <section className="home-section">
          <p className='banner-text'>Chez vous, partout et ailleurs</p>
          <div className='banner-img'>
          <img src={BannerImg} alt="décor naturel" />
          </div>
        </section>
        <article className='card-background'>  
        {appartments.map((element) => (
          <Link to={"FicheLogement/" + element.id} className='card-wrapper' key={element.id}>
            <img src={element.pictures[0]} alt={element.description} className='card-img'></img>
            <div className='cartd-txt-wrapper'>
              <span className='card-txt'>{element.title}</span>
            </div>
          </Link>
          ))}
        </article>
        
    </main>
  );
}

export default App;
