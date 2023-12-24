import React, { useContext } from "react";
import { openSidebarContext } from '../../../context/openSidebarContext';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";


function SidebarHome() {
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    const closeSidebar = () => {
        setMobileOpen(false);
    };

    return (
        <div>

            {/* Drawer component */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-[#1B1B1BF2] bg-opacity-95`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                {/* sideBar content */}
                {/* button to close the sideBar */}
                <div className="flex mb-10">
                    <p
                        type="button"
                        onClick={closeSidebar}
                        aria-controls="drawer-navigation"
                        className="bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center cursor-pointer"
                    >
                        <IoMenu className="text-[#797D8C] text-3xl mt-3" />
                    </p>
                </div>

                <div className="py-4 overflow-y-auto mt-5">
                    <ul className="space-y-2 font-medium">
                        <li>
                            {/* change the routing */}
                            <Link to="/search" className="flex p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white">
                                <span className="whitespace-nowrap transition-colors group-hover:text-white">Home</span>
                            </Link>
                            <div className="border-b-2 text-[#F1F1F1]"></div>
                        </li>
                        <li>
                            {/* change the routing */}
                            <Link to="/collections" className="flex p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white">
                                <span className="whitespace-nowrap transition-colors group-hover:text-white">About Us</span>
                            </Link>
                            <div className="border-b-2 text-[#F1F1F1]"></div>
                        </li>
                        <li>
                            {/* change the routing */}
                            <Link to="/settings" className="flex p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white">
                                <span className="whitespace-nowrap transition-colors group-hover:text-white">Contact Us</span>
                            </Link>
                            <div className="border-b-2 text-[#F1F1F1]"></div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarHome;