import React from 'react';
import logo from "../../../assets/articleIcon.svg"
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    function goLinkedIn() {
        const url = '';
        window.open(url, '_blank', 'noopener noreferrer');
    }

    function goInstagram() {
        const url = '';
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        <footer className="flex flex-col md:flex-row bg-[#F3F3F3] justify-center items-start p-5 space-x-5">
            <div className='flex flex-col w-full md:w-auto space-y-5 justify-start items-center md:items-start p-5'>
                <div className='flex flex-row justify-center items-center text-center'>
                    <img src={logo} alt="logo" className='w-[35px] h-[35px] mr-3' />
                    <p className='text-black text-[15px] font-dmsansbold'>appname</p>
                </div>
                <div className='justify-center items-center text-center'>
                    <p className='text-black text-[14px] font-dmsans'>Searching for an article? name got you</p>
                </div>
            </div>
            <div className='flex flex-row w-full md:w-auto'>
                <div className='flex flex-col w-1/2 md:w-auto space-y-5 justify-start items-start text-start p-5'>
                    <p className='text-black text-[15px] font-dmsansbold'>Pages</p>
                    <p className='text-black text-[14px] font-dmsans'>
                        Home it work <br /><br />
                        Pricing <br /><br />
                        Blog <br /><br />
                        Demo
                    </p>
                </div>
                <div className='flex flex-col w-1/2 md:w-auto space-y-5 justify-start items-start text-start p-5'>
                    <p className='text-black text-[15px] font-dmsansbold'>Service</p>
                    <p className='text-black text-[14px] font-dmsans'>
                        Browsing articles <br /><br />
                        Viewing articles
                    </p>
                </div>
            </div>
            <div className='flex flex-row w-full md:w-auto'>
                <div className='flex flex-col w-1/2 md:w-auto space-y-5 justify-start items-start text-start p-5'>
                    <p className='text-black text-[15px] font-dmsansbold'>Contact</p>
                    <div className='flex flex-row'>
                        <FaPhone className='text-black mr-2' />
                        <p className='text-black text-[14px] font-dmsans'>(406) 555-0120</p>  {/*for now*/}
                    </div>
                    <div className='flex flex-row'>
                        <IoMail className='text-black mr-2' />
                        <p className='text-black text-[14px] font-dmsans'>alwaysandforever123@gmail.com</p>  {/*for now*/}
                    </div>
                </div>

                <div className='flex flex-col w-1/2 md:w-auto space-y-5 justify-start items-start text-start p-5'>
                    <p className='text-black text-[15px] font-dmsansbold'>Social media</p>
                    <div className='flex flex-row space-x-5'>
                        <FaLinkedinIn className='text-black cursor-pointer' onClick={goLinkedIn} />
                        <FaInstagram className='text-black cursor-pointer' onClick={goInstagram} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;