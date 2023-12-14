import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { openSidebarContext } from '../../../context/openSidebarContext';
import { IoMenu } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import avatar from "../../../assets/image.jpg"

const NavBar = ({ userRole }) => {
    const navigate = useNavigate();
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    function backToHome() {
        try {
            navigate(`/`);
        } catch (error) {
            console.error("Error loading home page:", error);
        }
    }

    return (
        <nav class="bg-[#FFFFFF] fixed w-full z-20 top-0 start-0 border-b-2 border-[#F1F1F1]">
            <div class="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
                <div class="flex items-start justify-between md:w-auto order-1" id="navbar-sticky">
                    {userRole === "client" ? (
                        <>
                            <div >
                                <button
                                    className='lg:hidden bg-transparent'
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                >
                                    <IoMenu className="text-[#707F65] text-2xl " />
                                </button>
                            </div>
                            <div className='hidden lg:flex'>
                                <p
                                    className="rounded-3xl bg-transparent md:text-[15px] text-center p-2  w-25 h-10 cursor-pointer"
                                    onClick={backToHome}
                                >
                                    <IoArrowBack className="text-[#707F65] text-2xl " />

                                </p>
                            </div>
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
                            <Link to="/profile" className="p-0 mr-6">
                                <img
                                    className="w-10 h-10 rounded-full mx-3 cursor-pointer"
                                    src={avatar}
                                />
                            </Link>
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

export default NavBar;
