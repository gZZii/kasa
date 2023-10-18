import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Properties from '../components/Properties';
import homeBackgroundBanner from '../assets/img/Img-banner-home.png'


const Home = () => {
    return (
        <div>
            <Header />
            <Banner img={homeBackgroundBanner} text="Chez-vous, partout et ailleurs" />
            <Properties />
            <Footer />
        </div>
    );
};

export default Home;