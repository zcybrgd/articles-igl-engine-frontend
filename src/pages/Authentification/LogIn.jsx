import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { logIn } from "../../services/authApi";
import { useAuth } from "../../context/AuthContext";
import articleIcon from '../.././assets/icons/article.svg';
import LoginAnimation from "../../assets/gifs/LoginAnimation.gif"

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [erreur, setErreur] = useState(null);
    const [successfulMessage, setSuccessfulMessage] = useState(null)

    const handleLogin = async () => {
        try {
            setErreur(null);
            setSuccessfulMessage(null)
            if (!username) {
                setErreur("Username is missing.");
                return;
            }

            if (!password) {
                setErreur("Password is missing.");
                return;
            }

            const userData = {
                userName: username,
                password: password,
            }

            // const response = await logIn(userData)

            // if (response && response.data && response.data.token) {
            //     setSuccessfulMessage(`successful login, ${username} ! gonna redirect you in a sec`)

            //     const userRole = response.data.user.role.toLowerCase();
            //     const userDataAndRole = {
            //         userName: username,
            //         password: password,
            //         userRole: userRole,
            //         token : response.data.token,
            //         id: response.data.user.id
            //     };


            // hihi :)
            const userDataAndRole = {
                userName: 'nadadjg',
                password: 'password',
                userRole: 'admin',
            };
            await login(userDataAndRole);

            navigate("/", { state: { userRole: userDataAndRole.userRole, user: userDataAndRole } });

            // navigate("/", { state: { userRole, user: response.data.user } });

            // } else {
            //     if (response && response.data && response.data.error) {
            //         setErreur(`Login failed. ${response.data.error}`);
            //     }
            // }
        } catch (error) {
            console.error("Error in handleLogin:", error);
            setErreur("An unexpected error occurred.");
        }
    };

    const leftBorderRadius = {
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
    };

    function openSignUpPage() {
        try {
            navigate(`/signup`);
        } catch (error) {
            console.error("Error loading SignUp Page:", error);
        }
    }

    return (
        <div className='absolute top-0 right-0 left-0 bg-black grid grid-cols-2 max-sm:h-full'>
            <div className='flex'>
                <div className='h-screen grid max-sm:h-screen bg-black lg:w-4/5'>
                    <div className="absolute top-1 left-1">
                        <div className="hidden max-sm:flex flex-col items-start justify-start p-5 space-y-2">
                            <h1 className="text-white bg-black text-4xl font-dmsansbold"> Login </h1>
                            <p className="text-white bg-black text-xl font-dmsansbold">Welcome back!</p>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 max-sm:left-8 justify-center items-center w-4/5 md:w-3/5 h-full md:h-full max-sm:h-4/5 max-sm:mt-28">
                        <div className="flex flex-col w-[100%] items-center justify-center text-white space-y-2 ">
                            <div className="mb-12 "></div>
                            <div className="absolute max-sm:w-full w-3/5 inset-y-8 place-content-center mt-16 space-y-0 md:bg-black max-sm:bg-white md:rounded-none rounded-lg">
                                <div className="flex flex-col w- gap-6 space-y-0 mt-16 max-sm:mt-16 max-sm:space-y-0 max-sm:justify-center sm:mt-16 sm:space-y-0 md:space-y-0 sm:bg-white sm:h-3/4 lg:bg-black sm:rounded-lg">
                                    <input
                                        type="text"
                                        placeholder="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className=" lg:bg-black font-dmsansmedium h-6 sm:placeholder:text-black sm:text-black focus:outline-none w-5/5 text-sm text-white placeholder-white mt-20 border-b-2 max-sm:border-black  max-sm:mt-0 max-sm:w-4/5 max-sm:ml-6 max-sm:mr-6 bg-transparent placeholder:text-white  max-sm:placeholder:text-black max-sm:text-black sm:mr-6 sm:ml-6 lg:text-white lg:placeholder:text-white"
                                    />
                                    <input
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-transparent font-dmsansmedium border-b-2 h-6 lg:bg-black sm:text-black sm:placeholder:text-black focus:outline-none text-sm text-white max-sm:border-black  max-sm:mt-0 max-sm:w-4/5 max-sm:ml-6 max-sm:mr-6 max-sm:text-black max-sm:placeholder:text-black sm:mr-6 sm:ml-6 lg:text-white lg:placeholder:text-white  "
                                    />
                                    <div className="w-4/5 flex flex-col justify-start items-center mt-8 space-y-8"></div>

                                    <button onClick={handleLogin} className="my-1 rounded-full bg-white font-dmsansmedium text-black font-bold py-2 px-4 w-full max-sm:w-4/5 max-sm:ml-6 max-sm:mr-6 max-sm:bg-[#1C1A1A]  max-sm:text-white sm:bg-black lg:bg-white sm:mr-6 sm:ml-6 sm:w-4/5 sm:text-white lg:text-black">
                                        Log in
                                    </button>

                                    <div>
                                        {successfulMessage && (
                                            <p className="text-green-500 mt-2">{successfulMessage || 'successful'}</p>
                                        )}
                                        {erreur && (
                                            <p className="text-red-500 mt-2">
                                                {erreur || 'An error occurred'}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mt-2 text-sm flex items-center justify-center ">
                                        <p className="text-black font-dmsansmedium mr-1 md:text-white"> Do not have an account yet? </p>
                                        <p className="text-[#4880FF] font-dmsansbold hover:underline cursor-pointer" onClick={openSignUpPage}>Sign up</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:text-white text-7xl absolute text-start right-0 w-4/5 md:w-2/5 h-full md:h-full hidden md:block md:text-transparent inset-x-2/4" style={leftBorderRadius} >
                        <div className="lg:text-white font-dmsansmedium mt-8 md:text-transparent">Log</div>
                    </div>
                    {/* // White part for other content  */}
                    <div className=" lg:text-black text-7xl text-start absolute inset-y-0 right-0 w-3/5 md:w-2/5 bg-white h-full md:h-full hidden md:block md:text-transparent" style={leftBorderRadius} >
                        <div className="lg:text-black font-dmsansmedium mt-8 md:text-transparent">
                            in
                            <img
                                src={articleIcon}
                                alt="Article Icon"
                                className="hidden lg:inline h-8 w-8 ml-4"
                            />
                        </div>
                        <div className="flex w-full h-3/5 justify-center items-center">
                            <img
                                src={LoginAnimation}
                                alt="Login Animation"
                                className="inline h-[180px] w-[180px]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage;