import React, { useState, useContext } from "react";
import { openSidebarContext } from '../../../context/openSidebarContext';
import { Link, useNavigate } from 'react-router-dom';


function SidebarHome() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };
    return (
        <div>

            {/* Drawer component */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-[#1B1B1BF2] bg-opacity-95 mt-20 border-t-3 border-x-2 border-[#F1F1F1]`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                {/* sideBar content */}
                {/* button to close the sideBar */}
                <div className="flex mb-5">
                    <button
                        type="button"
                        onClick={closeSidebar}
                        aria-controls="drawer-navigation"
                        className="bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
                    >
                        {/* <CgCloseR className="text-[#707F65] text-lg" /> */}
                    </button>
                </div>

                <div class="py-4 overflow-y-auto items-start justify-start">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link to="/profile" className="flex items-start p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white">
                                <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">Home</span>
                            </Link>
                            <div class="border-b-2 text-[#F1F1F1]"></div>
                        </li>
                        <li>
                            <Link to="/collections" className="flex items-start p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white">
                                <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">About Us</span>
                            </Link>
                            <div class="border-b-2 text-[#F1F1F1]"></div>
                        </li>
                        <li>
                            <Link to="/settings" className="flex items-start p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white">
                                <span className="ms-3 whitespace-nowrap transition-colors group-hover:text-white">Contact Us</span>
                            </Link>
                            <div class="border-b-2 text-[#F1F1F1]"></div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarHome;