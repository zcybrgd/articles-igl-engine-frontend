import React from "react";
import UploadSection from "./UploadSection";
import ModeratorsSection from "./ModeratorsSection";
import Footer from '../../components/Shared/Footer/Footer';
import StatsSection from "./StatsSection";
import { useAuth } from "../../context/AuthContext";
function AdminPage() {
    const { logout } = useAuth()

    const handleLogout = () => {
        logout();
    };
    return (
        <>
            <div className="flex flex-col space-y-20 mt-10">
                {/* upload Section */}
                <UploadSection />

                {/* statistics section  */}
                <StatsSection />

                {/* moderators section */}
                <ModeratorsSection />
            </div>
            <button onClick={handleLogout} className="bg-[#707F65] text-black p-2 rounded-xl w-1/5">
                Logout
            </button>
            {/* Footer */}
            <div className="app absolute right-0 left-0 w-full mt-32">
                <Footer />
            </div>
        </>
    )
}
export default AdminPage;