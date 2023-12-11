import { Outlet } from "react-router-dom";
import { useState } from "react";
import { openSidebarContext } from "../context/openSidebarContext";
import Sidebar from "../components/Shared/SideBar/SideBar";
import Navbar from "../components/Shared/NavBar/NavBar";

const Layout = ({ userRole }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex">
            {userRole === "client" ? (
                //client part 
                <>
                    <openSidebarContext.Provider value={{ mobileOpen, setMobileOpen }}>
                        <Navbar userRole={userRole} />
                        <Sidebar />
                    </openSidebarContext.Provider>

                    <div className="pt-16 pl-0 md:pl-72">
                        <div className="p-10">
                            <Outlet />
                        </div>
                    </div>
                </>
            ) : userRole === "admin" ? (
                //admin part 
                <>
                    <Navbar userRole={userRole} />

                    <div className="pt-16 pl-0 ">
                        <div className="p-10">
                            <Outlet />
                        </div>
                    </div>
                </>
            ) : (
                //moderator part 
                <>
                    <Navbar userRole={userRole} />

                    <div className="pt-16 pl-0 md:pl-72">
                        <div className="p-10">
                            <Outlet />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Layout;
