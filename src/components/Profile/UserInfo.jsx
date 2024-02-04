import React, { useState } from 'react';
import Green from '../../assets/styling/green.svg'
import { useAuth } from '../../context/AuthContext';
import { modifyUserInfo } from '../../services/clientApi';

const UserProfile = () => {
    const { firstName, familyName, email, userName, token } = useAuth();

    const [editing, setEditing] = useState(false);

    // for testing
    const [user, setUser] = useState({
        userName: userName,
        firstName: firstName,
        familyName: familyName,
        email: email,
        // imageUrl: 'https://via.placeholder.com/150',
        imageUrl: ''
    });

    console.log("firstName", firstName);
    console.log("familyName", familyName);
    console.log("email", email)
    console.log("username", userName)
    console.log("token", token)

    const [profileImg, setProfileImg] = useState(user.imageUrl.length > 0 ? user.imageUrl : Green)

    const toggleEdit = () => {
        setEditing(!editing);
    }

    const toggleSave = async () => {
        setEditing(!editing);
        const data = {
            userName: user.userName,
            firstName: user.firstName,
            familyName: user.familyName,
            email: user.email,
        };
        const response = await modifyUserInfo(token, data);
        if (response.data) {
            console.log("client modified successfully!!")
        }
        else {
            console.log("error in modifying the client info", response.error)
        }
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
                setProfileImg(reader.result)
                setUser({ ...user, imageUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="flex flex-col relative w-full p-3 rounded-md justify-center md:justify-start items-center md:items-start mt-4">

            <div className='md:hidden absolute z-0 -top-20 right-0 left-0 h-[250px] rounded-b-[60px] bg-[#3B3B3B]'></div>

            <div className='flex flex-col z-10 md:flex-row rounded-3xl w-4/5 p-8 md:p-2 bg-[#F1F1F1] md:bg-transparent shadow-xl md:shadow-none'>
                <div className='flex md:w-1/3 justify-center items-center'>
                    <label htmlFor="profilePic" className="mb-2 cursor-pointer ">
                        <img
                            src={profileImg}
                            alt="User Profile"
                            className="rounded-full object-cover h-[150px] w-[150px] overflow-hidden mb-2 bg-black shadow-xl"
                        />
                    </label>
                    <input
                        id="profilePic"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
                <div className='flex justify-center items-center text-center md:text-start'>
                    <p className='text-black text-[28px] md:text-[35px] font-dmsansbold'>{userName}</p>
                </div>
            </div>
            <div className='flex flex-col w-full p-4'>
                <div className="flex flex-col md:flex-row w-full md:mb-4 mt-5">
                    <div className="flex flex-col justify-center items-center mb-4 mr-auto p-1 w-full md:w-1/2 md:pr-2">
                        <label className="font-dmsansbold text-start w-4/5 text-black  text-sm mb-2 " htmlFor="userName ">
                            User Name
                        </label>
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            value={user.userName}
                            readOnly={!editing}
                            onChange={handleChange}
                            className={`border-2 rounded-md border-[#707F65] w-4/5 text-black font-spacemono px-4 py-2 ${editing ? 'bg-white shadow-lg' : 'bg-[#F1F1F1]'} focus:outline-none focus:ring focus:border-[#707F65]`}
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center mb-4 mr-auto p-1 w-full md:w-1/2 md:pr-2">
                        <label className="font-dmsansbold text-black text-start w-4/5 text-sm mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={user.firstName}
                            readOnly={!editing}
                            onChange={handleChange}
                            className={`border-2 rounded-md border-[#707F65] w-4/5 text-black font-spacemono px-4 py-2 ${editing ? 'bg-white shadow-lg' : 'bg-[#F1F1F1]'} focus:outline-none focus:ring focus:border-[#707F65]`}
                        />
                    </div>

                </div>

                <div className="flex flex-col mb-4 md:flex-row">
                    <div className="flex flex-col justify-center items-center mb-4 mr-auto p-1 w-full md:w-1/2 md:pr-2">
                        <label className="w-4/5 font-dmsansbold text-black text-start text-sm mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={user.email}
                            readOnly={!editing}
                            onChange={handleChange}
                            className={`border-2 rounded-md border-[#707F65] w-4/5 text-black font-spacemono px-4 py-2 ${editing ? 'bg-white shadow-lg' : 'bg-[#F1F1F1]'} focus:outline-none focus:ring focus:border-[#707F65]`}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4 mr-auto p-1 w-full md:w-1/2 md:pr-2">
                        <label className="w-4/5 font-dmsansbold text-black text-start text-sm mb-2" htmlFor="lastName">
                            Family Name
                        </label>
                        <input
                            id="familyName"
                            name="familyName"
                            type="text"
                            value={user.familyName}
                            readOnly={!editing}
                            onChange={handleChange}
                            className={`border-2 rounded-md border-[#707F65] w-4/5 text-black font-spacemono px-4 py-2 ${editing ? 'bg-white shadow-lg' : 'bg-[#F1F1F1]'} focus:outline-none focus:ring focus:border-[#707F65]`}
                        />

                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                {editing ? (
                    <button
                        onClick={toggleSave}
                        className="px-4 py-2 bg-[#707F65] text-white font-spacemono rounded-md focus:outline-none focus:ring focus:border-blue-300 w-36"
                    >
                        Save changes
                    </button >
                ) : (
                    <button
                        onClick={toggleEdit}
                        className="border-2 px-4 py-2 border-[#707F65] bg-[#F1F1F1] text-black font-spacemono rounded-md focus:outline-none focus:ring focus:border-blue-300 w-36 "
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
