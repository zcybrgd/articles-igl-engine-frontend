// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Slider from 'react-slick';
import arrowPrev from '../.././assets/icons/arrowPrev.svg';
import arrowNext from '../.././assets/icons/arrowNext.svg';
import Karou from '../.././assets/icons/Karou.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [Karou, Karou, Karou, Karou, Karou];

const OurTeam = () => {
    const [imgIndex, setImgIndex] = useState(0);

    // eslint-disable-next-line react/prop-types
    const NextArrow = ({ onClick }) => (
        <div className="bg-black top-0">
            <div className="arrow prev bg-transparent lg:top-32 -right-6 top-20 max-sm:-right-2 max-sm:top-40 cursor-pointer absolute z-10" onClick={onClick}>
                <img src={arrowNext} alt="Next " className='w-10 h-10 lg:w-20 lg:h-20' />
            </div>
        </div>
    );

    //eslint-disable-next-line react/prop-types
    const PrevArrow = ({ onClick }) => (
        <div className="bg-black top-0">
            <div className="arrow prev bg-transparent lg:top-32 -left-6 top-20 max-sm:-left-2 max-sm:top-40 cursor-pointer absolute z-10" onClick={onClick}>
                <img src={arrowPrev} alt="Previous" className='w-10 h-10 lg:w-20 lg:h-20' />
            </div>
        </div>
    );

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3, // Set slidesToShow to 1 for horizontal display
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImgIndex(next),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div id="about" className="flex items-center max-sm:space-x-0">
            <div className="flex">
                <div className="  w-16 bg-black h-screen md:h-screen flex">
                </div>
            </div>
            <div className="  w-5/6 h-full flex flex-col justify-center items-center max-sm:space-x-0  ml-16">
                <h2 className="text-4xl md:text-5xl font-dmsansmedium text-[#707F65] mb-20">Meet our team</h2>

                <Slider {...settings} className="w-full h-full max-sm:w-4/5 bg-blue">

                    {images.map((img, idx) => (
                        <div className={idx === imgIndex ? 'slide activeSlide scale-125' : 'slide'} key={idx}>
                            <div
                                className="w-4/5 slide m-auto space-x-0 transform: idx === imgIndex ? 'scale-125' : 'scale-75"
                                key={idx}
                            >
                                <img src={img} alt={`Image ${idx}`} className="w-20rem mx-auto transform scale-75" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurTeam;