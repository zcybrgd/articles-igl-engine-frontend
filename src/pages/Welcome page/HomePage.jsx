import React, { useState } from "react";
import newsPaperImage from "../../assets/FilteredNewsPaper.svg"
import { IoIosSearch } from "react-icons/io";

function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        console.log("User searched for:", searchQuery);

        //partie integration avec la recherche
    };

    return (
        <div className="flex items-center justify-center mt-20 p-5">
            <div
                className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-10 md:p-20 rounded-xl shadow-lg"
                style={{ backgroundImage: `url(${newsPaperImage})`, }}
            >
                <div className=" p-10 md:p-20 mb-5">
                    <p className="text-[35px] md:text-[50px] font-semibold text-[#FFFFFF]">What are you searching for ?</p>
                    <p className="text-[15px] text-[#FFFFFF]">Search for an author, title or any other keyword !</p>
                </div>
                <div className="flex flex-row md:w-1/2 p-1 pl-2 pr-2 items-center justify-start border-4 border-[#000000] rounded-2xl bg-[#F0F0F0]">
                    <IoIosSearch className="mr-2 text-black text-[20px]" />
                    <input
                        type="text"
                        id="searchBar"
                        className="text-black bg-transparent focus:outline-none"
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Search"
                    />
                </div>
            </div>

        </div>
    )
}

export default HomePage
