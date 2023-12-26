import React from 'react';
import Hero from '../../components/Welcome/heroSection';
import ContactUs from '../../components/Welcome/contact';
import OurTeam from '../../components/Welcome/ourTeam';

const WelcomPage = () => {
    return (
        <div className='absolute right-0 left-0 top-0 mt-20 grid grid-cols-2 max-sm:h-full  '>
            <div className="App absolute w-full top-0">
                < Hero />
                < OurTeam />
                <ContactUs />
            </div>
        </div>
    );
};


export default WelcomPage;