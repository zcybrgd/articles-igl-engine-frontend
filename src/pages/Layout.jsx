import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { openSidebarContext } from "../context/openSidebarContext";
import Sidebar from "../components/Shared/SideBar/SideBar";
import Navbar from "../components/Shared/NavBar/NavBar";

const Layout = ({ userRole }) => {
    
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex">
            <openSidebarContext.Provider value={{ mobileOpen, setMobileOpen }}>
                <Navbar userRole={userRole} article={false} />
                <Sidebar />
            </openSidebarContext.Provider>

            <div className="pt-10 mt-5 ">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
