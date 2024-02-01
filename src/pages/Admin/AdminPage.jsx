import React, { useState } from "react";
import ReactPlayer from 'react-player';
import UploadSection from "./UploadSection";
import ModeratorsSection from "./ModeratorsSection";
import Footer from '../../components/Shared/Footer/Footer';
import StatsSection from "./StatsSection";
import uploadAnimation from "../../assets/Loader.mp4"

function AdminPage() {
    const [isUploading, setIsUploading] = useState(false);

    if (isUploading) {
        return (
            <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center animate-in fade-in zoom-in duration-500">
                <ReactPlayer
                    url={uploadAnimation}
                    playing={true}
                    controls={false}
                    loop={true}
                    width="840px"
                    height="560px"
                />
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col space-y-20 mt-10">
                {/* upload Section */}
                <UploadSection setIsUploading={setIsUploading} />

                {/* statistics section  */}
                <StatsSection />

                {/* moderators section */}
                <ModeratorsSection />
            </div>

            {/* Footer */}
            <div className="app absolute right-0 left-0 w-full mt-32">
                <Footer />
            </div>
        </>
    )
}
export default AdminPage;