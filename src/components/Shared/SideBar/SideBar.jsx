import React, { useContext } from "react";
import { openSidebarContext } from '../../../context/openSidebarContext';
import Content from "./Content";


function Sidebar() {
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    return (
        <div>
            {/* ***mobile or tablette version*** */}
            <div className="lg:hidden ">
                {/* Drawer component */}
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                        } bg-[#FFFFFF] mt-20 border-t-3 border-e-4 border-[#F1F1F1]`}
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
                <div
                    id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-[#FFFFFF] mt-20 border-t-3 border-e-4 border-[#F1F1F1]`}
                    tabIndex="-1"
                    aria-labelledby="drawer-navigation-label"
                >

                    {/* sideBar content */}
                    <Content />
                </div>
            </div>
            {/* ******* */}

        </div>
    );
}

export default Sidebar;