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


/**
 * Display all details of the article (title, summary, authors, ...) and allows editing for moderators
 * @date 2/4/2024 - 6:56:41 PM
 *
 * @returns {*}
 */
function ArticleDetails() {
    const { token } = useAuth()
    const location = useLocation();
    const article = location.state.article;
    const userRole = location.state.role;
    const navigate = useNavigate();

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


    /**
     * Open the full article popup
     */
    const viewFullArticle = () => {
        /**
         * Sets the component state to open the full mode for viewing the article.
         *
         * @param {boolean} isFullModeOpen - 
         */
        setFullModeOpen(true);
    };

    /**
     * Close the full article popup
     */
    const closeCard = () => {
        /**
         * Sets the component state to close the full mode.
         *
         * @param {boolean} isFullModeOpen - 
         */
        setFullModeOpen(false);
    };

    /**
     * Sets the component state with the provided text and triggers the save action.
     *
     * @param {string} text - The text to be set in the component state.
     */
    const getText = (text) => {
        /**
         * Sets the component state with the provided text.
         *
         * @param {string} newText 
         */
        setnewText(text)

        handleSaveClick()
    }

    /**
     * Handles the validation of an article and navigates back to the main page upon success.
     *
     * @throws {Error} Throws an error if there's an issue validating the article.
     */
    const handleValidateArticle = async () => {
        console.log("article validated")
        try {
            /**
             * Validates the article with the provided ID using the authentication token.
             *
             * @param {string} articleId - The ID of the article to validate.
             * @param {string} authToken - The authentication token.
             * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the validation.
             */
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
    };

    /**
     * Sets the component state to indicate that the editing mode should be enabled.
     */
    const handleEditClick = () => {
        /**
         * Sets the component state to indicate that the editing mode should be enabled.
         *
         * @param {boolean} isEditing 
         */
        setIsEditing(true);
    };

    /**
     * Handles the deletion of an article and navigates back to the main page upon success.
     *
     * @throws {Error} Throws an error if there's an issue deleting the article.
     */
    const handleDeleteClick = async () => {
        console.log("article deleted")
        try {
            console.log(token)

            /**
             * Deletes the article with the provided ID using the authentication token.
             *
             * @param {string} articleId - The ID of the article to delete.
             * @param {string} authToken - The authentication token.
             * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the deletion.
             */
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

    /**
     * Handles the saving of edited article data and updates the article upon success.     
     */
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
            authors: newAuthorsArray ? newAuthorsArray : " ",
            institutions: newInstitutionsArray ? newInstitutionsArray : " ",
            keywords: editedKeywords ? editedKeywords : " ",
            title: editedTitle ? editedTitle : " ",
            abstract: editedAbstract ? editedAbstract : " ",
            bibliographie: newRefrencesArray ? newRefrencesArray : "",
            date: editedDate ? editedDate : " ",
            text: newText ? newText : article.text,
        };

        console.log("article: ", editedData)

        /**
         * Updates the article with the provided ID using the edited data and authentication token.
         *
         * @param {string} articleId - The ID of the article to update.
         * @param {Object} editedArticleData - The edited data for updating the article.
         * @param {string} authToken - The authentication token.
         * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the update.
         */
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

    /**
     * Cancels the editing process and reverts the changes to the original article data.
     */
    const handleCancelClick = () => {
        console.log("editing cancelled")

        /**
         * Reverts the changes to the original article data in the component state.
         *
         * @param {string} 
         * @param {string} 
         * @param {string} 
         * @param {string} 
         * @param {string} 
         * @param {string} 
         */
        setIsEditing(false);
        setEditedKeywords(article.keywords);
        setEditedInstitutions(article.institutions.join(', '));
        setEditedAuthors(article.authors.join(', '));
        setEditedRef(article.bibliographie.join(', '));
        setEditedTitle(article.title);
        setEditedDate(article.date)
    };

    /**
     * Handles the change in keywords input and updates the corresponding state.
     *
     * @param {Object} event - The change event object.
     */
    const handleKeywordsChange = (event) => {
        /**
         * Sets the component state with the edited keywords.
         *
         * @param {string} editedKeywords - The edited keywords to be set in the component state.
         */
        setEditedKeywords(event.target.value);
    };

    /**
     * Handles the change in institutions input and updates the corresponding state.
     *
     * @param {Object} event - The change event object.
     */
    const handleInstitutionsChange = (event) => {
        /**
         * Sets the component state with the edited institutions.
         *
         * @param {string} editedInstitutions - The edited institutions to be set in the component state.
         */
        setEditedInstitutions(event.target.value);
    };

    /**
     * Handles the change in authors input and updates the corresponding state.
     *
     * @param {Object} event - The change event object.
     */
    const handleAuthorsChange = (event) => {
        /**
         * Sets the component state with the edited authors.
         *
         * @param {string} editedAuthors - The edited authors to be set in the component state.
         */
        setEditedAuthors(event.target.value);
    };

    /**
     * Handles the change in references input and updates the corresponding state.
     *
     * @param {Object} event - The change event object.
     */
    const handleRefChange = (event) => {
        /**
         * Sets the component state with the edited references.
         *
         * @param {string} editedReferences - The edited references to be set in the component state.
         */
        setEditedReferences(event.target.value);
    };

    /**
     * Handles the change in title input and updates the corresponding state.
     *
     * @param {Object} event - The change event object.
     */
    const handleTitleChange = (event) => {
        /**
         * Sets the component state with the edited title.
         *
         * @param {string} editedTitle - The edited title to be set in the component state.
         */
        setEditedTitle(event.target.value);
    };

    /**
     * Handles the change in abstract input and updates the corresponding state.
     *
     * @param {Object} event - The change event object.
     */
    const handleAbstractChange = (event) => {
        /**
         * Sets the component state with the edited abstract.
         *
         * @param {string} editedAbstract - The edited abstract to be set in the component state.
         */
        setEditedAbstract(event.target.value);
    };

    /**
     * Handles the change in date input and updates the corresponding state.
     *
     * @param {Object} event - The change event object.
     */
    const handleDateChange = (event) => {
        /**
         * Sets the component state with the edited date.
         *
         * @param {string} editedDate - The edited date to be set in the component state.
         */
        setEditedDate(event.target.value);
    };

    /**
     * Adds the article to the user's collection of favorites.
     *
     * @throws {Error} Throws an error if there's an issue adding the article to the collection.
     */
    const addArticleToCollection = async () => {
        /**
         * Sets the component state to indicate that the bookmark button is clicked.
         *
         * @param {boolean} isBookMarkClicked - The state indicating whether the bookmark button is clicked or not.
         */
        setBookMarkClicked(true)
        console.log("article added id:", article.id)

        /**
         * Adds the article with the provided ID to the user's favorites using the authentication token.
         *
         * @param {string} authToken - The authentication token.
         * @param {string} articleId - The ID of the article to add to the favorites.
         * @returns {Promise<{error: string, message: string}>} A promise that resolves to an object containing an error message or a success message.
         */
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

    /**
     * Opens the PDF version of the article in a new browser tab.
     */
    function openArticlesPdf() {
        console.log("article opened pdf id:", article.id)

        /**
         * The URL of the PDF version of the article.
         * @type {string}
         */
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