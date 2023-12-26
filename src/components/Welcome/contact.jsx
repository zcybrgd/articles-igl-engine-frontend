 

const ContactUs = () => {
  return (
    
   
    

    <div className="   w-full  flex items-center justify-center bg-white">
         <div className="flex">
         <div className="  w-16 bg-black    h-full md:h-screen  flex max-sm:h-screen">
         </div>
        </div>
      <div className="w-full   p-6 bg-white rounded-lg   flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#707F65]">Contact Us</h2>

        <div className="mb-6 w-full">
           
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-gray-300 bg-[#F1F1F1] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-2 px-3 mt-1"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6 w-full">
          
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-[#F1F1F1] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-2 px-3 mt-1"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6 w-full">
           
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full bg-[#F1F1F1] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-2 px-3 mt-1"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button className="bg-[#707F65] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#707F65] transition-colors">
          Send Message
        </button>
        
      </div>
    </div>
    
   
  );
};

export default ContactUs;
