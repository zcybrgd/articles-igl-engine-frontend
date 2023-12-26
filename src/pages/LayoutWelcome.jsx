import { Outlet } from "react-router-dom";
import NavBarWelcome from "../components/Shared/NavBar/NavBarWelcome";
import SidebarHome from "../components/Shared/SideBar/SidebarHome";
import { useState } from "react";
import { openSidebarContext } from "../context/openSidebarContext";

const LayoutWelcome = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex">

            <openSidebarContext.Provider value={{ mobileOpen, setMobileOpen }}>
                <NavBarWelcome />
                <SidebarHome />
            </openSidebarContext.Provider>

            <div className="absolute top-0 left-0 right-0">
                <Outlet />
            </div>

        </div>
    );
};

export default LayoutWelcome;