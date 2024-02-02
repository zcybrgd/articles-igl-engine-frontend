import { createContext } from "react";

export const openSidebarContext = createContext({
    mobileOpen: false,
    setMobileOpen: (value) => { },
});

