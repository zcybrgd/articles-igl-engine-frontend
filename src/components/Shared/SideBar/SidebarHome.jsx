import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { openSidebarContext } from '../../../context/openSidebarContext';
import { Link as ScrollLink } from 'react-scroll';
import { IoMenu } from "react-icons/io5";


function SidebarHome({ connected }) {
    const navigate = useNavigate()
    const { mobileOpen, setMobileOpen } = useContext(openSidebarContext);

    const closeSidebar = () => {
        setMobileOpen(false);
    }; handleWelcome

    function handleWelcome() {
        closeSidebar();
        navigate("/welcome")
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
                            {/* To home section  */}
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                className="flex p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white"
                                onClick={() => connected && handleWelcome()}
                            >
                                <span className="whitespace-nowrap cursor-pointer font-dmsansbold transition-colors group-hover:text-white">Home</span>
                            </ScrollLink>
                            <div className="border-b-2 text-[#F1F1F1]"></div>
                        </li>
                        <li>
                            {/* To about section  */}
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className="flex p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white"
                                onClick={() => connected && handleWelcome()}
                            >
                                <span className="whitespace-nowrap font-dmsansbold cursor-pointer transition-colors group-hover:text-white">About Us</span>
                            </ScrollLink>
                            <div className="border-b-2 text-[#F1F1F1]"></div>
                        </li>
                        <li>
                            {/* To contact section  */}
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="flex p-2 pl-8 text-[#F1F1F1] rounded-lg group transition-colors hover:bg-[#434343] hover:text-white"
                                onClick={() => connected && handleWelcome()}
                            >
                                <span className="whitespace-nowrap cursor-pointer font-dmsansbold transition-colors group-hover:text-white">Contact Us</span>
                            </ScrollLink>
                            <div className="border-b-2 text-[#F1F1F1]"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarHome;