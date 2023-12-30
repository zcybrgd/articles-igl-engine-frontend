import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import RightQuotes from "../../assets/whiteQuotes/RightQuotesW.svg";
import LeftQuotes from "../../assets/whiteQuotes/LeftQuotesW.svg";
import { IoArrowBack } from "react-icons/io5";
import { addModerator } from "../../services/modApi";
import { useAuth } from "../../context/AuthContext";

function AddNewModeratorPage() {
    const { token } = useAuth()
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erreur, setErreur] = useState(null);
    const [successfulMessage, setSuccessfulMessage] = useState(null);

    const AddModerator = async () => {
        const moddata = {
            userName: userName,
            firstName: firstName,
            familyName: familyName,
            email: email,
            password: password
        }

        const responsedata = await addModerator(token,moddata)
        if(!responsedata.error) {
            setSuccessfulMessage('Moderator added successfully!');
            setErreur(null); 
        } else {
             setSuccessfulMessage(null); 
             setErreur(responsedata.error ? responsedata.error : 'An error occurred :(');
        }
    }

    function backtoAdminPage() {
        try {
            navigate(`/`);
        } catch (error) {
            console.error("Error loading Admin page:", error);
        }
    }

    return (
        <div className='absolute right-0 top-0 bottom-0 left-0 bg-[#181818]'>
            <div className="flex flex-row w-[100%] h-[100%] justify-start items-center">
                {/*return button  */}
                <div className="absolute top-1 left-1">
                    <p
                        className="rounded-3xl bg-transparent md:text-[15px] text-center p-2  w-25 h-10 cursor-pointer"
                        onClick={backtoAdminPage}
                    >
                        <IoArrowBack className={`text-white text-3xl`} />

                    </p>
                </div>

                {/* "New moderator ?" part  */}
                <div className="flex flex-row order-1 w-1/2 h-1/2 justify-center">
                    <div className="flex w-1/6 items-start justify-end text-end">
                        <img
                            src={RightQuotes}
                            alt="right quotes"
                            className="w-[40px] h[40px] lg:w-[60px] lg:h[60px]"
                        />
                    </div>
                    <div className="flex relative w-2/3 justify-start items-center">
                        <div class="grid grid-cols-3 gap-3">
                            <div className="col-span-1">
                                <p className="text-[25px] md:text-[40px] text-white font-dmsansbold whitespace-nowrap">
                                    New
                                </p>
                            </div>
                            {/* ignore these  */}
                            <div></div>
                            <div></div>
                            <div></div>
                            {/* *** */}
                            <div className="col-span-2">
                                <p className="text-[25px] md:text-[40px] text-white font-dmsansbold whitespace-nowrap">
                                    Moderator ?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/6 items-end justify-start text-start">
                        <img
                            src={LeftQuotes}
                            alt="left quotes"
                            className="w-[40px] h[40px] lg:w-[60px] lg:h[60px]"
                        />
                    </div>
                </div>

                {/* information part  */}
                <div className="flex order-2 w-1/2 h-[100%]">
                    <div className="w-4/5 bg-white rounded-[10px]">
                        <div className="flex flex-col items-center justify-center p-4 md:p-0 mt-6 text-sm ">
                            <div className="flex flex-col w-full md:w-4/5 lg:w-3/5">
                                <div className="flex flex-col space-y-8 py-5 justify-center sm:bg-white lg:bg-white sm:rounded-lg">

                                    {/* First name  */}
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="h-6 font-dmsansmedium focus:outline-none bg-white text-sm text-black placeholder-black mt-2 md:mt-14 border-b-2 border-[#EAEAEA]"
                                    />

                                    {/* Family name  */}
                                    <input
                                        type="text"
                                        placeholder="Family Name"
                                        value={familyName}
                                        onChange={(e) => setFamilyName(e.target.value)}
                                        className="h-6 font-dmsansmedium focus:outline-none bg-white w-5/5 text-sm text-black placeholder-black mt-14 border-b-2 border-[#EAEAEA]"
                                    />

                                    {/* user name  */}
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="h-6 font-dmsansmedium bg-white focus:outline-none  text-sm text-black placeholder-black border-b-2  border-[#EAEAEA]"
                                    />

                                    {/* email  */}
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-6 font-dmsansmedium bg-white focus:outline-none text-sm text-black placeholder-black border-b-2 border-[#EAEAEA]"
                                    />

                                    {/* password  */}
                                    <input
                                        type="password"
                                        placeholder="Password "
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-6 font-dmsansmedium bg-white focus:outline-none text-sm text-black placeholder-black border-b-2 border-[#EAEAEA]"
                                    />

                                    {/* add new moderator  */}
                                    <div className="flex flex-col space-y-4">
                                        {erreur && (
                                            <div className="text-red-500 font-semibold">
                                                {erreur || 'An error occurred'}
                                            </div>
                                        )}

                                        {successfulMessage && (
                                            <div className="text-green-500 font-semibold">
                                                {successfulMessage || 'successful'}
                                            </div>
                                        )}

                                        <button
                                            className="my-1 rounded-full max-sm:text-base max-sm:font-bold max-sm:ml-8 bg-[#434343] hover:white text-white font-opensansbold py-2 px-6 max-sm:mr-6 ml-6 max-sm:w-3/4 max-sm:bg-white max-sm:placeholder:text-white max-sm:text-black"
                                            onClick={AddModerator}
                                        >
                                            Add new moderator
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewModeratorPage