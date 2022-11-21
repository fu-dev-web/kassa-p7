import React from "react";
import {Link} from "react-router-dom"
import {logo} from '../assets/index';



export default function Header(){
    return (
        <div className="header">
        <header >
            <nav>
                <img src={logo} alt="logo kassa" className="header__logo"/>
                <ul>
                    <li><Link to={'/'} className="nav-items">Acceuil</Link></li>
                    <li><Link to={'/about'} className="nav-items">A Propos</Link></li>
                </ul>
            </nav>
        </header>
        {/* <Outlet /> */}
        </div>
    )
}