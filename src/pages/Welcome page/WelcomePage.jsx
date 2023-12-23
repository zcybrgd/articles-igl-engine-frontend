import React, { useState } from 'react';
import Slider from 'react-slick';
// import arrowPrev from '../.././assets/icons/arrowPrev.svg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import Karou from '../.././assets/image.jpg';
import '../.././App.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [Karou, Karou, Karou, Karou, Karou];

const WelcomPage = () => {
    const [imgIndex, setImgIndex] = useState(0);

    // eslint-disable-next-line react/prop-types
    const NextArrow = ({ onClick }) => (
        <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
        </div>
    );

    // eslint-disable-next-line react/prop-types
    const PrevArrow = ({ onClick }) => (
        <div className="text-white top-8 ">
            {/* <div className=" flex max-sm:flex"></div> */}
            <div className="arrow prev" onClick={onClick}>
                {/* <img src={arrowPrev} alt="Previous" /> */}
                <FaArrowLeft />
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
    };

    return (
        <div className='flex ml-0 pl-0 p-10 m-5 items-center justify-center'>
            <Slider {...settings} className='flex p-10 w-full '>
                {images.map((img, idx) =>
                (
                    <div className={` ${idx === imgIndex ? 'slide activeSlide' : 'slide'} max-w-full bg-red-600 `} key={idx}>
                        <img src={img} alt={`Image ${idx}`} className='max-w-full h-auto' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default WelcomPage;