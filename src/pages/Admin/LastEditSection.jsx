import React from "react"
import ModeratorHistory from "../../components/Moderator/ModeratorHistory"
import { moderators } from "../../testing Data/ModeratorsList"

function LastEditSection() {

    const renderModerators = () => {
        if (moderators && moderators.length <= 5) {
            // If there are 5 or fewer tasks, render them all.
            return (
                <div className="flex flex-col items-center justify-center space-y-5 mb-5">
                    {moderators && moderators.map((moderator, index) => (
                        <ModeratorHistory key={index} moderator={moderator} />
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
                        <ModeratorHistory key={index} moderator={moderator} />
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col border-2 rounded-3xl w-[100%]">
            {/* title part  */}
            <div className="flex flex-col items-start justify-start p-5 mb-5">
                <p className="text-black text-[32px] font-dmsansbold ">Last edit</p>
                <p className="text-[#797D8C] text-[16px] font-dmsansbold ">Representative of the files modifications</p>
            </div>

            {/* history part  */}
            {renderModerators()}
        </div>
    )
}

export default LastEditSection
