import React, { useState, useEffect } from "react";
import Article from "../../components/Article/Article";
import Paper from "../../assets/styling/paper.svg"
import logo from "../../assets/Logo/logo.png"
import quotesRight from "../../assets/blackQuotes/QuotesRight.svg"
import quotesLeft from "../../assets/blackQuotes/QuotesLeft.svg"
import { fetchArticles } from "../../services/articlesApi";
import sorryAnimation from "../../assets/gifs/Noresults.gif"
// import { articles } from "../../testing Data/ArticlesData";

function ModeratorPage() {
    const [moderatorData, setModeratorData] = useState(null);

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articlesData = await fetchArticles();
                setArticles(articlesData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []
    );

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
                            <p className="text-[25px] md:text-[40px] lg:text-[50px] text-[#181818] font-dmsansbold whitespace-nowrap">
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
                        className="w-60 h-60 "
                        alt='logo'
                        src={logo}
                    />
                </div>
            </div>

            {/* Articles Section */}
            <div className="flex flex-col items-start mt-10">
                <div className="flex flex-col mb-8 justify-start items-start">
                    <div className="flex flex-row ">
                        <p className="text-black text-[35px] font-dmsansmedium">
                            Recently added
                        </p>
                        <span className="ml-3">
                            <img src={Paper} alt="papers icon" className="w-[50px] h-[50px]" />
                        </span>
                    </div>
                    {/* number of articles added by admins  */}
                    <p className="text-[#707F65] font-dmsansbold text-[15px]">{articles.length} articles</p>
                </div>
                <div class="border border-[#D8DAD7] w-full mb-3"></div>


                {/* displaying articles */}
                <div className="flex flex-col w-[98%]">
                    {loading && <p>Loading...</p>}
                    {error && (
                        <div className="flex justify-center items-center text-center p-20">
                            <p className="text-black text-[20px] font-semibold">
                                Error loading articles: {error}
                            </p>
                        </div>
                    )}
                    {!loading && !error && articles.length > 0 ? (
                        articles.map((article, index) => (
                            <div key={index} className="flex mb-5">
                                <Article article={article} isfav={false} userRole={"moderator"} page={'home'} />
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center text-center p-10">
                            <p className="text-black text-[20px] font-dmsansmedium">
                                Oups! No results found for your search query :( Please try again with different keywords or refine your search criteria
                            </p>
                            <img src={sorryAnimation} alt="no results gif" />
                        </div>
                    )}
                </div>
            </div>
            {/* /Results Section */}
        </div>
    )
}

export default ModeratorPage