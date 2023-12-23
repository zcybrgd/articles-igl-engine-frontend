// eslint-disable-next-line no-unused-vars
import React from 'react';
 
import Article from '../.././assets/icons/holearticle.png';

const images = [
    Article,
    Article,
    Article,
    Article,
    Article,
    Article,
    Article,
    Article,
    Article,
    Article,
    Article,
    Article,

    
  
];

const Animation = () => {
    return (
       
        <div className="">
        <style>
          {`
         .slider-up .slide-track {
            animation: scroll-up 10s linear infinite;
          }
          
          .slider-down .slide-track {
            animation: scroll-down 10s linear infinite;
          }
          
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(calc(-100px * 7));
            }
          }
          
          @keyframes scroll-down {
            0% {
              transform: translateY(0);
            }
            100% {
                transform: translateY(calc(-50px * 7));
            }
          }
          
          `}
        </style>
        <div className="flex overflow-hidden h-screen">
  {/* First Slider on the Left */}
  <div className="wrapper flex-1 overflow-hidden">
    <div className="slider slider-up">
      <div className="slide-track animate-scroll-up">
      {images.map((imageName, index) => (
                <div key={index} className="slide">
                  <img src={imageName} alt={`${index + 1}`} />
                </div>
              ))}
      </div>
    </div>
  </div>

  {/* Second Slider on the Right */}
  <div className="wrapper flex-1 overflow-hidden">
    <div className="slider slider-down">
      <div className="slide-track animate-scroll-down">
      {images.map((imageName, index) => (
                <div key={index} className="slide">
                  <img src={imageName} alt={`${index + 1}`} />
                </div>
              ))}
      </div>
    </div>
  </div>
        <div className="wrapper flex-1">
        <div className="wrapper flex-1 overflow-hidden">
    <div className="slider slider-up">
      <div className="slide-track animate-scroll-up">
              {images.map((imageName, index) => (
                <div key={index} className="slide">
                  <img src={imageName} alt={`${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      
       
    );
  };
  
  export default Animation;