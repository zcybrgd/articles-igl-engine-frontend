import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import RightQuotes from "../../assets/whiteQuotes/RightQuotesW.svg";
import LeftQuotes from "../../assets/whiteQuotes/LeftQuotesW.svg";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import AffichageAnimation from "../../assets/gifs/AffichageAnimation.gif"
import { updateArticle } from "../../services/articlesApi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Calculates the maximum length based on the current window width.
 *
 * @returns {number} The maximum length determined by the current screen size.
 */
function calculateMaxLength() {
    /**
     * The maximum length for small screens (width <= 600 pixels).
     * @type {number}
     */
    const smallScreenMaxLength = 350;

    /**
     * The maximum length for medium screens (width <= 1024 pixels).
     * @type {number}
     */
    const mediumScreenMaxLength = 450;

    /**
     * The maximum length for large screens (width > 1024 pixels).
     * @type {number}
     */
    const largeScreenMaxLength = 600;

    /**
     * The current window width.
     * @type {number}
     */
    const windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
        return smallScreenMaxLength;
    } else if (windowWidth <= 1024) {
        return mediumScreenMaxLength;
    } else {
        return largeScreenMaxLength;
    }
}


/**
 * Displaying the whole text of an article 
 * @date 2/4/2024 - 7:10:04 PM
 *
 * @param {{ onClose: any; articleContent: any; userRole: any; getText: any; articleId: any; }} param0
 * @param {*} param0.onClose
 * @param {*} param0.articleContent
 * @param {*} param0.userRole
 * @param {*} param0.getText
 * @param {*} param0.articleId
 * @returns {*}
 */
function FulldetailsPopUp({ onClose, articleContent, userRole, getText, articleId }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(articleContent);

    /**
 * Sets the component state to indicate that the user is in editing mode.
 */
    const handleEditClick = () => {
        /**
         * Sets the component state to indicate that the user is in editing mode.
         *
         * @param {boolean} isEditing 
         */
        setIsEditing(true);
    };

    /**
     * Handles the change in the text input and updates the corresponding state.
     *
     * @param {Object} event 
     */
    const handleTextChange = (event) => {
        /**
         * Sets the component state with the edited text.
         *
         * @param {string} editedText 
         */
        setEditedText(event.target.value);
    };

    /**
     * Handles the click on the save button, saves the edited text, and exits editing mode.
     */
    const handleSaveClick = async () => {
        console.log("Text saved");

        /**
         * Calls the `getText` function with the edited text and exits editing mode.
         *
         * @param {string} editedText 
         */
        getText(editedText);

        // Set the editing mode to false.
        setIsEditing(false);
    };


    const [currentPage, setCurrentPage] = useState(0);

    const maxLength = calculateMaxLength();

    /**
     * Splits a given string into parts with a specified maximum length.
     *
     * @param {string} str - The input string to be split.
     * @param {number} maxLength - The maximum length for each part.
     * @returns {string[]} An array containing parts of the input string based on the specified maximum length.
     */
    function splitString(str, maxLength) {
        const parts = [];
        for (let i = 0; i < str.length; i += maxLength) {
            parts.push(str.substring(i, i + maxLength));
        }
        return parts;
    }

    /**
     * An array containing parts of the edited text based on the specified maximum length.
     * @type {string[]}
     */
    const pages = splitString(editedText, maxLength);

    /**
     * Handles the action to navigate to the next page.
     */
    const handleNextPage = () => {
        /**
         * Sets the current page based on the previous page value.
         *
         * @param {number} prevPage - The previous page index.
         * @returns {number} The updated current page index.
         */
        setCurrentPage((prevPage) =>
            prevPage < pages.length - 1 ? prevPage + 1 : prevPage
        );
    };

    /**
     * Handles the action to navigate to the previous page.
     */
    const handlePrevPage = () => {
        /**
         * Sets the current page based on the previous page value.
         *
         * @param {number} prevPage 
         * @returns {number} The updated current page index.
         */
        setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
    };


    return (
        <div className="fixed inset-0 w-[100%] h-[100%] flex items-center justify-center bg-black bg-opacity-80">
            {/* Close button */}
            <div className="absolute top-20 right-0 m-1 md:m-4 md:p-2 cursor-pointer">
                <IoClose
                    className="text-[#D8DAD7] text-[50px] font-bold"
                    onClick={onClose}
                />
            </div>

            <div className={`flex w-[100%] ${isEditing && 'h-5/6'} mt-20 pt-10`}>
                <div className="flex flex-row w-[100%] space-x-2">
                    <div className="flex w-1/8 md:w-1/4 items-start justify-end text-end">
                        <img
                            src={RightQuotes}
                            alt="right quotes"
                            className="w-[40px] h[40px] lg:w-[60px] lg:h[60px]"
                        />
                    </div>

                    <div className={`flex flex-col relative rounded-3xl bg-white p-8 w-3/4 md:w-1/2 items-center justify-center text-center`}>
                        {userRole === 'moderator' && (
                            <>
                                {/* edit button */}
                                < div className="absolute top-5 left-2">
                                    <div className="flex flex-row cursor-pointer p-2" onClick={isEditing ? handleSaveClick : handleEditClick}>
                                        {!isEditing ? (
                                            <>
                                                <BiEditAlt className="text-[#43BE83] mt-1" />
                                                <p className="text-[#43BE83] text-[18px] font-dmsansmedium">edit</p>
                                            </>
                                        ) : (
                                            <>
                                                <FaRegSave className="text-[#43BE83] mt-1" />
                                                <p className="text-[#43BE83] text-[18px] font-dmsansmedium">save</p>
                                            </>)}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* animation  */}
                        <div className="absolute top-2 right-2">
                            <img
                                src={AffichageAnimation}
                                alt="Affichage Animation"
                                className="inline h-[45px] w-[45px] md:h-[60px] md:w-[60px]"
                            />
                        </div>

                        {/* Content of the full article */}
                        <div className={`flex w-full h-3/4 mt-[35px] md:mt-[50px] mb-2`}>
                            {isEditing ? (
                                <textarea
                                    rows={15}
                                    className="pl-2 bg-[#F1F1F1] text-[#9D9E9D] font-opensans text-[20px] text-start border-b shadow-[#9ECDB6] shadow-md"
                                    style={{ width: '100%' }}
                                    value={editedText}
                                    onChange={handleTextChange}
                                />
                            ) : (
                                <p className="text-black text-[18px] lg:text-[20px] font-dmsans">
                                    {pages[currentPage]}
                                </p>
                            )}
                        </div>

                        {/* Navigation buttons */}
                        <div className={`flex flex-row w-[100%] h-1/8`}>
                            <div className="flex mr-auto">
                                {currentPage > 0 && (
                                    <MdFirstPage className="cursor-pointer text-[#707F65] text-[30px]" onClick={handlePrevPage} />
                                )}
                            </div>
                            <div className="flex ml-auto">
                                {currentPage < pages.length - 1 && (
                                    <MdLastPage className="cursor-pointer text-[#707F65] text-[30px]" onClick={handleNextPage} />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* left quotes */}
                    <div className="flex w-1/8 md:w-1/4 items-end justify-start text-start">
                        <img
                            src={LeftQuotes}
                            alt="left quotes"
                            className="w-[40px] h[40px] lg:w-[60px] lg:h[60px]"
                        />
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
        </div >
    );
}

export default FulldetailsPopUp;