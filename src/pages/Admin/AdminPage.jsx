import React from "react";
import UploadSection from "./UploadSection";
import LastEditSection from "./LastEditSection";
import ModeratorsSection from "./ModeratorsSection";

function AdminPage() {
    return (
        <div className="flex flex-col space-y-20 mt-10">
            {/* upload Section */}
            <UploadSection />

            {/* last edit section  */}
            <LastEditSection />

            {/* moderators section */}
            <ModeratorsSection />
        </div>
    )
}
export default AdminPage;