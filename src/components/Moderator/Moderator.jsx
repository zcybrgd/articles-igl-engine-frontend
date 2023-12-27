import React from "react"
import { BiDotsVerticalRounded } from "react-icons/bi";

function Moderator({ moderator }) {

    return (
        <div className="flex flex-row border rounded-2xl md:p-3 md:px-10 px-5 items-center space-x-3 bg-[#FFFFFF] md:space-x-10 lg:space-x-20 w-[95%] md:w-[90%]">
            {/* profile image  part  */}
            <div className="hidden md:flex w-1/6">
                <div className="md:w-10 md:h-10 rounded-full overflow-hidden" >
                    <img src={moderator.imgUrl} alt="Profile Image" className="w-full h-full object-cover" />
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
            <div className="flex w-1/4">
                <p className="text-[#797D8C] text-[13px] font-dmsans md:text-[16px]">{moderator.lasteditedArticle}</p>
            </div>

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
            <div className="flex w-1/8 cursor-pointer" > {/*onClick={} */}
                <BiDotsVerticalRounded className="text-[#797D8C] text-[15px] md:text-[23px]" />
            </div>

        </div>
    )
}

export default Moderator
