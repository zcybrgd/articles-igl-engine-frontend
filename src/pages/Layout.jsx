import { Outlet } from "react-router-dom";
import { useState } from "react";
import { openSidebarContext } from "../context/openSidebarContext"
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Sidebar from "../components/SideBar/SideBar";
import Navbar from "../components/NavBar/NavBar";

const Layout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div>
            {/* Creating a context to share the state of the sidebar (open / closed) between the Navbar and the Sidebar, since the icon to handle the opening and closing of the sidebar is in the Navbar component. */}
            <openSidebarContext.Provider value={{ mobileOpen, setMobileOpen }}>
                <Navbar />
                <Sidebar />
            </openSidebarContext.Provider>
            {/* Outlet are the childrens of the router, each time we change the page, the content will change which will be inside Outlet */}
            {/* Outlet is the place where the content will be rendered */}
            {/* Adding padding top and left to not let it touch with navbar and sidebar */}
            <Box
                sx={{
                    paddingTop: "64px",
                    paddingLeft: { lg: "115px", md: "0px" },
                }}
            >
                <OutletStyle>
                    <Outlet />
                </OutletStyle>
            </Box>
        </div>
    );
};

const OutletStyle = styled("div")({
    // this padding is for the the content inside the outlet after the resize in PageContentStyle
    // now we padding top 40px from the navbar and 20px from the sidebar, same for other remainig sides(right, bottom)
    // did this so the content won't touch the navbar and sidebar
    padding: "40px 20px",
});

export default Layout;
