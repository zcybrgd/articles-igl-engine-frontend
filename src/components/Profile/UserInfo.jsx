// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const UserProfile = () => {
    // You would typically get these user details from props or state
    const [editing, setEditing] = useState(false);

    //for testing
    const [user, setUser] = useState({
        userName: 'Maroumarou',
        firstName: 'Noneed',
        lastName: 'happy to help',
        email: 'nano@example.com',
        imageUrl: 'https://via.placeholder.com/150',
    });

    const toggleEdit = () => {
        setEditing(!editing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });


    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({ ...user, imageUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="flex">
            <div className="flex flex-col w-auto p-6 rounded-md justify-start mt-4 ">
                <label htmlFor="profilePic" className="mb-2 cursor-pointer ">
                    <img
                        src={user.imageUrl}
                        alt="User Profile"
                        className="rounded-full max-h-30 max-w-30 overflow-hidden mb-2 bg-black shadow-xl"
                    />
                </label>
                <input
                    id="profilePic"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                />
                <div className="flex flex-col w-[100%] mb-4 md:flex-row border-[#707F65] mt-5">
                    <div className="mb-4 mr-auto items-start justify-start md:w-1/2 md:pr-2 border-[#707F65]">
                        <label className="block items-start justify-start text-gray-700 text-sm font-bold mb-2 " htmlFor="userName ">
                            User Name
                        </label>
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            value={user.userName}
                            readOnly={!editing}
                            onChange={handleChange}
                            className="border-2 rounded-md border-[#707F65] text-black px-4 py-2 w-full focus:outline-none focus:ring focus:border-[#707F65] bg-[#F1F1F1]"
                        />
                    </div>

                    <div className="mb-4 ml-auto md:w-1/2 md:pl-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={user.firstName}
                            readOnly={!editing}
                            onChange={handleChange}
                            className="border-2 rounded-md border-[#707F65] text-black px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 bg-[#F1F1F1]"
                        />
                    </div>

                </div>
                <div className="flex flex-col mb-4 md:flex-row">
                    <div className="mb-4 mr-auto md:w-1/2 md:pr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={user.email}
                            readOnly={!editing}
                            onChange={handleChange}
                            className="border-2 rounded-md border-[#707F65] text-black px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 bg-[#F1F1F1]"
                        />
                    </div>
                    <div className="mb-4 ml-auto md:w-1/2 md:pl-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={user.lastName}
                            readOnly={!editing}
                            onChange={handleChange}
                            className="border-2 rounded-md border-[#707F65] text-black px-4 py-2  focus:outline-none focus:ring focus:border-blue-300 bg-[#F1F1F1]"
                        />

                    </div>
                </div>
                <div className="flex justify-center">
                    {editing ? (
                        <button
                            onClick={toggleEdit}
                            className="px-4 py-2 bg-[#707F65] text-white rounded-md focus:outline-none focus:ring focus:border-blue-300 w-36"
                        >
                            Save changes
                        </button>
                    ) : (
                        <button
                            onClick={toggleEdit}
                            className="border-2 px-4 py-2 border-[#707F65] bg-[#F1F1F1] text-black rounded-md focus:outline-none focus:ring focus:border-blue-300 w-36 "
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;