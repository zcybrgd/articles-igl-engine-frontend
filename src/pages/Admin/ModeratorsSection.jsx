import React, { useEffect, useState } from "react"
import Moderator from "../../components/Moderator/Moderator"
// import { moderators } from "../../testing Data/ModeratorsList"
import { useNavigate } from 'react-router-dom';
import { AdmdeleteModerator, fetchModerators } from "../../services/modApi";
import { useAuth } from "../../context/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ModeratorsSection() {
    const navigate = useNavigate();
    const { token } = useAuth()
    const [moderators, setModerators] = useState([]);
    useEffect(() => {
        const fetchModeratorsData = async () => {
            try {
                const mods = await fetchModerators(token);
                setModerators(mods);
            } catch (error) {
                console.error("Error fetching moderators:", error);
            }
        };

        fetchModeratorsData();
    }, []);

    const renderModerators = () => {
        if (moderators && moderators.length <= 5) {
            // If there are 5 or fewer moderators, render them all.
            return (
                <div className="flex flex-col items-center justify-center space-y-5 mb-5">
                    {moderators && moderators.map((moderator, index) => (
                        <Moderator key={index} moderator={moderator} deleteModerator={() => deleteModerator(moderator.id)} />
                    ))}
                </div>
            );
        } else {
            // If there are more than 5 moderators, render a scrollable container.
            return (
                <div className="flex flex-col items-center space-y-5 mb-5"
                    style={{
                        maxHeight: '460px',
                        overflowY: 'scroll',
                    }}>
                    {moderators && moderators.map((moderator, index) => (
                        <Moderator key={index} moderator={moderator} deleteModerator={() => deleteModerator(moderator.id)} />
                    ))}
                </div>
            );
        }
    };

    const deleteModerator = async (modid) => {
        console.log("mod id: ", modid);
        
        try {
            const responsedata = await AdmdeleteModerator(token, modid);
            
            if (Array.isArray(responsedata) && responsedata.length > 0) {
                const successMessage = responsedata[0];
                console.log(successMessage); // "Mod deleted successfully!!"
                toast.success(successMessage, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
            } else {
                console.log("Unexpected response format");
                toast.error('An unexpected error occurred', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An unexpected error occurred', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        }
    };

    function addModerator() {
        try {
            navigate(`/newModerator`);
        } catch (error) {
            console.error("Error loading Add new moderator page:", error);
        }
    }

    return (
        <div className="flex flex-col pb-10 border rounded-t-3xl w-[100%] bg-[#181818]">
            {/* Moderators part  */}
            <div className="flex flex-col items-center justify-center p-5">
                <p className="text-[#FFFFFF] text-[32px] font-dmsansbold">Moderators</p>
            </div>

            {/* "Ajouter" button part */}
            <div className="flex relative pb-5 mb-8">
                <button
                    className=" absolute right-10 rounded-2xl bg-[#43BE83] text-white text-[12px] font-dmsans md:text-[13px] text-center py-0.5 px-8 h-10 "
                    onClick={addModerator}
                >
                    Ajouter  +
                </button>
            </div>

            {/* titles part  */}
            <div className="flex w-[100%] justify-center items-end">
                <div className="flex flex-row md:p-3 md:px-10 px-5 space-x-2 md:space-x-8 lg:space-x-15 w-[95%] md:w-[90%]">
                    {/* profile image  part  */}
                    <div className="hidden md:flex w-1/10">
                        <div className="w-10"></div>
                    </div>

                    {/* name part  */}
                    <div className="flex w-1/5 justify-end items-center">
                        <p className="text-white font-opensansmedium text-[10px]">Fullname</p>
                    </div>

                    {/* total edits part  */}
                    <div className="flex w-1/5 items-center justify-end">
                        <p className="text-white font-opensansmedium text-[10px]">Total edits</p>
                    </div>

                    {/* user name part */}
                    <div className="flex w-1/5 items-center justify-end">
                        <p className="text-white font-opensansmedium text-[10px]">Username</p>
                    </div>

                    {/* "retirer" button part  */}
                    <div className="flex w-1/5 items-center justify-center">
                        <p className="text-white font-opensansmedium text-[10px]"></p>
                    </div>

                    {/* select button part  */}
                    <div className="flex w-1/6 items-center justify-end">
                        <p className="text-white font-opensansmedium text-[10px]">Select all</p>
                    </div>

                    {/* edited articles part  */}
                    <div className="flex w-1/10 items-center justify-end">
                        <p className="text-white font-opensansmedium text-[10px]">Articles edited</p>
                    </div>
                </div>
            </div>
            {/* list of moderators part  */}
            {renderModerators()}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default ModeratorsSection