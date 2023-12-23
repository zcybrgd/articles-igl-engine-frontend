import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import articleIcon from '../.././assets/icons/article.svg';
// import googleIcon from '../.././assets/icons/google.svg'; 

const SignUpPage = () => {
    const navigate = useNavigate();

    function openLogInPage() {
        try {
            navigate(`/login`);
        } catch (error) {
            console.error("Error loading SignUp Page:", error);
        }
    }

    return (
        <div className='w-screen h-screen grid grid-cols-2 max-sm:h-screen bg-black'>
            <div className="max-sm:mt-0 max-sm:hidd max-sm:justify-start absolute inset-y-0 right-0 w-3/5 md:w-3/5 bg-white max-sm:bg-white max-sm:w-full max-sm:h-screen h-screen md:h-screen justify-center place-content-center space-y-6 lg:justify-center max-sm:rounded-none lg:rounded-s-[20px] md:rounded-s-[20px] sm:rounded-s-[20px] md:rounded-bl-lg">

                <div className="lg:flex max-sm:grid max-sm:top-0 max-sm:left-0 top-0 max-sm:ml-8 max-sm:mt-4 max-sm:text-white  text-sm   max-sm:text-2xl    mb-0 mt-10 ml-52 space-y-0 ">
                    <h1 className="max-sm:hidden  text-black font-bold text-xl mb-8 lg:left-6">Create Account </h1>
                    <img
                        src={articleIcon}
                        alt="Article Icon"
                        className="hidden md:inline-block lg:inline h-8 w-8 ml-4 lg:mt-0"
                    />

                    <h1 className="max-sm:left-0 top-0 text-black    max-sm:mt-4 max-sm:text-4xl max-sm:font-bold lg:text-transparent">Signup </h1>

                    <p className="max-sm:left-0 top-0 text-black    max-sm:mt-0 max-sm:text-xl max-sm:font-bold lg:text-transparent">Welcome among us!</p>

                    <div className="max-sm:left-0  top-0 max-sm:mt-0 max-sm:ml-6 max-sm: text-white max-sm: font-bold  max-sm:text-xl   max-sm: mt-0 md:hidden sm-hidden lg:hidden max-md:text-5xl  ">

                    </div>
                </div>

                <div className="max-sm:justify-start mt-0 max-sm:text-white  text-sm max-sm:ml-0 max-sm:text-2xl max-sm:mt-6    mb-0 space-y-0">

                    <div className="flex w-72 flex-col gap-6 max-sm:hidden space-y-0 mt-16 max-sm:mt-16 max-sm:space-y-0 max-sm:justify-center  sm:mt-16 max-sm:h-full sm:space-y-0  md:space-y-0  sm:bg-white sm:h-3/4 lg:bg-black sm:rounded-lg">
                        {/* This div will be hidden on medium and larger screens */}

                    </div>
                    <div className="absolute inset-y-8  w-2/5 md:w-5/5       h-4 md:h-4/5 flex place-content-center mt-16 space-y-0 ">
                        <div className="flex w-72 flex-col max-sm:h-full gap-6 space-y-0  ">

                            <div className="flex w-72 ml-32 flex-col gap-6 space-y-0 mt-16 max-sm:left-0 top-0 max-sm:mt-16 max-sm:space-y-0 max-sm:bg-black max-sm:justify-center max-sm:rounded-lg sm:mt-16 sm:space-y-0 md:space-y-0 sm:bg-white  lg:bg-white sm:rounded-lg">
                                {/* This div will be hidden on medium and larger screens */}

                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="  h-6  focus:outline-none   w-5/5  text-sm text-black placeholder-black mt-14 border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
                                />

                                <input
                                    type="text"
                                    placeholder="User name"
                                    className="  h-6 focus:outline-none text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
                                />

                                <input
                                    type="email"
                                    placeholder="email"
                                    className="  h-6 focus:outline-none text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
                                />

                                <input
                                    type="password"
                                    placeholder="Password "
                                    className="  h-6 focus:outline-none text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
                                />

                                <button className="my-1 rounded-full max-sm:text-base max-sm:font-bold max-sm:ml-8 bg-[#434343] hover:white text-white font-bold py-2 px-4 w-full  max-sm:mr-6 ml-6 max-sm:w-3/4 max-sm:bg-white max-sm:placeholder:text-white   max-sm:text-black">
                                    Create an account
                                </button>

                                <div className="mt-0 text-sm flex justify-center  ">
                                    <p className="text-black flex justify-center max-sm:mt-0 max-sm:text-white">Already have an account? </p>
                                    <p className="text-[#707F65] font-bold hover:underline flex justify-center cursor-pointer" onClick={openLogInPage}>Login</p>
                                </div>

                                <div className="flex w-72 ml-32 flex-col gap-6 space-y-0 mt-16 max-sm:left-0 top-0 max-sm:mt-16 max-sm:space-y-0 max-sm:bg-white max-sm:justify-center max-sm:rounded-lg sm:mt-16 sm:space-y-0 md:space-y-0 sm:bg-white  lg:bg-white sm:rounded-lg">

                                </div>
                                <div className="flex w-72 ml-32 flex-col gap-6 space-y-0 mt-16 max-sm:left-0 top-0 max-sm:mt-16 max-sm:space-y-0 max-sm:bg-white max-sm:justify-center max-sm:rounded-lg sm:mt-16 sm:space-y-0 md:space-y-0 sm:bg-white  lg:bg-white sm:rounded-lg">

                                </div>
                                <div className="flex w-72 ml-32 flex-col gap-6 space-y-0 mt-16 max-sm:left-0 top-0 max-sm:mt-16 max-sm:space-y-0 max-sm:bg-white max-sm:justify-center max-sm:rounded-lg sm:mt-16 sm:space-y-0 md:space-y-0 sm:bg-white  lg:bg-white sm:rounded-lg">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUpPage;