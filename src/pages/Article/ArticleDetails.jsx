import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ArticleMainIcon from "../../assets/ArticlemainIcon.svg"
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import FulldetailsPopUp from "./FulldetailsPopUp";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteArticle, validateArticle } from "../../services/articlesApi";

function ArticleDetails() {
    
    const location = useLocation();
    const article = location.state.article;
    const userRole = location.state.role;
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [bookMarkClicked, setBookMarkClicked] = useState(false);
    const [isFullModeOpen, setFullModeOpen] = useState(false);

    const viewFullArticle = () => {
        setFullModeOpen(true);
    };

    const closeCard = () => {
        setFullModeOpen(false);
    };

    //Data edited
    const [editedKeywords, setEditedKeywords] = useState(article.keywords);
    const [editedInstitutions, setEditedInstitutions] = useState(article.institutions);
    const [editedAuthors, setEditedAuthors] = useState(article.authors);
    const [editedTitle, setEditedTitle] = useState(article.title);


    const handleValidateArticle = async () => {
        console.log("article validated") 
        try {
        const isSuccess = await validateArticle(article.id)
    
        if (isSuccess) {  
        toast.success('Article validated successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000, 
        });

        setTimeout(() => {
            navigate("/",{ state: {userRole} });
        }, 2000); 
            } else {
                toast.error('Failed to validate article', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000, 
                });
            }
        } catch (error) {
            console.error('Error handling delete click', error);
        }
 // j'ajoute validated count     
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDeleteClick = async () => {
        console.log("article deleted")    
            try {
                const isSuccess = await deleteArticle(article.id);
        
                if (isSuccess) {  
            toast.success('Article deleted successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000, 
            });

            setTimeout(() => {
                navigate("/",{ state: { userRole} });
            }, 2000); 
                } else {
                    // Handle failure
                }
            } catch (error) {
                console.error('Error handling delete click', error);
            }
     // j'ajoute deleted count        
    };

    const handleSaveClick = () => {
        console.log("data saved")
        setIsEditing(false);

        // data edited nbaetoha ttsauvegarda f BDD
    };

    const handleCancelClick = () => {
        console.log("editing cancelled")

        // Cancel the editing, revert the changes
        setIsEditing(false);
        setEditedKeywords(article.keywords);
        setEditedInstitutions(article.institutions);
        setEditedAuthors(article.authors);
        setEditedTitle(article.title);
    };

    const handleKeywordsChange = (event) => {
        setEditedKeywords(event.target.value);
    };

    const handleInstitutionsChange = (event) => {
        setEditedInstitutions(event.target.value);
    };

    const handleAuthorsChange = (event) => {
        setEditedAuthors(event.target.value);
    };

    const handleTitleChange = (event) => {
        setEditedTitle(event.target.value);
    };

    function addArticleToCollection() {
        setBookMarkClicked(true)
        console.log("article added id:", article.id)
    }

    function openArticlesPdf() {
        console.log("article opened pdf id:", article.id)
    }

    return (
        <div className="flex p-10 md:p-20 md:pl-20">
            <div className="flex flex-col relative">
                {/* icon part  */}
                <div class="hidden md:flex absolute inset-0 top-0 left-10 w-[225px] h-[271px]">
                    <img src={ArticleMainIcon} alt="" />
                </div>

                {/* relative */}
                {/* title and validate button part  */}
                <div class="flex flex-row md:pl-[280px] py-5 md:p-10 items-center justify-start">
                    {/* article title  */}
                    <div class=" justify-center items-center mr-auto">
                        <p className="text-[#FFFFFF] text-[25px] lg:text-[32px] font-semibold">{article.title}</p>
                    </div>
                    {userRole === "moderator" && (
                        <div className="justify-center items-center ml-auto">
                            <button
                                className="rounded-3xl bg-[#F1F1F1] border border-[#43BE83] text-[#707F65] text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-10 h-10 "
                                onClick={handleValidateArticle}
                            >
                                Validate
                            </button>
                        </div>
                    )}
                </div>

                {/* article part  */}
                <div className="flex flex-col md:flex-row items-start justify-start bg-[#F1F1F1] rounded-2xl p-5 pb-10">
                    {/* summary column */}
                    <div className="order-2 md:order-1 flex flex-col justify-start items-start pl-5 md:w-1/2 md:p-3 md:pt-[150px] space-y-3">
                        <p className="text-black text-[22px] font-semibold underline">Résumé :</p>
                        <p className="pl-2 text-black text-[20px] text-start">{article.abstract}</p>
                    </div>

                    {/* other information column  */}
                    <div className="order-1 md:order-2 flex flex-col w-[100%] md:w-1/2 justify-center items-center p-3">
                        <div className="w-[100%] flex flex-col h-[150px]">
                            {/* buttons part */}
                            <div className="flex flex-row items-center justify-center p-3 mb-10">
                                {userRole === "moderator" ? (
                                    <>
                                        <button
                                            className="mr-auto rounded-3xl bg-[#707F65] text-white text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-10 h-10 "
                                            onClick={isEditing ? handleSaveClick : handleEditClick}
                                        >
                                            {isEditing ? 'Save' : 'Edit'}
                                        </button>
                                        <button
                                            className="ml-auto rounded-3xl bg-transparent border border-[#707F65] text-[#707F65] text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-10 h-10 "
                                            onClick={isEditing ? handleCancelClick : handleDeleteClick}
                                        >
                                            {isEditing ? 'Cancel' : 'Delete'}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="mr-auto rounded-3xl bg-[#43BE83] text-white text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-8 h-10 "
                                            onClick={openArticlesPdf}
                                        >
                                            View PDF
                                        </button>
                                        {!bookMarkClicked ? (
                                            <div className="flex ml-auto cursor-pointer">
                                                <FaRegBookmark className="text-[20px] md:text-[30px] text-[#F7941D] mt-1.5 md:mt-0.5 " onClick={addArticleToCollection} />
                                            </div>
                                        ) : (
                                            <div className="flex ml-auto">
                                                <FaBookmark className="text-[20px] md:text-[30px] text-[#F7941D] mt-1.5 md:mt-0.5 " />
                                            </div>
                                        )}

                                    </>
                                )}
                            </div>

                            {/* view the full article button */}
                            <div className="flex items-center justify-end">
                                <p
                                    className="text-[12px] md:text-[15px] text-black font-semibold cursor-pointer hover:underline"
                                    onClick={viewFullArticle}
                                >
                                    view the full article
                                </p>
                            </div>
                            {/* Render the popup if isPopupOpen is true */}
                            {isFullModeOpen && (
                                <FulldetailsPopUp
                                    onClose={closeCard}
                                    articleContent={article.text}
                                />
                            )}
                            <div class="border-b-2 text-[#D9D9D9] w-4/5 my-4 m-auto"></div>

                        </div>

                        {/* article's information part  */}
                        <div className="flex flex-col space-y-3 w-[100%]">
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-semibold underline ">Titre:</p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        rows={Math.max(1, editedTitle.split("\n").length)}
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedTitle}
                                        onChange={handleTitleChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <p className="pl-2 text-[#9D9E9D] text-[20px] text-start">{editedTitle}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-semibold underline">Authors:</p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        rows={Math.max(1, editedAuthors.length)}
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedAuthors}
                                        onChange={handleAuthorsChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <p className="pl-2 text-[#9D9E9D] text-[20px] text-start">{editedAuthors}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-semibold underline">Institutions:</p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        rows={Math.max(1, editedInstitutions.length)}
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedInstitutions}
                                        onChange={handleInstitutionsChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <p className="pl-2 text-[#9D9E9D] text-[20px] text-start">{editedInstitutions}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-semibold underline">Keywords:</p>
                                {/* <p className="pl-2 text-[#9D9E9D] text-[20px] text-start">{article.keywords}</p> */}
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        rows={Math.max(1, editedKeywords.length)}
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedKeywords}
                                        onChange={handleKeywordsChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <p className="pl-2 text-[#9D9E9D] text-[20px] text-start">{editedKeywords}</p>
                                )}
                            </div>
                        </div>
                        <div class="md:hidden flex border-b-2 text-[#D9D9D9] w-4/5 my-4 m-auto"></div>
                    </div>
                </div>
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

export default ArticleDetails
