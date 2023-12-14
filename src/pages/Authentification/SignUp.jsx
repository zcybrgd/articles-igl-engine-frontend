import articleIcon from '../.././assets/icons/article.svg';
import googleIcon from '../.././assets/icons/google.svg'; 

// import googleIcon from '../.././assets/icons/google.svg'; 


const LoginPage = () => {
    const leftBorderRadius = {
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
      };
    return (
        <div className="bg-black ">
            <div className="absolute inset-y-0 left-0 w-2/5 md:w-3/5 bg-black h-screen md:h-screen flex justify-center" style={leftBorderRadius}>
            </div>  
            <div className="absolute inset-y-0 right-0 w-3/5 md:w-3/5 bg-white h-screen md:h-screen flex justify-center place-content-center space-y-8" style={leftBorderRadius} >
            <div className="mt-0 text-sm    flex justify-center mb-0">
            <h1 className="text-black font-bold text-xl mb-8  mt-16  ">Create Account </h1>  
            <img src={articleIcon} alt="article Icon" className="h-8 w-8 ml-4 mt-16 " />
            </div>
            <div className="absolute inset-y-8  w-2/5 md:w-5/5       h-4 md:h-3/5 flex place-content-center mt-16 space-y-0 ">
            <div className="flex w-72 flex-col gap-6 space-y-0  ">
      
     
            <input
                    type="text"
                    placeholder="Full name"
                    className="  h-6  focus:outline-none   w-5/5  text-sm text-black placeholder-black mt-20 border-b-2  border-[#EAEAEA]"  
                  />  
                   
                   <input
                    type="text"
                    placeholder="User name"
                    className="  h-6      focus:outline-none   text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] "  
                  />  
                 
                   <input
                    type="email"
                    placeholder="email"
                    className="  h-6  focus:outline-none      text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA] "  
                  />  
                    
                   <input
                    type="password"
                    placeholder="Password "
                    className="  h-6      focus:outline-none   text-sm text-black placeholder-black  border-b-2  border-[#EAEAEA]"  
                  />  
                  
                  <button className="my-1 rounded-full bg-[#434343] hover:white text-white font-bold py-2 px-4 w-full">
                    Create an account
                  </button>
                  <div className="mt-0 text-sm    flex justify-center mb-0">
                    <p className="text-black flex justify-center">Already have an account? </p>
                    <p className="text-[#707F65] font-bold hover:underline flex justify-center">Login</p>
                  </div>
                  <p className="text-gray-500 flex justify-center  ">-OR-</p>
                  
                  <button className=" rounded-full bg-white   border-inherit flex items-center justify-center hover:text-black "> 
                    
                  <img src={googleIcon} alt="Google Icon" className="ml-2 h-6 w-6 mr-8 " />
                                      Sign Up with Google
                   
                   </button>
                   
                    
                  

                 
               
                  
                 
     
            </div>  
            </div>  
           
            
            
           
            </div>  
            </div>  
             
             



    )}
    export default LoginPage;