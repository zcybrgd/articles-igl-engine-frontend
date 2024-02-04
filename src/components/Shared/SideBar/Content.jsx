import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { TiHomeOutline } from "react-icons/ti";
import { FaUser } from "react-icons/fa6";
import { IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { openSidebarContext } from '../../../context/openSidebarContext';
import { useAuth } from '../../../context/AuthContext';

function Content() {
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);
    const { logout } = useAuth()

    const logOutHandler = async () => {
        logout();
    };

    return (
        <div className="py-4 h-[90%] overflow-y-auto items-center">
            <ul className="relative h-full space-y-2 font-medium">
                {/* butto to come back to home page added in the sidebar for mobile/tabelette version, for large screens, the button is in the navbar */}
                {mobileOpen && (
                    <li>
                        <Link to="/" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                            <TiHomeOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                            <span className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">Home</span>
                        </Link>
                    </li>
                )}
                <li>
                    <Link to="/profile" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* profile icon */}
                        <FaUser className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">User Info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/collections" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* saved icon */}
                        <IoBookmarkOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">Saved</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* settings icon */}
                        <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white">Settings</span>
                    </Link>
                </li>

                {/* logout button  */}
                <li className="absolute bottom-3 w-full">
                    <div className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* logOut icon */}
                        <VscSignOut className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span
                            className="ms-3 whitespace-nowrap font-dmsansmedium transition-colors group-hover:text-white cursor-pointer"
                            onClick={() => {
                                logOutHandler();
                            }}
                        >Log out</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Content;