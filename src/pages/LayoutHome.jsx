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
                        <SidebarHome />
                    </openSidebarContext.Provider>

                    <div className="absolute top-0 left-0 right-0">
                        <Outlet />
                    </div>
                </>
            ) : (
                <>
                    <NavbarHome userRole={userRole} />
                    <div className="pt-16 pl-0">
                        <div className="md:p-10 pt-10">
                            <Outlet />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LayoutHome;
