import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosSearch, IoIosArrowBack } from "react-icons/io";
import Article from "../../components/Article/Article";
import Paper from "../../assets/paper.svg"
import newsPaperImage from "../../assets/NewsPaper.svg"
import { articles } from "../../testing Data/ArticlesData";

function SearchPage() {
    const navigate = useNavigate();
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

    function openFilter() {
        console.log("filter opened")
    }

    function backToHome() {
        try {
            navigate(`/`);
        } catch (error) {
            console.error("Error loading home page:", error);
        }
    }

    return (
        <div>
            {/* Hero Section */}
            <div
                className="flex -mt-10 p-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${newsPaperImage})` }}
            >
                <div className="container pt-40 text-center"></div>
            </div>

            {/* Main Content Container */}
            <div className="container w-5/6 md:w-3/4 px-0 mx-auto -mt-32">

                {/* search bar part  */}
                <div className="flex h-full bg-transparent rounded overflow-hidden shadow-lg">
                    <div className="w-full md:w-1/3 flex flex-row flex-grow flex-shrink pt-5 pb-5 pl-20 pr-20 mt-20 bg-[#181818] rounded-2xl items-center justify-center shadow-xl">
                        <div className="flex flex-row md:w-2/3 p-1 pl-2 pr-2 items-center justify-start rounded-2xl bg-[#F0F0F0]">
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
                        <div className="ml-5">
                            <p className="text-[12px] md:text-[15px] font-semibold text-[#FFFFFF] mr-1 cursor-pointer hover:underline" onClick={openFilter}>Filtrer</p>
                        </div>
                    </div>
                </div>
                {/* /search bar part */}

                {/* Results Section */}
                <div className="flex flex-col items-start mt-10">
                    <button
                        className="rounded-3xl bg-transparent text-[#43BE83] text-[10px] md:text-[15px] text-center pt-0.5 pb-0.5 border-2 border-[#43BE83] w-25 h-10 mb-2"
                        onClick={backToHome}
                    >
                        <div className="flex flex-row text-lg">
                            <IoIosArrowBack className="text-[#43BE83] text-lg mt-1.5 mr-1" />
                            Back
                        </div>
                    </button>
                    <div className="flex flex-col mb-8 justify-start items-start">
                        <div className="flex flex-row ">
                            <p className="text-black text-[35px] font-semibold">
                                Search Result
                            </p>
                            <span className="ml-3">
                                <img src={Paper} alt="papers icon" className="w-[50px] h-[50px]" />
                            </span>
                        </div>
                        {/* number of results found  */}
                        <p className="text-[#43BE83] font-semibold text-[15px]">{articles.length} result found</p>
                    </div>
                    <div class="border border-[#D8DAD7] w-full mb-3"></div>


                    {/* displaying results */}
                    <div className="flex flex-col">
                        {articles && articles.length > 0 ? (
                            articles.map((article, index) => (
                                <div key={index} className="flex mb-5">
                                    <Article article={article} isfav={false} userRole={"client"} />
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center items-center text-center p-20">
                                <p className="text-black text-[20px] font-semibold"> Oups ! No results found for your search query  :(
                                    Please try again with different keywords  or refine your search criteria
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {/* /Results Section */}
            </div>
            {/* /Main Content Container */}
        </div>
    )
}

export default SearchPage
