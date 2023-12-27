import React from "react"
import { MdFolderOpen } from "react-icons/md";

const Collection = ({
    collectionName,
    nbArticles
}) => {

    return (
        <div className="flex flex-col rounded-xl bg-[#F1F1F1] p-3 ">
            <div className="flex items-center rounded-xl bg-[#FFFFFF] p-2 pl-5 mb-2 mt-2 ml-2 mr-2">
                <MdFolderOpen className=" text-black" size={100} />
            </div>
            <div className="flex flex-col w-full items-center rounded-2xl bg-[#FFFFFF] pl-10 pr-10 pt-0.5 pb-0.5">
                <p className="text-[15px] font-dmsansbold text-[#707F65]">{collectionName}</p>
                <p className="text-[13px] font-dmsansmedium text-[#969796]">{nbArticles} articles</p>
            </div>
        </div>
    )
}

export default Collection
