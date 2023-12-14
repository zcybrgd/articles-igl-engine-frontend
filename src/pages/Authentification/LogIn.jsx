 
// import googleIcon from '../.././assets/icons/google.svg'; 
import googleIcon from '../.././assets/icons/google.svg'; 
const LoginPage = () => {
  const leftBorderRadius = {
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
  };

  return (
     
     
    <div className='w-screen h-screen grid grid-cols-2'>
    <div className='w-screen h-screen grid grid-rows-2'> 
      
      <div className='inset-y-4 w-full h-full bg-black centered md:h-screen md:w-screen'> 
        
      </div>
    </div>
    <h1 className="text-white font-bold text-7xl mt-8">Log </h1>
     
     
    
    <div className="absolute inset-y-0 left-16 w-3/5 md:w-2/5 h-screen md:h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-white space-y-2">
        
       
        <div className="mb-12"></div> 
        <div className="absolute inset-y-8  w-5/5 md:w-5/5       h-4 md:h-3/5 flex place-content-center mt-16 space-y-0 ">
            <div className="flex w-72 flex-col gap-6 space-y-0 mt-16  ">
      
     
            <input
                    type="text"
                    placeholder="username"
                    
                    className="  h-6  focus:outline-none   w-5/5  text-sm text-white placeholder-white mt-20 border-b-2 bg-black   "  
                  />  
                   
                   <input
                    type="password"
                    placeholder="password"
                    className="  h-6      focus:outline-none   text-sm text-white placeholder-white  border-b-2  bg-black "  
                  />  
                        <div className="w-4/5 flex flex-col justify-start items-center mt-8 space-y-8"></div>
        <button className="my-1 rounded-full bg-white text-black font-bold py-2 px-4 w-full">
          Log in
        </button>
        <div className="mt-2 text-sm flex items-center justify-center ">
          <p className="text-white">Already have an account? </p>
          <p className="text-blue-800 hover:underline">Login</p>
        </div>
        <div className="mt-2 text-sm flex items-center justify-center ">
        <p className="text-gray-500 my-1 text-xl ">-OR-</p>
        </div>
        <button className="my-1 rounded-full bg-white py-2 px-4 w-full text-black border-white flex items-center justify-center hover:text-black space-y-4">
          <img src={googleIcon} alt="Google Icon" className="ml-2 h-6 w-6 mr-8" />
          Sign Up with Google
        </button>
       
      </div>
                  </div>
                  </div>
        
  
    </div>
   
    {/* White part for other content */}
    <div className="absolute inset-y-0 right-0 w-3/5 md:w-2/5 bg-white h-screen md:h-screen flex " style={leftBorderRadius}>
      {/* This is the white part */}
      <h1 className="text-black font-bold  text-7xl left-0 mt-8">In </h1>
      
    </div>
  </div>
  )
}

export default LoginPage;
