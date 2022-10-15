import react from 'react';
import Navbar from '../components/Navbar';

import AboutHero from '../components/SecondHero/AboutHero';
import AppFooter from '../components/Footer/AppFooter';
import Stats from '../components/stat/Stats';
const About = () => {
    return (
        <div>
            <Navbar />
            <Stats />
            <AppFooter />
        </div>
    )

}
export default About;