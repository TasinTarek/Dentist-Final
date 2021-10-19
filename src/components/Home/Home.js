import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';

import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import Whys from '../Whys/Whys';

import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
            <Doctors></Doctors>
            <Whys></Whys>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;