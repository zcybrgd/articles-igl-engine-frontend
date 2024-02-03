import React, { useState } from 'react';
import { contactInfo } from '../../services/contactsApi';

const ContactUs = () => {

    const [formData, setFormData] = useState({});
    const [erreur, setErreur] = useState(null);
    const [successfulMessage, setSuccessfulMessage] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const submitInfo = async (e) => {
        e.preventDefault()

        try {
            setErreur(null);
            setSuccessfulMessage(null)
            const response = await contactInfo(formData);
            console.log("Form Data:", formData);
            console.log(response)
            setSuccessfulMessage(response.message);
        } catch (error) {
            console.error(error);
            setErreur(error);
        }
    };

    return (
        <div id="contact" className="flex flex-row w-full justify-center bg-white">
            <div className="flex">
                <div className="w-16 bg-black h-full md:h-screen  flex max-sm:h-screen">
                </div>
            </div>
            <form className="w-full px-8 bg-white rounded-lg flex flex-col items-center" onSubmit={submitInfo}>
                <div className="border-b-2 border-[#707F65] w-1/2 mb-10"></div>

                <h2 className="text-4xl md:text-5xl font-dmsansmedium mb-6 text-[#707F65]">Contact Us</h2>

                <div className="mb-6 w-full">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full text-black font-dmsans border-gray-300 bg-[#F1F1F1] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-2 px-3 mt-1"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6 w-full">

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full text-black font-dmsans bg-[#F1F1F1] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-2 px-3 mt-1"
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6 w-full">

                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full text-black font-dmsans bg-[#F1F1F1] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-2 px-3 mt-1"
                        placeholder="Enter your message"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type='submit' className="bg-[#707F65] text-white font-dmsansmedium py-2 px-4 rounded-md hover:bg-[#707F65] transition-colors">
                    Send Message
                </button>
                <div className="">
                    {successfulMessage && (
                        <p className="text-green-500 mt-2 text-lg">{successfulMessage}</p>
                    )}
                    {erreur && (
                        <p className="text-red-500 mt-2 text-lg">
                            {erreur}
                        </p>
                    )}
                </div>
            </form>

        </div>


    );
};

export default ContactUs;