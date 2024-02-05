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

    const [profileImg, setProfileImg] = useState(user.imageUrl.length > 0 ? user.imageUrl : Green)

    /**
     * Toggles the editing state between true and false.
     *
     * @function
     */
    const toggleEdit = () => {
        /**
         * Set the editing state to its opposite value.
         *
         * @function
         * @param {boolean} editing - The current editing state.
         */
        setEditing((editing) => !editing);
    };


    /**
     * Toggles the editing state, saves user information, and logs the result.
     *
     * @async
     * @function
     */
    const toggleSave = async () => {
        try {
            /**
             * Set the editing state to its opposite value.
             *
             * @function
             * @param {boolean} editing 
             */
            setEditing((editing) => !editing);

            /**
             * Prepare user information for modification.
             *
             * @constant
             * @type {Object}
             */
            const data = {
                userName: user.userName,
                firstName: user.firstName,
                familyName: user.familyName,
                email: user.email,
            };

            /**
             * Modify user information asynchronously.
             *
             * @async
             * @function
             * @param {string} token 
             * @param {Object} data 
             * @returns {Object} 
             */
            const response = await modifyUserInfo(token, data);

            if (response.data) {
                console.log("User information modified successfully!");
            } else {
                console.log("Error in modifying user information:", response.error);
            }
        } catch (error) {
            /**
             * Handles errors that may occur during the asynchronous operation.
             *
             * @param {Error} error 
             */
            console.error('Error during toggleSave:', error);
        }
    };

    /**
     * Handles the change event for input fields and updates the corresponding property in the user state.
     *
     * @function
     * @param {Event} e - The event object representing the change event.
     * @param {Object} e.target - The target element that triggered the event.
     * @param {string} e.target.name - The name attribute of the target element, representing the property to update.
     * @param {string} e.target.value - The new value of the target element.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;

        /**
         * Update the corresponding property in the user state.
         *
         * @function
         * @param {Object} user - The current user state.
         * @param {string} name - The name of the property to update.
         * @param {string} value - The new value for the property.
         */
        setUser({ ...user, [name]: value });
    };

    /**
     * Handles the change event for selecting a new image file, updates the profile image preview, and sets the image URL in the user state.
     *
     * @function
     * @param {Event} e - The event object representing the change event.
     * @param {Object} e.target - The target element that triggered the event.
     * @param {FileList} e.target.files - The array-like object representing the selected files.
     * @param {File} e.target.files[0] - The first selected file, representing the new image file.
     */
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
