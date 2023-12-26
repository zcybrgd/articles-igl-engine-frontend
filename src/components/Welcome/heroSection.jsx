import React from 'react';
import quoteIcon from '../.././assets/icons/quote.svg';
import quote2Icon from '../.././assets/icons/quote2.svg';
import Animation from '../../components/Welcome/animation.jsx';
import line from "../../assets/line.svg"

const Hero = () => {

    return (
        <div id="home" className="text-white flex ">
            <div className="flex max-sm:flex">
                <div className=" sm:left-0 w-16 sm:w-16 sm:bg-black sm:h-full  sm:flex max-sm:h-full  md:h-full">
                    <div className="left-0 w-16 md:w-16 bg-black h-screen  sm:flex max-sm:flex">
                        <h1 className="text-white font-semibold text-7xl ml-4 mt-36">
                            E
                            <br />
                            Y
                        </h1>
                        <br />
                    </div>
                </div>
                <div className="flex flex-col bg-white space-y-0 m-0">
                    <img src={quoteIcon} alt="quote Icon" className="h-16 w-16 ml-2 mt-16" />
                    <div className=" w-16 md:w-4 h-4 md:h-4 flex text-start space-x-10 mt-16 ">
                        <h1 className="text-black font-semibold text-7xl ml-0 mt-4">
                            XPERIENCE
                            <br />
                            OUR
                        </h1>
                    </div>
                    <div className=" flex  w-4/5 md:w-4/5 text-start  h-4 md:h-4  mt-16 ml-0 space-x-10 sm:w-4/5 max-sm:space-x-0 max-sm:right-0">
                        <p className="text-black  text-3xl  ml-0 mt-44 "> whoever relies upon Allah then He is sufficient for him</p>
                        <img src={quote2Icon} alt="quote2 Icon" className="hidden sm:block h-16 w-16  ml-10 mt-64 max-sm:right-0" />

                        <div className="left-0 ">
                            {/* // <Animation/> */}
                            <div className=" hidden md:block md:left-4 w-16 md:w-16   h-2/5 md:h-2/5  ml-0 ">
                            </div>
                        </div>
                    </div>
                    <div className="flex w-3/5 md:w-3/5 h-4 md:h-4 mt-16 ml-4 max-sm:w-48">
                        <button className="rounded-2xl bg-[#707F65] hover:white text-white text-xl font-bold py-1 px-4    h-12  justify-center mt-80 max-sm:w-3/5 max-sm:mt-80">
                            Search

                        </button>
                    </div>
                </div>
                <div className="left-0 w-16 md:w-16 h-full md:h-full flex">
                    <div className="left-0 w-16 md:w-16 h-full md:h-full flex ">
                        {/* <img src={quoteIcon} alt="quote Icon" className="h-8 w-8 ml-4 mt-16 " /> */}
                    </div>
                </div>
            </div>
            <div className="hidden lg:block bg-white max-sm:hidden">
                <Animation />
            </div>
        </div>
    );
};

export default Hero;