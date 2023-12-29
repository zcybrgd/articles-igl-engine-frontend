import React, { useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import ArticleForMod from "../../assets/ArticleForMod.svg"
import { moderators } from "../../testing Data/ModeratorsList";

function Moderator({ moderator, deleteModerator }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const profilePictureUrl = moderator.profile_picture || '/media/profile_pics/default_profile_pic.jpg';

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // const handleModify = (moderatorId) => {
    //     console.log(`Modify moderator with ID ${moderatorId}`);
    // };

    // const handleDelete = (moderatorId) => {
    //     console.log(`Delete moderator with ID ${moderatorId}`);
    // };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="flex flex-row rounded-2xl md:p-3 md:px-10 px-5 items-center space-x-3 bg-[#FFFFFF] md:space-x-10 lg:space-x-16 w-[95%] md:w-[90%]">
            {/* profile image  part  */}
            <div className="hidden md:flex w-1/10">
                <div
                    className="md:w-10 md:h-10 rounded-full bg-black"
                    style={{ backgroundImage: `url(${profilePictureUrl})`, backgroundSize: 'cover' }}
                ></div>
            </div>

            {/* name part  */}
            <div className="flex w-1/5">
                <p className="text-[#797D8C] text-[13px] font-dmsans md:text-[18px]">{moderator.familyName} {moderator.firstName}</p>
            </div>

            {/* total edits part  */}
            <div className="flex w-1/5 items-center justify-center">
                <p className="text-black text-[13px] font-dmsansbold md:text-[16px] ">{moderator.numberedits} edit</p>
            </div>

            {/* user name part */}
            <div className="flex w-1/10">
                <p className="text-[#797D8C] text-[13px] font-dmsans md:text-[16px]">{moderator.userName}</p>
            </div>

            {/* "retirer" button part  */}
            <div className="flex w-1/5">
                <p className="text-[#F72A1D] text-[13px] font-dmsansmedium md:text-[16px] cursor-pointer" onClick={deleteModerator}>- Retirer</p>
            </div>

            {/* select button part  */}
            <div className="flex w-1/10 ">
                <input
                    id={moderator.userId}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="hidden"
                />
                <label
                    htmlFor={moderator.userId}
                    className={`relative w-4 h-4 cursor-pointer text-center  justify-center items-center ${isChecked ? 'bg-[#43BE83]' : 'bg-[#D9D9D9]'
                        } border-[#D9D9D9] rounded transition-all duration-100`}
                >
                    {isChecked && <FaCheck className="absolute text-white w-3 h-3 top-0.5 left-0.5" />}
                </label>
            </div>

            {/* edited articles part  */}
            <div className="flex relative w-1/10 cursor-pointer" onClick={toggleDropdown}>
                <BiDotsVerticalRounded className="text-[#797D8C] text-[15px] md:text-[23px]" />

                {/* Dropdown Options*/}
                {dropdownVisible && (
                    <div className="absolute top-2 right-2 z-10 w-[150px] md:w-[280px] mt-2 bg-white border rounded-md shadow-lg p-5">
                        <div className="related">
                            <div className="absolute left-3 top-3">
                                <img src={ArticleForMod} alt="article icon" className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <div className="flex justify-center items-center mt-8 md:mt-10">
                                <div className="flex flex-col text-start space-y-3 my-2">
                                    {moderator.editedArticles && moderator.editedArticles.map((article, index) => (
                                        <p className="text-black text-[10px] md:text-[15px] font-dmsansbold">•{article.title}</p>
                                    ))}
                                    {/* <button onClick={() => handleModify(moderator.id)} className="block px-5 py-2 text-sm bg-white text-gray-700 ">Modify</button>
                                     <button onClick={() => handleDelete(moderator.id)} className="block px-5 py-2 text-sm bg-white text-gray-700">  Delete</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Moderator