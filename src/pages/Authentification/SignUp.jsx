import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import articleIcon from '../.././assets/icons/article.svg';
import SignupAnimation from "../../assets/gifs/SignUpAnimation.gif"
import { AiFillPicture } from "react-icons/ai";
import { signUp } from "../../services/authApi";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [successfulMessage, setSuccessfulMessage] = useState(null);

  useEffect(() => {
    if (successfulMessage) {
      const timerId = setTimeout(() => {
        openLogInPage();
      }, 4000);

      return () => clearTimeout(timerId);
    }
  }, [successfulMessage]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };
  const openLogInPage = () => {
    try {
      navigate(`/login`);
    } catch (error) {
      console.error("Error loading SignUp Page:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      // reset the error 
      setErreur(null)
      const userData = new FormData();
      userData.append('firstName', firstName);
      userData.append('familyName', familyName);
      userData.append('userName', userName);
      userData.append('email', email);
      userData.append('password', password);
      if (profilePicture) {
        userData.append('profile_picture', profilePicture);
      }

      const response = await signUp(userData);


      if (response && response.data && response.data.token) {
        setSuccessfulMessage(`Successfully Signed Up! Welcome Abroad, ${firstName}, You are going to be redirected to the login page`);
        localStorage.setItem('authToken', response.data.token);
        console.log('Successful Message Set:', successfulMessage);
      } else if (response && response.data && response.data.error) {
        setErreur(response.data.error);
      } else {
        setErreur('An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='bg-black absolute right-0 top-0 w-full h-full justify-start items-center grid grid-cols-2 '>
      <div className="flex h-3/5 justify-center items-center">
        <img
          src={SignupAnimation}
          alt="Login Animation"
          className="inline h-[150px] w-[150px]"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-3/5 max-sm:w-full bg-white max-sm:bg-white place-content-center space-y-6 max-sm:rounded-none lg:rounded-s-[20px] md:rounded-s-[20px] sm:rounded-s-[20px] md:rounded-bl-lg">
        <div className="flex flex-col items-center justify-center p-5 max-sm:p-10 md:p-0 mt-6 max-sm:text-white text-sm max-sm:text-2xl">
          <div className="max-sm:hidden flex flex-row">
            <h1 className="text-black font-bold text-xl mb-8"> Create Account </h1>
            <img
              src={articleIcon}
              alt="Article Icon"
              className="max-sm:hidden md:inline-block lg:inline h-8 w-8 ml-4 lg:mt-0"
            />
          </div>

          <div className="absolute top-1 left-1">
            <div className="hidden max-sm:flex flex-col items-start justify-start p-5 space-y-2">
              <h1 className="text-black bg-white text-4xl font-bold"> Sign Up </h1>
              <p className="text-black bg-white text-xl font-bold">Welcome among us!</p>
            </div>
          </div>

          {/* <div className="absolute inset-y-8  w-2/5 md:w-5/5  h-4 md:h-4/5 flex place-content-center mt-16 space-y-0 "> */}
          <div className="flex flex-col space-y-10 w-full md:w-4/5 lg:w-3/5 max-sm:mt-20">
            <div className="flex flex-col space-y-8 max-sm:bg-black py-5 max-sm:justify-center max-sm:rounded-lg sm:bg-white lg:bg-white sm:rounded-lg">
              <div className="flex flex-row w-full space-x-5">
                <label
                  htmlFor="profilePicture"
                  className="border-2 border-[#434343] rounded-xl p-2 flex flex-row max-sm:text-white text-black font-semibold max-sm:text-sm text-md max-sm:ml-10 cursor-pointer"
                >
                  <AiFillPicture className="mt-1 mr-3 text-md" />
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  placeholder="Enter PDF URL"
                  style={{ display: 'none' }}
                  onChange={handleProfilePictureChange}
                />
              </div>

              {/* {profilePicture ? (
                <p className="text-black mt-2">
                  Profile Picture: {profilePicture.name}
                </p>
              ) : (
                <p className="text-black mt-2">
                  You can upload a profile picture (optional)
                </p>
              )} */}

              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-6 focus:outline-none bg-white text-sm text-black placeholder-black mt-2 md:mt-14 border-b-2 border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
              />

              <input
                type="text"
                placeholder="Family Name"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                className="h-6 focus:outline-none bg-white w-5/5 text-sm text-black placeholder-black mt-14 border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
              />

              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="h-6 bg-white focus:outline-none  text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
              />

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="  h-6 bg-white focus:outline-none text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
              />

              <input
                type="password"
                placeholder="Password "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-6 bg-white focus:outline-none text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] max-sm:ml-10 max-sm:mr-6 max-sm:bg-black max-sm:placeholder:text-white max-sm:text-white"
              />

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
                  className="my-1 rounded-full max-sm:text-base max-sm:font-bold max-sm:ml-8 bg-[#434343] hover:white text-white font-bold py-2 px-6 max-sm:mr-6 ml-6 max-sm:w-3/4 max-sm:bg-white max-sm:placeholder:text-white max-sm:text-black"
                  onClick={handleSignUp}
                >
                  Create an account
                </button>

                <div className=" text-sm flex justify-center">
                  <p className="text-black flex justify-center max-sm:mt-0 max-sm:text-white">Already have an account? </p>
                  <p className="text-[#707F65] font-bold hover:underline flex justify-center cursor-pointer" onClick={openLogInPage}>Login</p>
                </div>
              </div>

            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
