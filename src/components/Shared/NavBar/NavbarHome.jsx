import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { openSidebarContext } from '../../../context/openSidebarContext';
import { FaUser } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";
import { IoMenu, IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5";
import avatar from "../../../assets/image.jpg"
import { useAuth } from '../../../context/AuthContext';
import { fetchModeratorByUsername } from '../../../services/modApi';

const NavbarHome = ({ userRole }) => {
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);
    const [mod, setMod] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth()
    const { userName } = useAuth()

    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
        const fetchModeratorData = async () => {
            if (userRole === 'moderator') {
                try {
                    const modData = await fetchModeratorByUsername(userName);
                    setMod(modData);
                } catch (error) {
                    console.error("Error fetching moderator:", error);
                }
            }
        };

        fetchModeratorData();
    }, [userRole, userName]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#FFFFFF] bg-opacity-80 rounded-lg fixed w-full z-20 top-0 start-0 border-b-2 border-[#F1F1F1]">
            <div className="max-w-screen-xl flex flex-row relative h-20 items-center justify-between mx-auto p-4">
                <div className="absolute left-2 items-start justify-between md:w-auto order-1">
                    {userRole === "client" ? (
                        <>
                            <button
                                className='bg-transparent'
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                <IoMenu className="text-[#797D8C] text-3xl" />
                            </button>
                        </>
                    ) : userRole === "admin" ? (
                        <>
                            <div className="p-0 mr-6">
                                <p className='text-black font-dmsansbold text-lg'>Articles Web Engine</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex ml-3'>
                                <b className=" xl:px-[40px] mr-3 font-dmsansbold text-black text-[20px] lg:text-[25px] xl:text-[32px]">
                                    Articles Web Engine
                                </b>
                            </div>
                        </>
                    )}
                </div>

                {/* profile part  */}
                <div className='absolute right-0 md:right-2'>
                    <div className="flex order-2 md:space-x-0 rtl:space-x-reverse">
                        {userRole === "client" ? (
                            <>
                                <div className="h-8 border-l-2 border-solid border-[#F1F1F1] mr-5 mt-1"></div>
                                <div className='flex'>
                                    <b className="xl:px-[40px] mr-3 mt-1 lg:mt-0 font-dmsansmedium text-black text-[20px] lg:text-[24px] xl:text-[32px]">
                                        {userName}
                                    </b>
                                </div>
                                <div>
                                    <img
                                        className="w-10 h-10 rounded-full mx-3 cursor-pointer"
                                        onClick={toggleDropdown}
                                        src={avatar}   //user.imgurl
                                    />
                                </div>

                                {isOpen && (
                                    <div className="absolute right-5 top-6 mt-10 w-44 p-1 bg-[#FFFFFF] text-base z-40 divide-gray-100 rounded shadow">
                                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <Link to="/profile" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                                                    {/* profile icon */}
                                                    <FaUser className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                                                    <span className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">User Info</span>
                                                </Link>
                                                <div class="border-b-2 text-[#707F65] w-3/4 ml-5"></div>
                                            </li>
                                            <li>
                                                <Link to="/collections" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                                                    {/* saved icon */}
                                                    <IoBookmarkOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                                                    <span className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">Saved</span>
                                                </Link>
                                                <div class="border-b-2 text-[#707F65] w-3/4 ml-5"></div>
                                            </li>
                                            <li>
                                                <Link to="/settings" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                                                    {/* settings icon */}
                                                    <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                                                    <span className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">Settings</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                            </>
                        ) : userRole === "admin" ? (
                            <>
                                <div className='flex flex-col text-end'>
                                    <p className="xl:px-[40px] font-dmsansmedium mt-1 lg:mt-0 font-semipold text-black text-[20px] lg:text-[24px] xl:text-[32px]">
                                        {userName}
                                    </p>
                                    <p className=" xl:px-[40px] font-dmsansmedium lg:mt-0 font-semipold text-[#969796] text-[15px]">
                                        Adminstrator
                                    </p>
                                </div>
                                <div>
                                    <img
                                        className="w-12 h-12 rounded-full mx-3 mt-1.5 cursor-pointer"
                                        onClick={toggleDropdown}
                                        src={avatar}  //user.imgurl
                                    />
                                </div>
                                {isOpen && (
                                    <div className="absolute right-5 top-10 mt-10 w-44 h-16 p-3 items-center justify-center bg-[#FFFFFF] text-base z-40 divide-gray-100 rounded shadow">
                                        {/* logout button  */}
                                        <div
                                            onClick={handleLogout}
                                            className="flex items-center p-2 pl-8 cursor-pointer border-2 border-[#707F65] text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white"
                                        >
                                            <VscSignOut className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                                            <p className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">Logout</p>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            //moderator part
                            <>
                                {mod && (
                                    <>
                                        <div className='flex flex-col'>
                                            <b className="xl:px-[40px] mr-3 mt-1 lg:mt-0 font-semibold text-black text-[20px] lg:text-[24px] xl:text-[32px]">
                                                {mod.firstName} {mod.familyName}
                                            </b>
                                            <b className="ml-7 xl:px-[40px]  lg:mt-0 font-semibold text-[#969796] text-[15px]">
                                                Moderator
                                            </b>
                                        </div>
                                        <div>
                                            <img
                                                className="w-12 h-12 rounded-full mx-3 mt-1.5"
                                                src={avatar}  //user.imgurl
                                            />
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarHome;