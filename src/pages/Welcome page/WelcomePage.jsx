import React from 'react';
import Hero from '../../components/Welcome/heroSection';
import ContactUs from '../../components/Welcome/contact';
import OurTeam from '../../components/Welcome/ourTeam';
import Footer from '../../components/Shared/Footer/Footer';

/**
 * WelcomePage component displaying a layout with a hero section, team information,
 * contact details, and a footer.
 *
 * @function
 * @returns {JSX.Element} 
 */
const WelcomPage = () => {
    return (
        <div className='absolute right-0 left-0 top-0 mt-20 grid grid-cols-2 max-sm:h-full'>
            <div className="App absolute w-full top-0">
                <Hero />
                <OurTeam />
                <ContactUs />
                <Footer />
            </div>
        </div>
    );
};

export default WelcomPage;