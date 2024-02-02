import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { openSidebarContext } from '../../../context/openSidebarContext';
import { IoMenu } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import avatar from "../../../assets/image.jpg"

const NavBar = ({ userRole, article, pageCallingArticle }) => {
    const {token, id, userName} = useAuth();
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

    function backtoCollectionPage() {
        try {
            navigate(`/collections`);
        } catch (error) {
            console.error("Error loading home page:", error);
        }
    }

    return (
        <nav className={`${!article ? 'bg-[#FFFFFF]' : 'bg-[#707F65] bg-opacity-120'} border-b-2 border-[#F1F1F1] fixed w-full z-20 top-0 start-0 `}>
            <div className="max-w-screen-xl flex flex-row relative h-[75px] items-center justify-between mx-auto p-4">
                <div className="absolute left-5 items-start justify-between md:w-auto order-1" id="navbar-sticky">
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
                                    className="rounded-3xl bg-transparent md:text-[15px] text-center p-2 w-25 h-10 cursor-pointer"
                                    onClick={article ? (pageCallingArticle === 'home' ? backtoSearchPage : backtoCollectionPage) : backToHome}
                                >
                                    <IoArrowBack className={`${!article ? 'text-[#707F65]' : 'text-[#F1F1F1]'} text-2xl `} />

                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex'>
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
                <div className='absolute right-2'>
                    <div className="flex order-2 md:space-x-0 rtl:space-x-reverse">
                        {userRole === "client" ? (
                            <>
                                {/* font DM sans */}
                                <div className="h-8 border-l-2 border-solid border-[#F1F1F1] mr-5 mt-1"></div>
                                <div className='flex'>
                                    <p className="xl:px-[40px] font-dmsansmedium mr-1 mt-1 lg:mt-2 font-semibold text-black text-[20px] lg:text-[20px] xl:text-[20px]">
                                        {userName}
                                    </p>
                                </div>
                                <Link to="/profile">
                                    <img
                                        className="w-10 h-10 rounded-full mx-3 cursor-pointer"
                                        src={avatar}
                                    />
                                </Link>
                            </>
                        ) : userRole === "moderator" && (
                            <>
                                <div className='flex flex-col'>
                                    <p className={`xl:px-[40px] mr-3 mt-1 lg:mt-0 ${!article ? 'text-black' : 'text-[#F1F1F1]'} font-dmsansmedium text-[20px] lg:text-[24px] xl:text-[32px]`}>
                                    {userName}
                                    </p>
                                    <p className={`ml-7 xl:px-[40px]  lg:mt-0 ${!article ? 'text-[#969796]' : 'text-[#0C0C0C91]'} font-dmsansmedium text-[15px]`}>
                                        Moderator
                                    </p>
                                </div>
                                <div>
                                    <img
                                        className="w-12 h-12 rounded-full mx-3 mt-1.5"
                                        src={avatar}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
