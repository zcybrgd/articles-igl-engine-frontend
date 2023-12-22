 
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Slider from 'react-slick';
import arrowPrev from '../.././assets/icons/arrowPrev.svg';
import arrowNext from '../.././assets/icons/arrowNext.svg';
 
import 'slick-carousel/slick/slick.css';
import Karou from '../.././assets/icons/Karou.png';
import '../.././me.css';

import 'slick-carousel/slick/slick-theme.css';

 const images = [Karou, Karou, Karou, Karou, Karou];

 const OurTeam = () => {
  const [imgIndex, setImgIndex] = useState(0);

  // eslint-disable-next-line react/prop-types
  const NextArrow = ({ onClick }) => (
    <div className="bg-black top-0">
      <div className=" bg-blue-500   "></div>
      <div className="arrow next bg-transparent lg:top-32 md:top-20 -right-6 max-sm:-right-2 max-sm:top-32" onClick={onClick}>
           <img src={arrowNext}  alt="Next "  />
    </div>
    </div>
  );

  //eslint-disable-next-line react/prop-types
  const PrevArrow = ({ onClick }) => (
    <div className="bg-black top-0">
      <div className=" bg-blue-500   ">
      <div className="arrow prev bg-transparent lg:top-32 -left-6 top-20 max-sm:-left-2 max-sm:top-32" onClick={onClick}>
        <img src={arrowPrev} alt="Previous" />
        </div>
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
          breakpoint: 640, // For smaller screens like mobile devices
          settings: {
            slidesToShow: 1,
          },
        },
      ], 
  };

  return (
    <div className="  w-screen  flex items-center   bg-white space-x-16 max-sm:space-x-0">
         <div className="flex">
         <div className="  w-16 bg-black h-screen md:h-screen flex ">
         </div>
     </div>
         
      
        <Slider {...settings} className="w-4/5 h-4/5 max-sm:w-4/5">
          {images.map((img, idx) => (
            <div className={idx === imgIndex ? 'slide activeSlide ' : 'slide'} key={idx}>
              <div
                className="w-4/5 slide m-auto space-x-0 transform: idx === imgIndex ? 'scale-75' : 'scale-125"
                key={idx}
                 
              >
                <img src={img} alt={`Image ${idx}`} className="w-20rem mx-auto transform scale-75" />
              </div>
              </div>
          ))}
        </Slider>  
      </div>
       
    
    
  );
};


export default OurTeam;