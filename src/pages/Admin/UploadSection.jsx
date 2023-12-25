import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import ArticleIcon from "../../assets/articleIcon.svg"
import avatar from "../../assets/image.jpg"
import quotesRight from "../../assets/blackQuotes/QuotesRight.svg"
import quotesLeft from "../../assets/blackQuotes/QuotesLeft.svg"
import { uploadPDF } from '../../services/uploadApi';


function UploadSection() {

    const [fileType, setFileType] = useState('file');
    const [url, setUrl] = useState('');
    const [error, setError] = useState(null);
    const [files, setFiles] = useState([]);
   
   

    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;
        const validFiles = Array.from(selectedFiles).filter(files => files.type === 'application/pdf');

        setFiles(validFiles);
        setError(validFiles.length === 0 ? 'Please select at least one valid PDF file.' : null);
    };



    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleUpload = async () => {
        if (!isSearchActive) {
            setIsSearchActive(true);
        } else {
            try {
                if ((fileType === 'file' && files.length > 0) || (fileType === 'url' && url)) {

                    const response = await uploadPDF(fileType === 'file' ? files : url);

                    // Check if the response has a 'message' property
                    if (response && response.message) {
                        console.log("Here is our response message: " + response.message);
                    } else {
                        console.log("Unexpected response structure:", response);
                    }
                }
            } catch (error) {
                console.error('Error during upload:', error);
                setError('Error during upload. Please try again.');
            }
        }
    };

    return (
        <div className="flex flex-col pb-10 border-2 rounded-3xl">
            <div className="flex flex-row rounded-t-3xl bg-[#707F65] p-2 items-center justify-start">
                <div className="flex w-1/6 justify-start ml-1">
                    <img src={ArticleIcon} alt="article icon" className="w-[55px] h[55px]" />
                </div>
                <div className="flex w-3/5 justify-center">
                    <p className="text-white font-bold">Administrator Welcome Portal </p>
                </div>
            </div>

            <div className="flex flex-row p-5  pb-10 pt-10 pl-10 pr-10">
                {/* got new files part */}
                <div className="flex md:w-3/4 items-center">
                    <div>
                        <div className="flex flex-row w-full justify-center">
                            <div className="flex items-start justify-center pb-20 pr-10 md:w-1/4">
                                <img src={quotesRight} alt="right quotes" className="w-[60px] h[60px] lg:w-[80px] lg:h[80px]" />
                            </div>
                            <div className="flex flex-row items-center justify-center md:w-1/2">
                                <p className="text-[25px] md:text-[40px] lg:text-[50px] text-[#181818] font-bold whitespace-nowrap">
                                    Got New
                                </p>
                                <p className="bg-[#707F65] text-[25px] md:text-[40px] lg:text-[50px] font-bold text-[#F1F1F1] ml-1 mr-1">Files</p>
                                <p className="text-[25px] md:text-[40px] lg:text-[50px] text-[#181818] font-bold whitespace-no-wrap">
                                    ?
                                </p>
                            </div>
                            <div className="flex items-end justify-center pt-20 pl-10 md:w-1/4">
                                <img src={quotesLeft} alt="left quotes" className="w-[60px] h[60px] lg:w-[80px] lg:h[80px]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* logo part  */}
                <div className="hidden md:flex w-1/4 p-5 justify-end">
                    
                </div>
            </div>

            {/* upload part  */}
            {isSearchActive && (
                <div className="flex flex-col animate-in fade-in zoom-in duration-500 items-center justify-center pt-3 pb-6"> {/* lg:flex-row */}
                    {/* upload file  */}
                    <div className="flex mr-10 ml-3 items-center justify-center ">
                        <label className="mr-5 flex items-center ">
                            <input
                                type="radio"
                                value="file"
                                checked={fileType === 'file'}
                                onChange={() => setFileType('file')}
                                className="mr-2 cursor-pointer"
                            />
                            <span className="text-[12px] md:text-[15px] text-[#181818] font-semibold">Upload File</span>
                        </label>
                        <label className="max-h-[40px] w-1/3 items-center rounded-xl bg-[#707F65] text-white text-[12px] md:text-[15px] text-center py-2 px-4 ">
                            <span>Choose a PDF file</span>
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                disabled={fileType !== 'file'}
                                multiple
                                className={`opacity-0 ${fileType !== 'file' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            />
                        </label>
                    </div>

                    {/* upload URL */}
                    <div className="flex flex-row flex-grow flex-shrink pl-5 pr-5 pt-2 pb-2 mt-5 mb-5 bg-[#707F65] rounded-2xl items-center justify-start shadow-xl">
                        <label className="mr-5 flex items-center ">
                            <input
                                type="radio"
                                value="url"
                                checked={fileType === 'url'}
                                onChange={() => setFileType('url')}
                                className="mr-2 cursor-pointer"
                            />
                            <span className="text-[12px] md:text-[15px] text-[#181818] font-semibold">Upload URL</span>
                        </label>
                        <label className=" rounded-lg bg-[#F0F0F0] text-white text-[12px] md:text-[15px] text-center py-2 px-4 cursor-pointer">
                            <input
                                type="text"
                                onChange={handleUrlChange}
                                disabled={fileType !== 'url'}
                                placeholder="Enter PDF URL"
                                className={`text-black bg-transparent focus:outline-none ${fileType !== 'url' ? 'cursor-not-allowed' : 'cursor-pointe'}`}
                            />
                        </label>
                    </div>
                </div>
            )}

            {/* upload button  */}
            <div className={`flex flex-col justify-center items-center ${isSearchActive ? 'active' : ''}`}>

                {error && <div style={{ color: 'red', marginBottom: 2 }}>{error}</div>}

                <button
                    onClick={handleUpload}
                    // disabled={!isSearchActive || (!file && !url)}
                    className={`rounded-2xl bg-[#707F65] text-white text-[12px] cursor-pointer md:text-[15px] text-center pt-0.5 pb-0.5 w-40 h-10 
                    ${isSearchActive ? 'animate__slideInDown duration-500' : ''}`}
                >
                    <div className="flex flex-row items-center justify-center">
                        {isSearchActive ? (
                            <>
                                Upload
                                <FiUpload className="text-[20px] font-semibold text-[#FFFFFF] mr-1 ml-5" />
                            </>
                        ) : (
                            <>
                                Choose files
                            </>
                        )}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default UploadSection