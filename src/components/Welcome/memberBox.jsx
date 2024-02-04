import React from 'react'

/**
 * MemberBox component displaying information about a team member.
 *
 * @component
 * @param {Object} props 
 * @param {string} props.image 
 * @param {string} props.name 
 * @param {string} props.description 
 * @param {boolean} props.isActive 
 * @returns {JSX.Element} 
 */
const MemberBox = ({ image, name, description, isActive }) => {

    return (
        <div className={`flex flex-col bg-[#707F65] rounded-xl justify-end w-[240px] h-[300px] 
        ${isActive ? 'lg:w-[300px] lg:h-[350px] ' : 'lg:w-[250px] lg:h-[300px] '}`
        }>
            <div className="flex flex-col rounded-xl bg-[#F1F1F1] h-[90%] justify-center items-center p-5 shadow-lg">
                {/* image  */}
                <img
                    src={image}
                    alt="member"
                    className="rounded-full object-cover h-[100px] w-[100px] overflow-hidden mb-4"
                />

                {/* name  */}
                <p className='text-[#707F65] font-spacemonobold text-[18px] mb-3'>{name}</p>

                {/* description  */}
                <p className='text-black font-dmsans text-[14px]'>{description}</p>
            </div>
        </div>
    )
}

export default MemberBox;