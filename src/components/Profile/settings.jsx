import React, { useState } from 'react';
import { CiSettings } from "react-icons/ci";

const Settings = () => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [username, setUsername] = useState('Maroumarou');
    const [password, setPassword] = useState('happy to help');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePasswordClick = () => {
        setShowChangePassword(true);
    };

    const handleSavePassword = () => {
        // Logic to change password
        if (newPassword === confirmPassword) {
            // Implement your password change functionality here
            console.log('Changing password:', newPassword);
            // Reset password fields
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setShowChangePassword(false);
        } else {
            console.log('New password and confirm password do not match');
        }
    };

    return (
        <div className="flex flex-col w-full justify-start items-start">
            <div className='flex flex-row justify-start px-4 items-center text-start mb-5'>
                <p className='text-black text-[45px] font-dmsansmedium'>Setting</p>
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
                    </div>
                ) : (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="currentPassword" className="block text-black text-sm font-dmsansbold mb-2 ">
                                Current Password
                            </label>
                            <input
                                id="currentPassword"
                                type="text"
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
                                onClick={handleSavePassword}
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