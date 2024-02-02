import React, { useState, useEffect } from 'react';
import { CiSettings } from "react-icons/ci";
import { modifyClient } from '../../services/clientApi';
import { useAuth } from '../../context/AuthContext';

const Settings = () => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [password, setPassword] = useState('default');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [erreur, setErreur] = useState('');
    const [successfulMessage, setSuccessfulMessage] = useState(null);
    const { token, id, userName } = useAuth();
    const [username, setUsername] = useState(userName);


    const handleChangePasswordClick = () => {
        setShowChangePassword(true);
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            setErreur('');
            setSuccessfulMessage(null);

            const clientId = id; // Replace with your actual client ID

            const clientData = {
                current_password: currentPassword, // Verify old password for security measures
                new_password: newPassword, // Use the newPassword if provided, otherwise keep the existing password
                confirmNewPassword: confirmPassword, // Add the confirmNewPassword field
            };

            const response = await modifyClient(token, clientId, clientData);
            console.log('Response from modifyClient:', response);

            // Reset fields
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setShowChangePassword(false);
            setSuccessfulMessage(response.message);
            setErreur(response.error);

        } catch (error) {
            setErreur(response.error);
        }
    };

    return (
        <div className="flex flex-col w-full justify-start items-start">
            <div className='flex flex-row justify-start px-4 items-center text-start mb-5'>
                <p className='text-black text-[45px] font-dmsansmedium'>Settings</p>
                <CiSettings className='text-black text-[40px] ml-4' />
            </div>

            <div className='flex flex-col w-full justify-center items-center md:justify-start md:items-start text-start md:mx-4 mt-3'>
                <div className='flex md:w-full text-start mb-3'>
                    <p className='text-[#707F65] text-[25px] font-dmsansmedium'>Password</p>
                </div>
                {!showChangePassword ? (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-black font-dmsansbold text-sm mb-2">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                readOnly
                                className="border-2 text-black font-spacemono rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-black text-sm font-dmsansbold mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                readOnly
                                className="border-2 text-black font-spacemono rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="flex py-4 justify-center">
                            <button
                                onClick={handleChangePasswordClick}
                                className="px-4 py-2 bg-[#707F65] text-white rounded-md font-spacemono focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Change Password
                            </button>
                        </div>
                        <div className='flex flex-col w-full justify-start items-start'>
                            {successfulMessage && (
                                <p className="text-green-500 mt-2 text-lg">{successfulMessage}</p>
                            )}
                            {erreur && (
                                <p className="text-red-500 mt-2 text-lg">
                                    {erreur}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (

                    <div>
                        <div className="mb-4">
                            <label htmlFor="currentPassword" className="block text-black text-sm font-dmsansbold mb-2 ">
                                Current Password
                            </label>
                            <input
                                id="currentPassword"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="border-2 text-black font-spacemono rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-white shadow-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-black text-sm font-dmsansbold mb-2">
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                type="text"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="border-2 text-black font-spacemono rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-white shadow-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-black text-sm font-dmsansbold mb-2">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="text"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border-2 text-black font-spacemono rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-white shadow-lg"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={handleSaveChanges}
                                className="px-4 py-2 bg-[#707F65] text-white font-spacemono rounded-md "
                            >
                                Save Password
                            </button>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default Settings;