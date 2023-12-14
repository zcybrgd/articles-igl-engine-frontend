import { Outlet } from "react-router-dom";
import { useState } from "react";
import { openSidebarContext } from "../context/openSidebarContext";
import Sidebar from "../components/Shared/SideBar/SideBar";
import Navbar from "../components/Shared/NavBar/NavBar";

const Layout = ({ userRole }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex">
            <openSidebarContext.Provider value={{ mobileOpen, setMobileOpen }}>
                <Navbar userRole={userRole} />
                <Sidebar />
            </openSidebarContext.Provider>

            <div className="pt-15 pl-0 lg:pl-60">
                <div className="md:p-10 pt-10 mt-5 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
