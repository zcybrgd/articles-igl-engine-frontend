import React from "react"
import { HiOutlineDocumentText } from "react-icons/hi2";
import { BsHourglass } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

/**
 * Functional component representing a statistical card with a title and value.
 *
 * @function
 * @param {Object} props 
 * @param {string} props.title 
 * @param {string | number} props.value 
 * @returns {JSX.Element} 
 */
function StatCard({ title, value }) {

    return (
        <div className="flex flex-row space-x-5 border-2 border-[#707F65] justify-center items-center rounded-3xl p-5 py-10 w-full md:w-1/3">
            <div className="flex flex-col justify-start items-start text-start w-2/3">
                <p className="text-[15px] text-[#797D8C] font-dmsansmedium">{title}</p>
                <p className="text-black text-[50px] font-dmsansbold m-0 p-0 block">{value}</p>
            </div>
            <div className="flex w-1/3 justify-end items-center">
                {title === 'Total articles' ? (
                    <HiOutlineDocumentText className="text-[#434343] text-[80px]" />
                ) : title === 'Unreviewed' ? (
                    <BsHourglass className="text-[#434343] text-[80px]" />
                ) : title === 'Deleted' && (
                    <MdDeleteOutline className="text-[#434343] text-[80px]" />
                )}
            </div>
        </div>
    )
}

export default StatCard;