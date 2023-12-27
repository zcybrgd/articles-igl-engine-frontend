import React from "react";
import { useLocation } from "react-router-dom";
import UploadSection from "./UploadSection";
import LastEditSection from "./LastEditSection";
import ModeratorsSection from "./ModeratorsSection";
import { useAuth } from "../../context/AuthContext";

function AdminPage() {
    const { logout } = useAuth()
    const handleLogout = () => {
        logout(); 
      };
    return (
        <div className="flex flex-col space-y-20">
            {/* upload Section */}
            <UploadSection />

            {/* last edit section  */}
            <LastEditSection />

            {/* moderators section */}
            <ModeratorsSection />
     
        <button onClick={handleLogout} className="bg-[#707F65] text-black p-2 rounded-xl w-1/5">
          Logout
        </button>
         
        </div>
    )
}
export default AdminPage;
