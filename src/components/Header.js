import React from 'react';
import Navigation from './Navigation';
import LogoRed from '../assets/img/LogoRed.png'

const Header = () => {
    return (
        <header>
            <div className="logo-red">
                <img src={LogoRed} alt="logo du site" />
            </div>
            <Navigation />
        </header>
    );
};

export default Header;