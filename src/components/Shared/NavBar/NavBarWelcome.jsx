import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { openSidebarContext } from '../../../context/openSidebarContext';
import { IoMenu } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

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
                    {/* buttons home , about , contact  */}
                </div>

                {/* profile part  */}
                <div class="flex ml-auto order-2 md:space-x-0 rtl:space-x-reverse">
                    <Link to="/signup" className="p-2 mr-6">
                        {/* signup button  */}
                        <p className="text-[12px] md:text-[15px] text-black mr-1 cursor-pointer hover:underline">Sign Up</p>
                    </Link>
                    <Link to="/login" className="p-0 mr-6">
                        {/* login button  */}
                        <button
                            className="rounded-3xl bg-transparent text-black font-semibold text-[10px] md:text-[15px] text-center pt-0.5 pb-0.5 border-2 border-black w-25 h-10 mb-2"
                        >
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBarWelcome;
