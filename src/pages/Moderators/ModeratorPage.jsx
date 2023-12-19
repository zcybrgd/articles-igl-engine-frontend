import React, { useState } from "react";
import { IoIosSearch, IoIosArrowBack } from "react-icons/io";
import Article from "../../components/Article/Article";
import Paper from "../../assets/paper.svg"
import avatar from "../../assets/image.jpg"
import quotesRight from "../../assets/QuotesRight.svg"
import quotesLeft from "../../assets/QuotesLeft.svg"
import newsPaperImage from "../../assets/NewsPaper.svg"
import { articles } from "../../testing Data/ArticlesData";

function ModeratorPage() {
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
        <div>
            {/* Welcome Section */}
            <div className="flex flex-row p-5 pb-5 pt-10 pl-10 pr-10">
                {/* MODERATOR WELCOME PORTAL */}
                <div className="flex md:w-3/4 items-center">
                    <div className="flex flex-row w-full justify-center">
                        <div className="flex items-start justify-center pb-20 pr-10 md:w-1/4">
                            <img src={quotesRight} alt="right quotes" className="w-[60px] h[60px] lg:w-[80px] lg:h[80px]" />
                        </div>
                        <div className="flex flex-row items-center justify-center md:w-1/2">
                            <p className="text-[25px] md:text-[40px] lg:text-[50px] text-[#181818] font-bold whitespace-nowrap">
                                MODERATOR <br />
                                WELCOME <br />
                                PORTAL
                            </p>
                        </div>
                        <div className="flex items-end justify-center pt-20 pl-10 md:w-1/4">
                            <img src={quotesLeft} alt="left quotes" className="w-[60px] h[60px] lg:w-[80px] lg:h[80px]" />
                        </div>
                    </div>
                </div>

                {/* logo part  */}
                <div className="hidden md:flex w-1/4 p-5 justify-end">
                    <img
                        className="w-25 h-25 "
                        src={avatar}
                    />
                </div>
            </div>

            {/* search bar part  */}
            <div className="flex bg-transparent rounded overflow-hidden ">
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
                </div>
            </div>
            {/* /search bar part */}

            {/* Results Section */}
            <div className="flex flex-col items-start mt-10">
                <div className="flex flex-col mb-8 justify-start items-start">
                    <div className="flex flex-row ">
                        <p className="text-black text-[35px] font-semibold">
                            Recently added
                        </p>
                        <span className="ml-3">
                            <img src={Paper} alt="papers icon" className="w-[50px] h-[50px]" />
                        </span>
                    </div>
                    {/* number of articles added by admins  */}
                    <p className="text-[#707F65] font-semibold text-[15px]">{articles.length} articles</p>
                </div>
                <div class="border border-[#D8DAD7] w-full mb-3"></div>


                {/* displaying articles */}
                <div className="flex flex-col">
                    {articles && articles.length > 0 ? (
                        articles.map((article, index) => (
                            <div key={index} className="flex mb-5">
                                <Article article={article} isfav={false} userRole={"moderator"} />
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
    )
}

export default ModeratorPage
