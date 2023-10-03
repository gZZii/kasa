import React from 'react';
import Navigation from '../components/Navigation';
import LogoRed from '../components/LogoRed';
import LogoWhite from '../components/LogoWhite';

const LodgingInformation = () => {
    return (
        <div>
        <header>
            <LogoRed />
            <Navigation />
        </header>
        <footer>
            <LogoWhite />
        </footer>
        </div>
    );
};

export default LodgingInformation;