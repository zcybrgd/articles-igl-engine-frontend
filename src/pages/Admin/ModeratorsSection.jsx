import React, { useEffect, useState } from "react"
import Moderator from "../../components/Moderator/Moderator"
//import { moderators } from "../../testing Data/ModeratorsList"
import {fetchModerators} from "../../services/modApi";

function ModeratorsSection() {
    const [moderators, setModerators] = useState([]);
    useEffect(() => {
        const fetchModeratorsData = async () => {
          try {
            const mods = await fetchModerators();
            setModerators(mods);
            console.log("moderators: ", mods)
          } catch (error) {
            console.error("Error fetching moderators:", error);
          }
        };
    
        fetchModeratorsData();
      }, []); 
    const renderModerators = () => {
        if (moderators && moderators.length <= 5) {
            // If there are 5 or fewer tasks, render them all.
            return (
                <div className="flex flex-col items-center justify-center space-y-5 mb-5">
                    {moderators && moderators.map((moderator, index) => (
                        <Moderator key={index} moderator={moderator} />
                    ))}
                </div>
            );
        } else {
            // If there are more than 3 members, render a scrollable container.
            return (
                <div className="flex flex-col items-center space-y-5 mb-5"
                    style={{
                        maxHeight: '460px',
                        overflowY: 'scroll',
                    }}>
                    {moderators && moderators.map((moderator, index) => (
                        <Moderator key={index} moderator={moderator} />
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col pb-10 border rounded-t-3xl w-[100%] bg-[#181818]">
            {/* Moderators part  */}
            <div className="flex flex-col items-center justify-center p-5 mb-5">
                <p className="text-[#FFFFFF] text-[32px] font-bold ">Moderators</p>
            </div>

            {/* list of moderators part  */}
            {renderModerators()}
        </div>
    )
}

export default ModeratorsSection
