import React, { useEffect, useState } from "react"
import Moderator from "../../components/Moderator/Moderator"
import { useNavigate } from 'react-router-dom';
import { AdmdeleteModerator, fetchModerators } from "../../services/modApi";
import { useAuth } from "../../context/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


/**
 * List Of Moderators' part in the admin page
 * @date 2/4/2024 - 5:38:52 PM
 *
 * @returns {*}
 */
function ModeratorsSection() {
    const navigate = useNavigate();
    const { token } = useAuth()
    const [moderators, setModerators] = useState([]);


    useEffect(() => {
        /**
        * Fetches moderators' data using the provided token and updates the component state with the obtained data.
        *
        * @throws {Error} 
        */
        const fetchModeratorsData = async () => {
            try {
                /**
                 * Fetches moderators' data using the provided token.
                 *
                 * @param {string} token - The authentication token.
                 * @returns {Promise<Array>} A promise that resolves to an array of moderators' data.
                 */
                const mods = await fetchModerators(token);

                // Update the component state with the obtained moderators' data.
                setModerators(mods);
            } catch (error) {
                // Log an error message if there's an issue fetching moderators' data.
                console.error("Error fetching moderators:", error);
            }
        };


        fetchModeratorsData();
    }, []);

    /**
    * Renders a list of moderators based on the current state. If there are 5 or fewer moderators,
    * they are rendered without a scrollable container. If there are more than 5 moderators,
    * a scrollable container is rendered.
    *
    * @returns {JSX.Element} 
    */
    const renderModerators = () => {
        if (moderators && moderators.length <= 5) {
            // If there are 5 or fewer moderators, render them all.
            return (
                <div className="flex flex-col items-center justify-center space-y-5 mb-5">
                    {moderators && moderators.map((moderator, index) => (
                        <Moderator key={index} moderator={moderator} deleteModerator={() => deleteModerator(moderator.id)} modifierModerator={() => modifierModerator(moderator.id)} />
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
                        <Moderator key={index} moderator={moderator} deleteModerator={() => deleteModerator(moderator.id)} modifierModerator={() => modifierModerator(moderator.id)} />
                    ))}
                </div>
            );
        }
    };

    /**
    * Deletes a moderator with the specified ID and provides feedback via console logs and toasts.
    *
    * @param {string} modid - The ID of the moderator to be deleted.
    * @throws {Error} Throws an error if there's an issue deleting the moderator.
    */
    const deleteModerator = async (modid) => {
        console.log("mod id: ", modid);

        try {
            /**
            * Deletes a moderator using the provided token and moderator ID.
            *
            * @param {string} token 
            * @param {string} modId 
            * @returns {Promise<Array>} 
            */
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

    /**
    * Navigates to the 'modifyModerator' page with the specified moderator ID.
    *
    * @param {string} modid 
    * @throws {Error} 
    */
    const modifierModerator = async (modid) => {
        try {
            /**
            * Navigates to the 'modifyModerator' page with the specified moderator ID.
            *
            * @param {string} path 
            * @param {Object} state 
            */
            navigate(`/modifyModerator/${modid}`, { state: { modid } });
        } catch (error) {
            console.error("Error loading Add new moderator page:", error);
        }
    }

    /**
    * Navigates to the 'newModerator' page for adding a new moderator.
    *
    * @throws {Error} 
    */
    function addModerator() {
        try {
            /**
            * Navigates to the 'newModerator' page for adding a new moderator.
            *
            * @param {string} path
            */
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
                        <div className="w-20"></div>
                    </div>

                    {/* name part  */}
                    <div className="flex w-1/7 justify-end items-center">
                        <p className="text-white font-opensansmedium text-[10px]">Fullname</p>
                    </div>

                    {/* total edits part  */}
                    <div className="flex w-1/5 items-center justify-center">
                        <p className="text-white font-opensansmedium text-[10px]">Total edits</p>
                    </div>

                    {/* user name part */}
                    <div className="flex w-1/10 items-center justify-end">
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