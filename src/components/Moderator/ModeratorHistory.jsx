import React, { useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi";

function Moderator({ moderator }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const profilePictureUrl = moderator.profile_picture || '/media/profile_pics/default_profile_pic.jpg';

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleModify = (moderatorId) => {
        console.log(`Modify moderator with ID ${moderatorId}`);
    };

    const handleDelete = (moderatorId) => {
        console.log(`Delete moderator with ID ${moderatorId}`);
    };

    return (
        <div className="flex flex-row border rounded-2xl md:p-3 md:px-10 px-5 items-center space-x-3 bg-[#FFFFFF] md:space-x-10 lg:space-x-20 w-[95%] md:w-[90%]">
            {/* profile image  part  */}
            <div className="hidden md:flex w-1/6">
                <div className="md:w-40 md:h-10 rounded-full " >
                    <div
                        className="md:w-10 md:h-10 rounded-full bg-black"
                        style={{ backgroundImage: `url(${profilePictureUrl})`, backgroundSize: 'cover' }}
                    ></div>
                </div>
            </div>

            {/* name part  */}
            <div className="flex w-1/4">
                <p className="text-[#797D8C] text-[13px] font-dmsans md:text-[18px]">{moderator.familyName} {moderator.firstName}</p>
            </div>

            {/* number of edits part  */}
            <div className="flex w-1/6 ">
                <p className="text-black text-[13px] font-dmsansbold md:text-[16px] ">{moderator.numberedits} edit</p>
            </div>

            {/* last article edited part */}
            {/* <div className="flex w-1/4">
                <p className="text-[#797D8C] text-[13px] font-dmsans md:text-[16px]">{moderator.lasteditedArticle}</p>
            </div> */}

            {/* changes part  */}
            {moderator.changes === "Deleted" ? (
                <div className="flex w-1/8">
                    <p className="text-[#F72A1D] text-[13px] font-dmsansmedium md:text-[16px]">{moderator.changes}</p>
                </div>
            ) : (
                <div className="flex w-1/8">
                    <p className="text-[#43BE83] text-[13px] font-dmsansmedium md:text-[16px]">{moderator.changes}</p>
                </div>
            )}

            {/* three dots part  */}
            <div className="flex w-1/8 cursor-pointer" onClick={toggleDropdown}>
                <BiDotsVerticalRounded className="text-[#797D8C] text-[15px] md:text-[23px]" />

                {/* Dropdown Options */}
                {dropdownVisible && (
                    <div className="absolute mt-2 bg-white border rounded-md shadow-lg">
                        <div className="py-1">
                            <button onClick={() => handleModify(moderator.id)} className="block px-5 py-2 text-sm bg-white text-gray-700 ">Modify</button>
                            <button onClick={() => handleDelete(moderator.id)} className="block px-5 py-2 text-sm bg-white text-gray-700">  Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Moderator