import React from 'react'
import './aboutus.css'
import Section2 from './section2';
import Cards from './cards';
import Slider from './carousel';
import CardsTop from './cardstop';
import Call from './call';
import AboutHome from './AboutHome';
import Navbar from '../Home/Navbar';
import Footer_comp from '../Home/Footer';

const Aboutus = () => {
    return (
        <div id='about'>
            <Navbar/>
            <AboutHome />
            <CardsTop />
            <Section2 />
            <Slider />
            <Cards />
            <Call />
            <Footer_comp/>
        </div>

    )
}

export default Aboutus
