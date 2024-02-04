import React, { useState } from 'react';
import Slider from 'react-slick';
import arrowPrev from '../.././assets/icons/arrowPrev.svg';
import arrowNext from '../.././assets/icons/arrowNext.svg';
import MemberBox from './memberBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//members
import Dina from "../../assets/members/Dina.jpg";
import Zaineb from "../../assets/members/Zaineb.jpg";
import Meriem from "../../assets/members/Meriem.jpg";
import Yasmine from "../../assets/members/Yasmine.svg";
import Nada from "../../assets/members/Nada.jpg";
import Maroua from "../../assets/members/Maroua.jpg"

const members = [
    {
        id: 0,
        image: Zaineb,
        name: "Boukhetala Zaineb",
        description: "Backend developer , DevOps and ML enthusiast",
    },
    {
        id: 1,
        image: Meriem,
        name: "Bouyahiaoui Meriem",
        description: "Backend developer , a tester and a hardworker",
    },
    {
        id: 2,
        image: Nada,
        name: "Djedjig Nada",
        description: "A deidcated frontend developer , a tester and is always learning and exploring new technologies",
    },
    {
        id: 3,
        image: Dina,
        name: "Mallek Dina",
        description: "The team Leader, UI/UX Designer, Fullstack developer and a devoted Database Enthusiast",
    },
    {
        id: 4,
        image: Maroua,
        name: "Djabri Maroua",
        description: "A Frontend Explorer, AI Enthusiast, and Mobile Dev with an insatiable thirst for learning!",
    },
    {
        id: 5,
        image: Yasmine,
        name: "Karou Yasmine",
        description: "A Design and Backend enthusiast with a constant eagerness for learning and growth.",
    }
];

/**
 * OurTeam component showcasing information about the team members.
 *
 * @component
 * @returns {JSX.Element} 
 */
const OurTeam = () => {
    const [imgIndex, setImgIndex] = useState(0);

    /**
     * NextArrow component for a carousel, providing a clickable button to navigate to the next item.
     *
     * @component
     * @param {Object} props - The properties passed to the component.
     * @param {Function} props.onClick - The function to be executed when the arrow is clicked.
     * @returns {JSX.Element} The rendered NextArrow component.
     */
    const NextArrow = ({ onClick }) => (
        <div className="bg-black top-0">
            <div className="arrow prev bg-transparent -right-6 top-40 max-sm:-right-2 cursor-pointer absolute z-10" onClick={onClick}>
                <img src={arrowNext} alt="Next " className='w-10 h-10 lg:w-20 lg:h-20' />
            </div>
        </div>
    );

    /**
     * PrevArrow component for a carousel, providing a clickable button to navigate to the previous item.
     *
     * @component
     * @param {Object} props - The properties passed to the component.
     * @param {Function} props.onClick - The function to be executed when the arrow is clicked.
     * @returns {JSX.Element} The rendered PrevArrow component.
     */
    const PrevArrow = ({ onClick }) => (
        <div className="bg-black top-0">
            <div className="arrow prev bg-transparent -left-4 top-40 max-sm:-left-2 cursor-pointer absolute z-10" onClick={onClick}>
                <img src={arrowPrev} alt="Previous" className='w-10 h-10 lg:w-20 lg:h-20' />
            </div>
        </div>
    );

    const settings = {
        vertical: false,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImgIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
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
                <div className="w-16 bg-black h-screen md:h-screen flex"></div>
            </div>

            <div className="w-5/6 h-full flex flex-col justify-center items-center max-sm:space-x-0 lg:ml-16 ml-4">
                <h2 className="text-4xl md:text-5xl font-dmsansmedium text-[#707F65] lg:mb-20 mb-10">Meet our team</h2>

                <Slider {...settings} className="flex w-full h-[360px] max-sm:w-4/5 max-sm:p-0 lg:p-12 items-center justify-center">
                    {members.map((member) => (
                        <div className={member.id === imgIndex ? 'slide activeSlide' : 'slide'} key={member.id}>
                            <div
                                className={`flex items-center justify-center slide mx-auto max-sm:w-auto max-sm:h-auto w-[300px] h-[380px]`}
                                key={member.id}
                            >
                                {member.id === imgIndex ? (
                                    <MemberBox image={member.image} name={member.name} description={member.description} isActive={true} />
                                ) : (
                                    <MemberBox image={member.image} name={member.name} description={member.description} isActive={false} />
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurTeam;
