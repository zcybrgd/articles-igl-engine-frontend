import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleMainIcon from "../../assets/styling/ArticlemainIcon.svg"
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import FulldetailsPopUp from "./FulldetailsPopUp";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteArticle, validateArticle, updateArticle } from "../../services/articlesApi";
import { addFavorite } from "../../services/favoritesApi";
import { useAuth } from "../../context/AuthContext";

function ArticleDetails() {
    const { token } = useAuth()
    const location = useLocation();
    const article = location.state.article;
    const userRole = location.state.role;
    const navigate = useNavigate();

    //open and close full article popup
    const viewFullArticle = () => {
        setFullModeOpen(true);
    };

    const closeCard = () => {
        setFullModeOpen(false);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [bookMarkClicked, setBookMarkClicked] = useState(false);
    const [isFullModeOpen, setFullModeOpen] = useState(false);

    //Data edited
    const [editedKeywords, setEditedKeywords] = useState(article.keywords ? article.keywords : '');
    const [editedInstitutions, setEditedInstitutions] = useState(article.institutions ? article.institutions.join(', ') : '');
    const [editedAuthors, setEditedAuthors] = useState(article.authors ? article.authors.join(', ') : '');
    const [editedRefrences, setEditedRef] = useState(article.bibliographie ? article.bibliographie.join(',  ') : '');
    const [editedTitle, setEditedTitle] = useState(article.title ? article.title : '');
    const [editedAbstract, setEditedAbstract] = useState(article.abstract ? article.abstract : '');
    const [editedDate, setEditedDate] = useState(article.date ? article.date : '');
    const [newText, setnewText] = useState(article.text ? article.text : '');

    const getText = (text) => {
        setnewText(text)
        handleSaveClick()
    }

    const handleValidateArticle = async () => {
        console.log("article validated")
        try {
            const isSuccess = await validateArticle(article.id, token)

            if (isSuccess) {
                toast.success('Article validated successfully', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });

                setTimeout(() => {
                    navigate("/", { state: { userRole } });
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
        console.log("article deleted")    //nbdlo etat tae l'article beli "deleted" besh n'affichiwh f admin page
        try {
            console.log(token)
            const isSuccess = await deleteArticle(article.id, token);

            if (isSuccess) {
                toast.success('Article deleted successfully', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });

                setTimeout(() => {
                    navigate("/", { state: { userRole } });
                }, 2000);
            } else {
                // Handle failure
            }
        } catch (error) {
            console.error('Error handling delete click', error);
        }
        // j'ajoute deleted count        
    };

    const handleSaveClick = async () => {
        console.log("data saved")

        // saving authors as an array again
        const newAuthorsArray = editedAuthors.split(',').map((author) => author.trim());
        console.log('new authors: ', newAuthorsArray);

        // saving institutions as an array again
        const newInstitutionsArray = editedInstitutions.split(',').map((institution) => institution.trim());
        console.log('new institutions: ', newInstitutionsArray);

        // saving references as an array again
        const newRefrencesArray = (editedRefrences != '') ? editedRefrences.split(',').map((reference) => reference.trim()) : '';
        console.log('new refrences: ', newRefrencesArray);

        const editedData = {
            authors: newAuthorsArray ? newAuthorsArray : " " ,
            institutions: newInstitutionsArray ? newInstitutionsArray : " ",
            keywords: editedKeywords ? editedKeywords : " ",
            title: editedTitle ? editedTitle : " ",
            abstract: editedAbstract ? editedAbstract : " ",
            bibliographie: newRefrencesArray ? newRefrencesArray : "",
            date: editedDate ? editedDate : " ",
            text: newText ? newText : article.text,
        };

        console.log("article: ", editedData)
        const isSuccess = await updateArticle(article.id, editedData, token);
        if (isSuccess) {
            console.log('Article updated successfully');
            toast.success('Article updated successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        } else {
            console.error('Failed to update article');
        }
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        console.log("editing cancelled")

        // Cancel the editing, revert the changes
        setIsEditing(false);
        setEditedKeywords(article.keywords);
        setEditedInstitutions(article.institutions.join(', '));
        setEditedAuthors(article.authors.join(', '));
        setEditedRef(article.bibliographie.join(', '));
        setEditedTitle(article.title);
        setEditedDate(article.date)
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

    const handleRefChange = (event) => {
        setEditedRef(event.target.value);
    };

    const handleTitleChange = (event) => {
        setEditedTitle(event.target.value);
    };

    const handleAbstractChange = (event) => {
        setEditedAbstract(event.target.value);
    };
    const handleDateChange = (event) => {
        setEditedDate(event.target.value);
    };


    const addArticleToCollection = async () => {
        setBookMarkClicked(true)
        console.log("article added id:", article.id)

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
        <div className="flex w-[100%] p-10 md:p-20 md:pl-20">
            <div className="flex flex-col relative w-[100%]">
                {/* icon part  */}
                <div className="hidden md:flex absolute inset-0 top-0 left-10 w-[225px] h-[271px]">
                    <img src={ArticleMainIcon} alt="main article icon" />
                </div>

                {/* relative */}
                {/* title and validate button part  */}
                <div className="flex flex-row md:pl-[280px] py-5 md:p-10 items-center justify-start">
                    {/* article title  */}
                    <div className=" justify-center items-center mr-auto">
                        <p className="text-[#FFFFFF] text-[25px] lg:text-[32px] font-dmsansbold">{article.title}</p>
                    </div>
                    {userRole === "moderator" && (
                        <div className="justify-center items-center ml-auto">
                            <button
                                className="rounded-3xl font-dmsansmedium bg-[#F1F1F1] border border-[#43BE83] text-[#707F65] text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-10 h-10 "
                                onClick={handleValidateArticle}
                            >
                                Validate
                            </button>
                        </div>
                    )}
                </div>

                {/* article part  */}
                <div className="flex flex-col md:flex-row items-start justify-start bg-[#F1F1F1] rounded-2xl p-5 pb-10">
                    {/* abstract column */}
                    <div className="order-2 w-[100%] md:order-1 flex flex-col justify-start items-start pl-5 md:w-1/2 md:p-3 md:pt-[150px] space-y-3">
                        <p className="text-black text-[22px] font-dmsansmedium underline">Summary :</p>
                        {isEditing ? (
                            // Render input field when editing
                            <textarea
                                rows={15}
                                className="pl-2 bg-[#F1F1F1] text-black font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                style={{ width: '100%' }}
                                value={editedAbstract}
                                onChange={handleAbstractChange}
                            />
                        ) : (
                            // Render paragraph when not editing
                            <p className="px-2 text-black font-dmsans text-[20px] text-start">{editedAbstract}</p>
                        )}
                    </div>

                    {/* other information column  */}
                    <div className="order-1 md:order-2 flex flex-col w-[100%] md:w-1/2 justify-center items-center p-3">
                        <div className="w-[100%] flex flex-col h-[150px]">
                            {/* buttons part */}
                            <div className="flex flex-row items-center justify-center p-3 mb-10">
                                {userRole === "moderator" ? (
                                    <>
                                        <button
                                            className="mr-auto rounded-3xl bg-[#707F65] font-dmsansmedium text-white text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-10 h-10 "
                                            onClick={isEditing ? handleSaveClick : handleEditClick}
                                        >
                                            {isEditing ? 'Save' : 'Edit'}
                                        </button>
                                        <button
                                            className="ml-auto rounded-3xl bg-transparent font-dmsansmedium border border-[#707F65] text-[#707F65] text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-10 h-10 "
                                            onClick={isEditing ? handleCancelClick : handleDeleteClick}
                                        >
                                            {isEditing ? 'Cancel' : 'Delete'}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="mr-auto rounded-3xl bg-[#43BE83] font-dmsansmedium text-white text-[12px] md:text-[15px] text-center pt-0.5 pb-0.5 px-10 md:px-5 lg:px-8 h-10 "
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
                                    className="text-[12px] md:text-[15px] text-black font-dmsansmedium cursor-pointer hover:underline"
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
                                    userRole={userRole}
                                    getText={getText}
                                    articleId={article.id}
                                />
                            )}
                            <div className="border-b-2 text-[#D9D9D9] w-4/5 my-4 m-auto"></div>
                        </div>

                        {/* article's information part  */}
                        <div className="flex flex-col space-y-5 w-[100%]">
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-dmsansmedium underline ">Title:</p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedTitle}
                                        onChange={handleTitleChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <p className="pl-2 text-[#9D9E9D] font-opensansbold text-[18px] text-start">{editedTitle}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-dmsansmedium underline">Date:</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedDate}
                                        onChange={handleDateChange}
                                    />
                                ) : (
                                    <p className="pl-2 text-[#9D9E9D] font-opensansbold text-[18px] text-start">{editedDate}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-dmsansmedium underline">Authors:</p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedAuthors}
                                        onChange={handleAuthorsChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <p className="pl-2 text-[#9D9E9D] font-opensansbold text-[18px] text-start">{editedAuthors}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-dmsansmedium underline">Institutions:</p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedInstitutions}
                                        onChange={handleInstitutionsChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <div className="px-2 bg-[#D9D9D9] rounded-l-xl font-opensansbold text-[#9D9E9D] text-[18px] text-star max-h-20 overflow-y-scroll special-scrollbar whitespace-pre-line">
                                        {editedInstitutions}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-dmsansmedium underline">Keywords:</p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedKeywords}
                                        onChange={handleKeywordsChange}
                                    />

                                ) : (
                                    // Render paragraph when not editing
                                    <div className="px-2 bg-[#D9D9D9] rounded-l-xl font-opensansbold text-[#9D9E9D] text-[18px] text-star max-h-20 overflow-y-scroll special-scrollbar whitespace-pre-line">
                                        {editedKeywords}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start text-start space-y-1">
                                <p className="text-black text-[22px] font-dmsansmedium underline">References: </p>
                                {isEditing ? (
                                    // Render input field when editing
                                    <textarea
                                        // rows={Math.max(1, editedKeywords.length)}
                                        className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                        style={{ width: '100%' }}
                                        value={editedRefrences}
                                        onChange={handleRefChange}
                                    />
                                ) : (
                                    // Render paragraph when not editing
                                    <div className="px-2 bg-[#D9D9D9] rounded-l-xl font-opensansbold text-[#9D9E9D] text-[18px] text-star max-h-20 overflow-y-scroll special-scrollbar whitespace-pre-line">
                                        {editedRefrences}
                                    </div>)}
                            </div>
                        </div>
                        <div className="md:hidden flex border-b-2 text-[#D9D9D9] w-4/5 my-4 m-auto"></div>
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