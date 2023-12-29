/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

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
        <div className="flex flex-col items-start">
            <div className="flex flex-col mb-8 justify-start items-start">

                <h1 className="text-3xl text-black font-semibold mb-4">Settings
                    <br />
                    <br />
                    <h1 className="text-3xl font-bold mb-4 text-[#707F65]"> Password</h1>

                </h1>
                {!showChangePassword ? (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                readOnly
                                className="border-2 text-black rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                readOnly
                                className="border-2 text-black rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={handleChangePasswordClick}
                                className="px-4 py-2 bg-[#707F65] text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2 ">
                                Current Password
                            </label>
                            <input
                                id="currentPassword"
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="border-2 text-black rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="border-2 text-black rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border-2 text-black rounded-md border-[#707F65] px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={handleSavePassword}
                                className="px-4 py-2 bg-[#707F65] text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
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