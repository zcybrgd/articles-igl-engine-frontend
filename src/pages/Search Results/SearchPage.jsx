import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoIosSearch, IoIosArrowBack } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoTriangle, IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { HiOutlineKey } from "react-icons/hi";
import { RiBankLine } from "react-icons/ri";
import { BsCalendarEvent } from "react-icons/bs";
import Article from "../../components/Article/Article";
import Paper from "../../assets/paper.svg"
import newsPaperImage from "../../assets/NewsPaper.svg"
import sorryAnimation from "../../assets/gifs/Noresults.gif"
import DatePicker from "../../components/filters/DatePicker";
import { useSearchContext } from "../../context/SearchContext"


function SearchPage() {
    const navigate = useNavigate();
    const { results, setResultsData } = useSearchContext();
    const [Error, setError] = useState(null)

    const [searchQuery, setSearchQuery] = useState("");
    const [openfilter, setopenfilter] = useState(false);

    // saving filters
    const [authors, setauthors] = useState("");
    const [keywords, setkeywords] = useState("");
    const [institutions, setinstitutions] = useState("");
    const [startdate, setstartdate] = useState(null);
    const [enddate, setenddate] = useState(null);

    const handleStartDateSelect = (date) => {
        if (date) {
            const formattedDate = date.toISOString().split('T')[0];  //to only get the date, not the time 
            console.log('Selected start date:', formattedDate);
            setstartdate(formattedDate);
        } else {
            console.log("no date yet")
        }
    };

    const handleEndDateSelect = (date) => {
        if (date) {
            const formattedDate = date.toISOString().split('T')[0];  //to only get the date, not the time
            console.log('Selected end date:', formattedDate);
            setenddate(formattedDate);
        } else {
            console.log("no date yet")
        }
    };

    function handleValidateFilters() {
        if (Error) {
            setError(null)
        }

        if (authors.length > 0) {
            console.log("filter by author: ", authors)
        }
        if (keywords.length > 0) {
            console.log("filter by keywords: ", keywords)
        }
        if (institutions.length > 0) {
            console.log("filter by institutions: ", institutions)
        }

        if (startdate && !enddate) {
            setError("the end date is missing! ")
        } else if (!startdate && enddate) {
            setError("the start date is missing! ")
        } else if (startdate && enddate) {
            console.log("filter by period: ", startdate, " - ", enddate)
        }

        // if (!Error) {
        //     setopenfilter(false)
        // }
    }


    // search controlers 
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
            console.log("you searched for: ", searchQuery);
            const encodedQuery = encodeURIComponent(searchQuery);
            const response = await fetch(`http://localhost:8000/search/nadi/?q=${encodedQuery}`);
            // const response = await fetch(`http://localhost:8000/nadi/?q=${encodedQuery}`);
            const data = await response.json();
            setResultsData(data.results);
            console.log(results)
        } catch (error) {
            console.error('Error searching articles:', error);
        }
    };
    // **************

    function openFilter() {
        console.log("filter opened")
        setopenfilter(true)
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
                <div className="flex h-full bg-transparent rounded shadow-lg">
                    <div className="relative w-full md:w-1/3 flex flex-row flex-grow py-5 px-20 mt-20 bg-[#181818] rounded-2xl items-center justify-center shadow-xl">
                        <div className="flex flex-row md:w-2/3 p-1 pl-2 pr-2 items-center justify-start rounded-2xl bg-[#F0F0F0]">
                            <div className="flex flex-row mr-auto">
                                <IoIosSearch className="mr-2 text-black text-[20px]" />
                                <input
                                    type="text"
                                    id="searchBar"
                                    className="text-black font-dmsansmedium bg-transparent focus:outline-none"
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
                        <div className="flex relative ml-5">
                            <p className="text-[12px] md:text-[15px] font-dmsansmedium text-[#FFFFFF] mr-1 cursor-pointer hover:underline" onClick={openFilter}>Filtrer</p>

                            {/*mini triangle to filters part  */}
                            {openfilter && (
                                <div className="absolute top-7 left-1 justify-end">
                                    <IoTriangle className="text-[#F9F9F9] text-[30px]" />
                                </div>
                            )}
                        </div>
                        {/* ****filters part****  */}
                        {openfilter && (
                            <div className="absolute top-20 z-10 w-[100%] bg-[#F9F9F9] rounded-md shadow-lg p-5">
                                <div className="relative flex flex-col items-center justify-center">
                                    {/* close button  */}
                                    <div className="absolute top-0 right-0 cursor-pointer">
                                        <IoClose
                                            className="text-[#797D8C] text-[50px] font-bold"
                                            onClick={() => setopenfilter(false)}
                                        />
                                    </div>

                                    {/* title "Filters" */}
                                    <p className="text-[35px] text-[#434343] font-dmsansbold">Filters</p>

                                    {/* choosing filters */}
                                    <div className="flex flex-col lg:flex-row w-[100%] mt-2">
                                        {/* first column  */}
                                        <div className="flex flex-col lg:w-1/2 items-start justify-start text-start p-2">
                                            <p className="text-[17px] text-[#9D9E9D] font-dmsansmedium">You can use the filters below to affine your search: </p>
                                            <div className="flex flex-col space-y-4 items-center text-start justify-start">
                                                {/* authors */}
                                                <div className="flex flex-col space-y-2 items-start justify-start text-start py-5">
                                                    <div className="flex flex-row space-x-2 py-0.5">
                                                        <FaUser className="text-lg text-[#707F65] mt-1" />
                                                        <p className="text-[18px] text-[#707F65] font-dmsansbold underline">Authors :</p>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Ex : Nada"
                                                        value={authors}
                                                        onChange={(e) => setauthors(e.target.value)}
                                                        className="text-md font-dmsansmedium bg-[#F1F1F1] text-[#434343] placeholder-[#AEAEAE] border-2 border-[#707F65] focus:outline-none rounded-xl px-8 py-2"
                                                    />
                                                </div>

                                                {/* keywords */}
                                                <div className="flex flex-col space-y-2 items-start justify-start text-start py-5">
                                                    <div className="flex flex-row space-x-2 py-0.5">
                                                        <HiOutlineKey className="text-lg text-[#707F65] mt-1" />
                                                        <p className="text-[18px] text-[#707F65] font-dmsansbold underline">Keywords : </p>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Ex : Dina,Azazga"
                                                        value={keywords}
                                                        onChange={(e) => setkeywords(e.target.value)}
                                                        className="text-md font-spacemono bg-[#F1F1F1] text-[#434343] placeholder-[#AEAEAE] border-2 border-[#707F65] focus:outline-none rounded-xl px-8 py-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* second column  */}
                                        <div className="flex flex-col lg:w-1/2 items-start justify-start text-start p-2">
                                            <div className="lg:hidden">
                                                <p className="text-[17px] text-[#F9F9F9] font-dmsansmedium">empty, juste pour l'espace</p>
                                            </div>
                                            <div className="flex flex-col space-y-4 items-center text-start justify-start">
                                                {/* institutions */}
                                                <div className="flex flex-col space-y-2 items-start justify-start text-start py-5">
                                                    <div className="flex flex-row space-x-2 py-0.5">
                                                        <RiBankLine className="text-lg text-[#707F65] mt-1" />
                                                        <p className="text-[18px] text-[#707F65] font-dmsansbold  underline">Institution : </p>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Ex: ESI"
                                                        value={institutions}
                                                        onChange={(e) => setinstitutions(e.target.value)}
                                                        className="text-md font-spacemono bg-[#F1F1F1] text-[#434343] placeholder-[#AEAEAE] border-2 border-[#707F65] focus:outline-none rounded-xl px-8 py-2"
                                                    />
                                                </div>

                                                {/* period */}
                                                <div className="flex flex-col space-y-2 items-start justify-start text-start py-5">
                                                    <div className="flex flex-row space-x-2 py-0.5">
                                                        <BsCalendarEvent className="text-lg text-[#707F65] mt-1" />
                                                        <p className="text-[18px] text-[#707F65] font-dmsansbold underline">Period between two dates :</p>
                                                    </div>

                                                    {/* start date  */}
                                                    <div className="flex flex-col items-start justify-start text-start">
                                                        <p className="text-[14px] text-[#181818] font-dmsansbold mb-2 underline">Start date :</p>
                                                        <DatePicker onDateSelect={handleStartDateSelect} />
                                                    </div>

                                                    {/* end date  */}
                                                    <div className="flex flex-col items-start justify-start text-start">
                                                        <p className="text-[14px] text-[#181818] font-dmsansbold mb-2 mt-5 underline">End date :</p>
                                                        <DatePicker onDateSelect={handleEndDateSelect} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* validate button  */}
                                    {Error && (
                                        <p className="text-red-500 mt-2">{Error}</p>
                                    )}

                                    <button
                                        className="rounded-3xl bg-[#43BE83] text-white text-[12px] font-dmsansmedium md:text-[15px] text-center py-0.5 px-10 h-10 mt-8"
                                        onClick={handleValidateFilters}
                                    >
                                        Validate
                                    </button>
                                </div>
                            </div>
                        )}
                        {/* ***************  */}
                    </div>
                </div>
                {/* /search bar part */}

                {/* Results Section */}
                <div className="flex flex-col items-start mt-10">
                    <button
                        className="rounded-3xl bg-transparent text-[#43BE83] text-[10px] md:text-[15px] text-center pt-0.5 pb-0.5 border-2 border-[#43BE83] w-25 h-10 mb-2"
                        onClick={backToHome}
                    >
                        <div className="flex font-dmsansmedium flex-row text-lg">
                            <IoIosArrowBack className="text-[#43BE83] text-lg mt-1.5 mr-1" />
                            Back
                        </div>
                    </button>
                    <div className="flex flex-col mb-8 justify-start items-start">
                        <div className="flex flex-row ">
                            <p className="text-black font-dmsansmedium text-[35px]">
                                Search Result
                            </p>
                            <span className="ml-3">
                                <img src={Paper} alt="papers icon" className="w-[50px] h-[50px]" />
                            </span>
                        </div>
                        {/* number of results found  */}
                        <p className="text-[#43BE83] font-dmsansbold text-[15px]">{results.length} result found</p>
                    </div>
                    <div class="border border-[#D8DAD7] w-full mb-3"></div>


                    {/* displaying results */}
                    <div className="flex flex-col w-[98%]">
                        {results && results.length > 0 ? (
                            results.map((article, index) => (
                                <div key={index} className="flex mb-5">
                                    <Article article={article} isfav={false} userRole={"client"} page={'home'} />
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col space-y-10 justify-center items-center text-center p-20">
                                <p className="text-black text-[20px] font-dmsansmedium"> Oups ! No results found for your search query  :(
                                    Please try again with different keywords  or refine your search criteria
                                </p>
                                <img src={sorryAnimation} alt="no results gif" />
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
