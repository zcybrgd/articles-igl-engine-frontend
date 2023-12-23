// import googleIcon from '../.././assets/icons/google.svg'; 
 const LoginPage = () => {
  const leftBorderRadius = {
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
  };

  return (
    <div className='w-full  h-full grid grid-cols-2 max-sm:h-full  bg-black'>
   
    <div className='flex max-sm:flex'>
    <div className='w-screen h-screen grid   max-sm:h-screen bg-black'>
       
    <div className='w-full h-full  grid-rows-2 max-sm:h-full sm:hidden '> 
    <div className=" max-sm: text-white max-sm: font-bold  max-sm:text-5xl max-sm: mt-8 md:hidden lg:hidden max-md:text-5xl max-sm:ml-4 sm-hidden">
   login 
    
    
   
   
   </div>
   <div className=" max-sm: text-white max-sm: font-bold  max-sm:text-xl max-sm: mt-0 md:hidden sm-hidden lg:hidden max-md:text-5xl max-sm:ml-4">
   Welocme back
    
    
   
   
   </div>
       
    </div>
   
    
    
    
    <div className="absolute inset-y-0 left-16 w-3/5 md:w-2/5 h-full md:h-full flex flex-col justify-center items-center  max-sm:h-4/5 max-sm:mt-28">
      
    
      
      <div className="flex flex-col sm:w-full items-center text-white space-y-2 ">
        
      
        <div className="mb-12 "></div> 
        
        <div className=" absolute inset-y-8     w-5/5       h-5/5     place-content-center mt-16 space-y-0  md:bg-black lg:bg-black max-sm:bg-white max-sm:rounded-lg sm:bg-black sm:mb-0 ">
       
         
            
            
            <div className="flex w-72 flex-col gap-6 space-y-0 mt-16 max-sm:mt-16 max-sm:space-y-0 max-sm:justify-center  sm:mt-16 sm:space-y-0  md:space-y-0  sm:bg-white sm:h-3/4 lg:bg-black sm:rounded-lg">
               {/* This div will be hidden on medium and larger screens */}
       
     
            <input
                    type="text"
                    placeholder="username"
                    
                    className=" lg:bg-black h-6 sm:placeholder:text-black sm:text-black focus:outline-none   w-5/5  text-sm text-white placeholder-white mt-20 border-b-2 max-sm:border-black   max-sm:mt-0 max-sm:w-4/5 max-sm:ml-6 max-sm:mr-6 max-sm:bg-white   placeholder:text-white max-sm:placeholder:bg-white max-sm:placeholder:text-black max-sm:text-black sm:mr-6 sm:ml-6 lg:text-white lg:placeholder:text-white sm:border-black lg:border-white"  
                  />  
                   
                   <input
                    type="password"
                    placeholder="password"
                    className="  border-b-2 h-6 lg:bg-black sm:text-black sm:placeholder:text-black    focus:outline-none   text-sm text-white max-sm:border-black   max-sm:mt-0 max-sm:w-4/5 max-sm:ml-6 max-sm:mr-6 max-sm:bg-white max-sm:text-black sm:mr-6 sm:ml-6  lg:text-white lg:placeholder:text-white sm:border-black lg:border-white"  
                  />
                        <div className="w-4/5 flex flex-col justify-start items-center mt-8 space-y-8"></div>
                    <button className="my-1 rounded-full bg-white  text-black font-bold py-2 px-4 w-full max-sm:w-4/5 max-sm:ml-6 max-sm:mr-6 max-sm:bg-[#1C1A1A]  max-sm:text-white sm:bg-black lg:bg-white sm:mr-6 sm:ml-6 sm:w-4/5 sm:text-white lg:text-black">
                      Log in
                    </button>
                    <div className="mt-2 text-sm flex items-center justify-center ">
                      <p className="text-black md:text-white"> Do not have an account yet? </p>
                      <p className="text-blue-800 hover:underline">Sign up</p>

                       
        </div>
       
       
      </div>
                  </div>
                  </div>
                  
                   
        
    
    </div>
    <div className="  lg:text-white font-bold text-7xl absolute top-8  max-sm:text-5xl max-sm:mt-8 max-sm:hidden max-md:text-5xl max-sm:ml-4 md:text-transparent ml-96 left-60 sm:text-transparent md:hidden-block">
    log
  </div>
   {/* // White part for other content  */}
     <div className="lg:text-black font-bold text-7xl   absolute inset-y-0 right-0 w-3/5 md:w-2/5 bg-white h-full md:h-full   hidden md:block md:text-transparent" style={leftBorderRadius} >
     <div className="lg:text-black mt-8 md:text-transparent">in</div>
    
    
  
    
     
    </div>
    
  </div>
  </div>
  </div>
  )
}

export default LoginPage;