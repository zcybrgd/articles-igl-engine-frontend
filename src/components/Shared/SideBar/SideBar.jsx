import React, { useState, useContext } from "react";
import { openSidebarContext } from '../../../context/openSidebarContext';
import { CgCloseR } from "react-icons/cg";
import Content from "./Content";


function Sidebar() {
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
            {/* ***mobile or tablette version*** */}
            <div className="lg:hidden ">
                {/* Drawer component */}
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                        } bg-[#FFFFFF] mt-20 border-t-3 border-[#F1F1F1]`}
                    tabIndex="-1"
                    aria-labelledby="drawer-navigation-label"
                >
                    {/* sideBar content */}
                    <Content />
                </div>
            </div>
            {/* ******* */}

            {/* ***Large screens version*** */}
            <div className="hidden lg:flex">
                {/* Drawer init and show */}
                <div className="absolute start-3 top-12 pt-10 text-center">
                    <button
                        className="text-white bg-[#707F65] focus:ring-4 focus:ring-[#707F65] font-medium rounded-lg text-sm focus:outline-none"
                        type="button"
                        onClick={openSidebar}
                        aria-controls="drawer-navigation"
                    >
                        Show navigation
                    </button>
                </div>
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } bg-[#FFFFFF] mt-20 border-t-3 border-[#F1F1F1]`}
                    tabIndex="-1"
                    aria-labelledby="drawer-navigation-label"
                >
                    {/* button to close the sideBar */}
                    <div className="flex mb-5">
                        <button
                            type="button"
                            onClick={closeSidebar}
                            aria-controls="drawer-navigation"
                            className="bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
                        >
                            <CgCloseR className="text-[#707F65] text-lg" />
                        </button>
                    </div>

                    {/* sideBar content */}
                    <Content />
                </div>
            </div>
            {/* ******* */}

        </div>
    );
}

export default Sidebar;