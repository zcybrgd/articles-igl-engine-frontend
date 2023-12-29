import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { openSidebarContext } from '../../../context/openSidebarContext';
import { IoMenu } from "react-icons/io5";

const NavBarWelcome = () => {
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    return (
        <nav className={`bg-[#FFFFFF] border-b-2 border-[#F1F1F1] fixed w-full z-20 top-0 start-0 `}>
            <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
                <div className="flex mr-auto items-start justify-between md:w-auto order-1" id="navbar-sticky">
                    <div >
                        <button
                            className='lg:hidden bg-transparent'
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <IoMenu className="text-[#707F65] text-2xl " />
                        </button>
                    </div>
                    {/* Buttons for scrolling to sections */}
                    <div className="hidden lg:flex ml-3 space-x-6">
                        <ScrollLink to="home" smooth={true} duration={500}>
                            <p className="text-black hover:underline cursor-pointer">Home</p>
                        </ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={500}>
                            <p className="text-black hover:underline cursor-pointer">About</p>
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <p className="text-black hover:underline cursor-pointer">Contact</p>
                        </ScrollLink>
                    </div>
                </div>

                {/* profile part  */}
                <div className="flex ml-auto order-2 md:space-x-0 rtl:space-x-reverse">
                    <RouterLink to="/signup" className="p-2 mr-6">
                        {/* signup button  */}
                        <p className="text-[15px] font-dmsans text-black mt-1 mr-1 cursor-pointer hover:underline">Sign Up</p>
                    </RouterLink>
                    <RouterLink to="/login" className="p-0 mr-6">
                        {/* login button  */}
                        <button
                            className="rounded-3xl bg-transparent text-black font-dmsans text-[15px] text-center pt-0.5 pb-0.5 border-2 border-black px-5 h-10"
                        >
                            Login
                        </button>
                    </RouterLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBarWelcome;