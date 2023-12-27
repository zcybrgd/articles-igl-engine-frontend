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
                <Navbar userRole={userRole} article={false} />
                <Sidebar />
            </openSidebarContext.Provider>

            <div className="absolute top-0 right-0 left-0 items-center justify-center pt-12 pl-0 lg:pl-60 ">
                <div className="md:p-10 pt-10 mt-5 w-[100%]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
