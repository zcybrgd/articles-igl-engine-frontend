  import quoteIcon from '../.././assets/icons/quote.svg'; 
  import quote2Icon from '../.././assets/icons/quote2.svg'; 
 
 


const Hero = () => {
    return (
      <div className="text-white top-8">
        <div className="flex">
       
          <div className="left-0 w-16 md:w-16 bg-black h-screen md:h-screen flex ">
         
        
            <h1 className="text-white font-semibold text-7xl ml-4 mt-36">
              E
              <br/>
             
             Y
            </h1>
            <br/>
            <h1 className="text-white font-semibold text-7xl mt-20 ml-6">
              E
            </h1>
          </div>
          <div className="flex flex-col space-y-0">
           
          <img src={quoteIcon} alt="quote Icon" className="h-16 w-16 ml-2 mt-16" />
          <div className=" w-16 md:w-4   h-4 md:h-4 flex  space-x-10 mt-16 ">
          <h1 className="text-black font-semibold text-7xl  ml-0 mt-4">
              XPERIENCE
              <br/>
            OUR  
            </h1>
            </div> 
            <div className=" flex  w-3/5 md:w-3/5    h-4 md:h-4  mt-16 ml-4 space-x-40">
            <p className="text-black  text-3xl  ml-0 mt-44"> whoever relies upon Allah then He is sufficient for him</p>
            <img src={quote2Icon} alt="quote2 Icon" className="h-16 w-16  ml-10 mt-64" />
             <div className="left-4 w-16 md:w-16  bg-black h-2/5 md:h-2/5 flex ml-60">
                Animation
            </div>
            
          
            </div> 
            <div className="flex w-3/5 md:w-3/5 h-4 md:h-4 mt-16 ml-4">
  <button className="rounded-2xl bg-[#707F65] hover:white text-white text-xl font-bold py-1 px-4 w-1/5  h-12  justify-center mt-80">
    Search

  </button>
</div>

            
           
           
         </div>
       


          <div className="left-0 w-16 md:w-16 h-screen md:h-screen flex">
          
          <div className="left-0 w-16 md:w-16 h-screen md:h-screen flex ">
          {/* <img src={quoteIcon} alt="quote Icon" className="h-8 w-8 ml-4 mt-16 " /> */}
          </div>
            
           
        </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  