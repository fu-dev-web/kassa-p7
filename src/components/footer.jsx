import React from "react";
import logoFooter from "../assets/Footer/logoFooter.png"

export default function Footer(){
    return (
            <footer>
                <div className="footer-wrapper">
                <p className="footer-logo"><img src={logoFooter} alt="kassa-logo-footer" /></p>
                <p className="footer-text">© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>

    );
}

