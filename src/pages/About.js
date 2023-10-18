import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import aboutBackgroundBanner from '../assets/img/img-banner-about.png'

const About = () => {
    return (
        <div>
            <Header />
            <Banner img={aboutBackgroundBanner} />
            <Footer />
        </div>
    );
};

export default About;