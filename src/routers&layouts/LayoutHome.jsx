import { Outlet } from "react-router-dom";
import NavbarHome from "../components/Shared/NavBar/NavbarHome";
import SidebarHome from "../components/Shared/SideBar/SidebarHome";
import { useState } from "react";
import { openSidebarContext } from "../context/openSidebarContext";

const LayoutHome = ({ userRole }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex">
            {userRole === "client" ? (
                //client part 
                <>
                    <openSidebarContext.Provider value={{ mobileOpen, setMobileOpen }}>
                        <NavbarHome userRole={userRole} />
                        <SidebarHome connected={true} />
                    </openSidebarContext.Provider>

                    <div className="absolute top-0 left-0 right-0">
                        <Outlet />
                    </div>
                </>
            ) : (
                //admin and moderator part 
                <>
                    <NavbarHome userRole={userRole} />
                    <div className="pt-16 md:p-8">
                        <Outlet />
                    </div>
                </>
            )}
        </div>
    );
};

export default LayoutHome;
