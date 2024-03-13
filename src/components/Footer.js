import React from 'react';
import LogoWhite from "../assets/img/LogoWhite.png"

const Footer = () => {
    return (
        <footer>
            <div className="logo-white">
                <img src={LogoWhite} alt="logo du site" />
            </div>
            <h3>© 2020 Kasa. All<br /> rights reserved</h3>
        </footer>
    );
};

export default Footer;