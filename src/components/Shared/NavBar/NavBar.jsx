import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { openSidebarContext } from '../../../context/openSidebarContext';
import { IoMenu } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import avatar from "../../../assets/image.jpg"

const NavBar = ({ userRole, article }) => {
    const navigate = useNavigate();
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    function backToHome() {
        try {
            navigate(`/`);
        } catch (error) {
            console.error("Error loading home page:", error);
        }
    }

    function backToModPage() {
        try {
            navigate(`/`);
        } catch (error) {
            console.error("Error loading moderator page:", error);
        }
    }

    function backtoSearchPage() {
        try {
            navigate(`/search`);
        } catch (error) {
            console.error("Error loading home page:", error);
        }
    }

    return (
        <nav className={`${!article ? 'bg-[#FFFFFF]' : 'bg-[#707F65] bg-opacity-120'} border-b-2 border-[#F1F1F1] fixed w-full z-20 top-0 start-0 `}>
            <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
                <div className="flex mr-auto items-start justify-between md:w-auto order-1" id="navbar-sticky">
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
                                    onClick={article ? backtoSearchPage : backToHome}
                                >
                                    <IoArrowBack className={`${!article ? 'text-[#707F65]' : 'text-[#F1F1F1]'} text-2xl `} />

                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='hidden lg:flex'>
                                <p
                                    className="rounded-3xl bg-transparent md:text-[15px] text-center p-2  w-25 h-10 cursor-pointer"
                                    onClick={backToModPage}
                                >
                                    <IoArrowBack className={`${!article ? 'text-[#707F65]' : 'text-[#F1F1F1]'} text-2xl `} />

                                </p>
                            </div>
                        </>
                    )}
                </div>

                {/* profile part  */}
                <div class="flex ml-auto order-2 md:space-x-0 rtl:space-x-reverse">
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
                    ) : userRole === "moderator" && (
                        <>
                            <div className='flex flex-col'>
                                <b className={`xl:px-[40px] mr-3 mt-1 lg:mt-0 font-semibold ${!article ? 'text-black' : 'text-[#F1F1F1]'} text-[20px] lg:text-[24px] xl:text-[32px]`}>
                                    user name
                                </b>
                                <b className={`ml-7 xl:px-[40px]  lg:mt-0 font-semibold ${!article ? 'text-[#969796]' : 'text-[#0C0C0C91]'} text-[15px]`}>
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
