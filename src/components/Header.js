import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <div className="logo-red">
                <img src="./LogoRed.png" alt="logo du site" />
            </div>
            <Navigation />
        </header>
    );
};

export default Header;