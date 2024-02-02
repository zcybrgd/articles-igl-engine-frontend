import React from "react"
import { useNavigate } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa6";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Paper from "../../assets/paper.svg";
import { useAuth } from "../../context/AuthContext";
import { addFavorite, deleteFavorite } from "../../services/favoritesApi";
import { toast, ToastContainer } from 'react-toastify';

const Article = ({ article, isfav, userRole, page }) => {
    const navigate = useNavigate();
    const { token } = useAuth()

    function openArticle() {
        try {
            if (userRole === 'client') {
                if (page === 'home') {

                    navigate(`/searchedArticle/${article.id}`,
                        {
                            state: {
                                article: article,
                                role: userRole,
                            },
                        },  //pass the article as a prop
                    );
                } else if (page === 'saved') {
                    navigate(`/savedArticle/${article.id}`,
                        {
                            state: {
                                article: article,
                                role: userRole,
                            },
                        },  //pass the article as a prop
                    );
                }
            } else {
                //moderator part 
                navigate(`/article/${article.id}`,
                    {
                        state: {
                            article: article,
                            role: userRole,
                        },
                    },  //pass the article as a prop
                );
            }

        } catch (error) {
            console.error("Error loading article:", error);
        }
    }

    async function deleteArticleFromCollection() {
        const responsedata = await deleteFavorite(token, article.id)
        if (!responsedata.error) {
            toast.success(responsedata.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        } else {
            toast.error(responsedata.error, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        }
    }

    const addArticleToFavorites = async () => {
        const responsedata = await addFavorite(token, article.id)
        if (!responsedata.error) {
            toast.success(responsedata.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        } else {
            toast.error(responsedata.error, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        }
    }

    function openArticlesPdf() {
        console.log("article opened pdf id:", article.id)

        const url = article.urlPdf;
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        <div className="flex flex-row w-full rounded-3xl bg-[#F1F1F1] justify-center shadow-md p-3 ">
            {/* icon part  */}
            <div className="hidden md:flex mr-8 w-1/10 items-center justify-center">
                <img src={Paper} alt="papers icon" className="w-[80px] h-[80px]" />
            </div>

            {/* article's part */}
            <div className="flex flex-col items-start justify-start w-3/4 md:w-3/5 mr-auto">
                <p className="text-black text-[25px] font-dmsansbold mb-2">{article.title}</p>
                <div className="flex flex-row">
                    <CiCalendarDate className="text-[#707F65] mt-0.5 mr-1 text-[20px]" />
                    <p className="text-black text-[15px] mb-2">
                        <span className="font-dmsansmedium">Date: </span>
                        <span className="font-dmsans">{article.date}</span>
                    </p>
                </div>
                <div className="flex flex-row">
                    <FaUserTie className="text-[#707F65] mt-0.5 mr-1.5 ml-0.5 text-[15px]" />
                    <p className="text-black text-[15px] mb-2">
                        <span className="font-dmsansmedium">Authors: </span>
                        {article.authors && article.authors.map((author, index) => (
                            <span key={index} className="font-dmsans mr-1">{author},</span>
                        ))}
                    </p>
                </div>
                <div className="flex justify-start items-start">
                    <p className="text-black text-[15px] font-dmsansbold mt-1 line-clamp-2 text-start">{article.abstract}</p>
                </div>
            </div>

            {/* buttons part  */}
            <div className="flex flex-col items-end justify-center w-1/4 md:w-3/10 ml-auto">
                {userRole === "client" ? (
                    // for clients 
                    <>
                        <div className="flex flex-row mb-2">
                            {isfav ? (
                                <>
                                    <p className="text-[12px] md:text-[15px] text-[#F7941D] font-dmsansmedium mr-1 cursor-pointer hover:underline" onClick={deleteArticleFromCollection}>Delete from collection</p>
                                    <FaBookmark className="text-[15px] md:text-[20px] text-[#F7941D] mt-1.5 md:mt-0.5 " />
                                </>
                            ) : (
                                <>
                                    <p className="text-[12px] md:text-[15px] text-[#F7941D] font-dmsansmedium mr-1 cursor-pointer hover:underline" onClick={addArticleToFavorites}>Add to favorites</p>
                                    <FaRegBookmark className="text-[15px] md:text-[20px] text-[#F7941D] mt-1.5 md:mt-0.5 " />
                                </>
                            )}

                        </div>
                        <button
                            className="rounded-3xl bg-transparent text-[#43BE83] font-dmsansmedium text-[10px] md:text-[15px] text-center pt-0.5 pb-0.5 border-2 border-[#43BE83] w-25 h-10 mb-2"
                            onClick={openArticle}
                        >
                            View Details
                        </button>
                        <button
                            className="rounded-3xl bg-[#43BE83] text-white text-[12px] font-dmsansmedium md:text-[15px] text-center pt-0.5 pb-0.5 w-35 h-10 "
                            onClick={openArticlesPdf}
                        >
                            View PDF
                        </button>
                    </>
                ) : (
                    // for moderators
                    <>
                        <button
                            className="rounded-3xl bg-transparent text-[#43BE83] text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 border-2 border-[#43BE83] h-10 mb-2 px-6"
                            onClick={openArticle}
                        >
                            Consult
                        </button>
                        <button
                            className="rounded-3xl bg-[#43BE83] text-white text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-5 h-10 "
                            onClick={openArticlesPdf}
                        >
                            View PDF
                        </button>
                    </>
                )}

            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Article