import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import RightQuotes from "../../assets/whiteQuotes/RightQuotesW.svg";
import LeftQuotes from "../../assets/whiteQuotes/LeftQuotesW.svg";
import { MdFirstPage, MdLastPage } from "react-icons/md";


function FulldetailsPopUp({ onClose, articleContent }) {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = articleContent.split("\n").filter((page) => page.trim() !== '');

    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage < pages.length - 1 ? prevPage + 1 : prevPage
        );
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
    };

    return (
        <div className="fixed inset-0 w-[100%] flex items-center justify-center bg-black bg-opacity-80">
            {/* Close button */}
            <div className="absolute top-20 right-0 m-4 p-2 cursor-pointer">
                <IoClose
                    className="text-[#D8DAD7] text-[50px] font-bold"
                    onClick={onClose}
                />
            </div>

            <div className="flex mt-20 pt-10">
                <div className="flex flex-row space-x-2">
                    <div className="flex w-1/4 items-start justify-end text-end">
                        <img
                            src={RightQuotes}
                            alt="right quotes"
                            className="w-[60px] h[60px] lg:w-[80px] lg:h[80px]"
                        />
                    </div>
                    <div className="flex flex-col rounded-3xl bg-white p-8 w-1/2 items-center justify-center text-center">
                        {/* Content of the full article */}
                        <div className="flex w-[100%] h-5/6 mb-10">
                            <p className="text-xl text-black text-[20px] font-semibold">
                                {pages[currentPage]}
                            </p>
                        </div>
                        {/* Navigation buttons */}
                        <div className="flex flex-row w-[100%] h-1/6">
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
                    <div className="flex w-1/4 items-end justify-start text-start">
                        <img
                            src={LeftQuotes}
                            alt="left quotes"
                            className="w-[60px] h[60px] lg:w-[80px] lg:h[80px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FulldetailsPopUp;
