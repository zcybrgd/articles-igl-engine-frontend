import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { openSidebarContext } from '../../../context/openSidebarContext';
import { FaUser } from "react-icons/fa6";
import { IoMenu, IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5";
import avatar from "../../../assets/image.jpg"

const NavbarHome = ({ userRole }) => {
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav class="bg-[#FFFFFF] bg-opacity-50 rounded-lg fixed w-full z-20 top-0 start-0 border-b-2 border-[#F1F1F1]">
            <div class="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
                <div class="flex items-start justify-between md:w-auto order-1" id="navbar-sticky">
                    {userRole === "client" ? (
                        <>
                            <button
                                className='bg-transparent'
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                <IoMenu className="text-[#797D8C] text-3xl " />
                            </button>
                        </>
                    ) : userRole === "admin" ? (
                        <>
                            {/* Logo part  */}
                            <div className="p-0 mr-6">
                                <img
                                    className="w-12 h-12 mx-3 mt-1.5"
                                    src={avatar}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex'>
                                <b className=" xl:px-[40px] mr-3 font-bold text-black text-[20px] lg:text-[30px] xl:text-[32px]">
                                    website name
                                </b>
                            </div>
                        </>
                    )}
                </div>

                {/* profile part  */}
                <div class="flex order-2 md:space-x-0 rtl:space-x-reverse">
                    {userRole === "client" ? (
                        <>
                            {/* font DM sans */}
                            <div className="h-8 border-l-2 border-solid border-[#F1F1F1] mr-5 mt-1"></div>
                            <div className='flex'>
                                <b className="xl:px-[40px] mr-3 mt-1 lg:mt-0 font-semibold text-black text-[20px] lg:text-[24px] xl:text-[32px]">
                                    user name
                                </b>
                            </div>
                            <div className="p-0 mr-6 ">
                                <img
                                    className="w-10 h-10 rounded-full mx-3 cursor-pointer"
                                    onClick={toggleDropdown}
                                    src={avatar}
                                />
                            </div>

                            {isOpen && (
                                <div className="absolute right-5 top-10 mt-10 w-44 p-1 bg-[#FFFFFF] text-base z-40 divide-gray-100 rounded shadow">
                                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link to="/profile" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                                                {/* profile icon */}
                                                <FaUser className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                                                <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">User Info</span>
                                            </Link>
                                            <div class="border-b-2 text-[#707F65] w-3/4 ml-5"></div>
                                        </li>
                                        <li>
                                            <Link to="/collections" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                                                {/* saved icon */}
                                                <IoBookmarkOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                                                <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">Saved</span>
                                            </Link>
                                            <div class="border-b-2 text-[#707F65] w-3/4 ml-5"></div>
                                        </li>
                                        <li>
                                            <Link to="/settings" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                                                {/* settings icon */}
                                                <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                                                <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">Settings</span>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            )}

                        </>
                    ) : userRole === "admin" ? (
                        <>
                            <div className='flex flex-col'>
                                <b className="xl:px-[40px] mr-3 mt-1 lg:mt-0 font-semibold text-black text-[20px] lg:text-[24px] xl:text-[32px]">
                                    user name
                                </b>
                                <b className="ml-12 xl:px-[40px]  lg:mt-0 font-semibold text-[#969796] text-[15px]">
                                    Admin
                                </b>
                            </div>
                            <div className="p-0 mr-6">
                                <img
                                    className="w-12 h-12 rounded-full mx-3 mt-1.5"
                                    src={avatar}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex flex-col'>
                                <b className="xl:px-[40px] mr-3 mt-1 lg:mt-0 font-semibold text-black text-[20px] lg:text-[24px] xl:text-[32px]">
                                    user name
                                </b>
                                <b className="ml-7 xl:px-[40px]  lg:mt-0 font-semibold text-[#969796] text-[15px]">
                                    Moderator
                                </b>
                            </div>
                            <div className="p-0 mr-6">
                                <img
                                    className="w-12 h-12 rounded-full mx-3 mt-1.5"
                                    src={avatar}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarHome;
