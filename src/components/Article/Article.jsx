import React from "react"
import { articles } from "../../testing Data/ArticlesData";
import { CiCalendarDate } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import Paper from "../../assets/paper.svg"

const Article = ({ article }) => {

    function deleteArticleFromCollection() {
        console.log("article deleted id:", article.articleId)
    }

    function openArticle() {
        console.log("article opened id:", article.articleId)
    }

    function openArticlesPdf() {
        console.log("article opened pdf id:", article.articleId)
    }

    return (
        <div className="flex flex-row rounded-3xl bg-[#F1F1F1] justify-center shadow-md p-3 ">
            {/* icon part  */}
            <div className="hidden md:flex mr-8 w-1/10 items-center justify-center">
                <img src={Paper} alt="papers icon" className="w-[80px] h-[80px]" />
            </div>

            {/* article's part */}
            <div className="flex flex-col items-start justify-start w-3/4 md:w-3/5">
                <p className="text-black text-[25px] font-semibold mb-2">{article.title}</p>
                <div className="flex flex-row">
                    <CiCalendarDate className="text-[#707F65] mt-0.5 mr-1 text-[20px]" />
                    <p className="text-black text-[15px] mb-2">
                        <span className="font-semibold">Date: </span>
                        {article.releaseDate}
                    </p>
                </div>
                <div className="flex flex-row">
                    <FaUserTie className="text-[#707F65] mt-0.5 mr-1.5 ml-0.5 text-[15px]" />
                    <p className="text-black text-[15px] mb-2">
                        <span className="font-semibold">Authors: </span>
                        {article.authors && article.authors.map((author, index) => (
                            <>
                                <span className="mr-1"></span>{author},
                            </>
                        ))}
                    </p>
                </div>
                <div className="flex justify-start items-start">
                    <p className="text-black text-[15px] font-semibold mt-1 line-clamp-2 text-start">{article.summary}</p>
                </div>
            </div>

            {/* buttons part  */}
            <div className="flex flex-col items-end justify-center w-1/4 md:w-3/10">
                <div className="flex flex-row mb-2">
                    <p className="text-[12px] md:text-[15px] text-[#F7941D] mr-1 cursor-pointer hover:underline" onClick={deleteArticleFromCollection}>Delete from collection</p>
                    <FaBookmark className="text-[15px] md:text-[20px] text-[#F7941D] mt-1.5 md:mt-0.5 " />
                </div>
                <button
                    className="rounded-3xl bg-transparent text-[#43BE83] text-[10px] md:text-[15px] text-center pt-0.5 pb-0.5 border-2 border-[#43BE83] w-25 h-10 mb-2"
                    onClick={openArticle}
                >
                    View Details
                </button>
                <button
                    className="rounded-3xl bg-[#43BE83] text-white text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 w-35 h-10 "
                    onClick={openArticlesPdf}
                >
                    View PDF
                </button>
            </div>
        </div>
    )
}

export default Article
