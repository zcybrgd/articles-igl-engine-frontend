import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { TiHomeOutline } from "react-icons/ti";
import { FaUser } from "react-icons/fa6";
import { IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { openSidebarContext } from '../../../context/openSidebarContext';
import Cookies from "js-cookie";

function Content() {
    const navigate = useNavigate();
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    const logOutHandler = async () => {
        try {
            navigate(`/`);  //go back to the welcome page

            //logOut integration part 
        } catch (error) {
            console.error("Error loading FavoriArticlesListPage:", error);
        }
    };

    return (
        <div class="py-4 overflow-y-auto items-center">
            <ul class="space-y-2 font-medium">
                {/* butto to come back to home page added in the sidebar for mobile/tabelette version, for large screens, the button is in the navbar */}
                {mobileOpen && (
                    <li>
                        <Link to="/" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                            <TiHomeOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                            <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">Home</span>
                        </Link>
                    </li>
                )}
                <li>
                    <Link to="/profile" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* profile icon */}
                        <FaUser className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">User Info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/collections" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* saved icon */}
                        <IoBookmarkOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">Saved</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* settings icon */}
                        <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">Settings</span>
                    </Link>
                </li>
                {/**  empty buttons to put space between buttons **/}
                <li>
                    <Link to="/settings" className="invisible flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* settings icon */}
                        <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">empty</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="invisible flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* settings icon */}
                        <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">empty</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="invisible flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* settings icon */}
                        <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">empty</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="invisible flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* settings icon */}
                        <IoSettingsOutline className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">empty</span>
                    </Link>
                </li>
                {/* ****************** */}

                <li>
                    <div className="flex items-center p-2 pl-8 text-black rounded-lg group transition-colors hover:bg-[#707F65] hover:text-white">
                        {/* logOut icon */}
                        <VscSignOut className="text-2xl text-[#707F65] transition-colors group-hover:text-white" />
                        <span
                            className="ms-3 whitespace-nowrap transition-colors group-hover:text-white cursor-pointer"
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