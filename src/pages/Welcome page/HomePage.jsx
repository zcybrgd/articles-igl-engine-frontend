import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import newsPaperImage from "../../assets/FilteredNewsPaper.svg"
import { IoIosSearch } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useSearchContext } from "../../context/SearchContext"
import { HashLoader } from "react-spinners"
// import { articles } from "../../testing Data/ArticlesData";

function HomePage() {
    const navigate = useNavigate();
    const { results, setResultsData } = useSearchContext();

    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = async () => {
        try {
            setIsLoading(true);
            console.log("you searched for: ", searchQuery);
            const encodedQuery = encodeURIComponent(searchQuery);
            const response = await fetch(`http://localhost:8000/search/nadi/?q=${encodedQuery}`);
            const data = await response.json();
            setResultsData(data.results);
            console.log(results)
            setIsLoading(false);
            if (results) {
                goToResultsPage();
            }
        } catch (error) {
            console.error('Error searching articles:', error);
            setIsLoading(false);
        }
    };

    function goToResultsPage() {
        try {
            navigate(`/search`);
        } catch (error) {
            console.error("Error loading results page:", error);
        }
    }

    if (isLoading) {
        return (
            <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center">
                <HashLoader color="#707F65" />
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center mt-20 p-5">
            <div
                className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-10 md:p-20 rounded-xl shadow-lg"
                style={{ backgroundImage: `url(${newsPaperImage})`, }}
            >
                <div className=" p-10 items-center justify-center md:p-20 mb-5">
                    <p className="text-[35px] md:text-[50px] font-dmsansbold text-[#FFFFFF]">What are you searching for ?</p>
                    <p className="text-[15px] font-dmsansmedium text-[#FFFFFF]">Search for an author, title or any other keyword !</p>
                </div>
                <div className="flex flex-row md:w-1/2 p-1 pl-2 pr-2 items-center justify-start border-4 border-[#000000] rounded-2xl bg-[#F0F0F0]">
                    <div className="flex flex-row mr-auto">
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
                    <div className="flex ml-auto">
                        <FaRegArrowAltCircleRight className="text-black text-[20px] cursor-pointer" onClick={handleSearch} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage