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

function calculateMaxLength() {
    const smallScreenMaxLength = 350;
    const mediumScreenMaxLength = 450;
    const largeScreenMaxLength = 600;

    if (window.innerWidth <= 600) {
        return smallScreenMaxLength;
    } else if (window.innerWidth <= 1024) {
        return mediumScreenMaxLength;
    } else {
        return largeScreenMaxLength;
    }
}

function FulldetailsPopUp({ onClose, articleContent, userRole, getText, articleId }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(articleContent);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleTextChange = (event) => {
        setEditedText(event.target.value);
    };

    const handleSaveClick = async () => {
        console.log("text saved")
        getText(editedText)

        // const editedData = {
        //     text: editedText
        // };
        // console.log('edited data: ', editedData)
        // const isSuccess = await updateArticle(articleId, editedData);
        // if (isSuccess) {
        //     console.log('Text of Article updated successfully');
        //     toast.success('Text of Article updated successfully', {
        //         position: toast.POSITION.TOP_CENTER,
        //         autoClose: 2000,
        //     });
        // } else {
        //     console.error('Failed to update article');
        // }

        setIsEditing(false);
    };

    const [currentPage, setCurrentPage] = useState(0);

    const maxLength = calculateMaxLength();
    function splitString(str, maxLength) {
        const parts = [];
        for (let i = 0; i < str.length; i += maxLength) {
            parts.push(str.substring(i, i + maxLength));
        }
        return parts;
    }

    const pages = splitString(editedText, maxLength);

    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage < pages.length - 1 ? prevPage + 1 : prevPage
        );
    };

    const handlePrevPage = () => {
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