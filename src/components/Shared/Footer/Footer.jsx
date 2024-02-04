import React from 'react';
import logo from "../../../assets/Logo/logo.png"
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

/**
 * Functional component representing the footer of the application.
 *
 * @function
 * @returns {JSX.Element} 
 */
const Footer = () => {

    /**
     * Opens a new tab/window to the LinkedIn profile.
     *
     * @function
     * @returns {void} 
     */
    function goLinkedIn() {
        const url = '';
        window.open(url, '_blank', 'noopener noreferrer');
    }

    /**
     * Opens a new tab/window to the Github respository.
     *
     * @function
     * @returns {void} 
     */
    function goGithub() {
        const url = 'https://github.com/zcybrgd/articles-igl-engine-frontend';
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        <footer className="flex flex-col md:flex-row bg-[#F3F3F3] justify-center items-start p-5 space-x-8">
            <div className='flex flex-col w-full md:w-auto space-y-5 justify-start items-center md:items-start p-5'>
                <div className='flex flex-row justify-center items-center text-center'>
                    <img src={logo} alt="logo" className='w-[40px] h-[40px] mr-3' />
                    <p className='text-black text-[15px] font-dmsansbold'>Savantia</p>
                </div>
                <div className='justify-center items-center text-center'>
                    <p className='text-black text-[14px] font-dmsans'>The home for thousands of Scientific Articles</p>
                </div>
            </div>
            <div className='flex flex-row w-full md:w-auto'>
                <div className='flex flex-col w-1/2 md:w-auto space-y-5 justify-start items-start text-start p-5'>
                    <p className='text-black text-[15px] font-dmsansbold'>Pages</p>
                    <p className='text-black text-[14px] font-dmsans'>
                        Welcome <br /><br />
                        Home <br /><br />
                        Search results <br /><br />
                        profile
                    </p>
                </div>

            </div>
            <div className='flex flex-row w-full md:w-auto'>
                <div className='flex flex-col w-1/2 md:w-auto space-y-5 justify-start items-start text-start p-5'>
                    <p className='text-black text-[15px] font-dmsansbold'>Contact</p>
                    <div className='flex flex-row'>
                        <IoMail className='text-black mr-2' />
                        <p className='text-black text-[14px] font-dmsans'>nadadjedjig@gmail.com</p>
                    </div>
                </div>

                <div className='flex flex-col w-1/2 md:w-auto space-y-5 justify-start items-start text-start p-5'>
                    <p className='text-black text-[15px] font-dmsansbold'>Social media</p>
                    <div className='flex flex-row space-x-5'>
                        <IoLogoGithub className='text-black cursor-pointer' onClick={goGithub} />
                        <FaLinkedinIn className='text-black cursor-pointer' onClick={goLinkedIn} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;