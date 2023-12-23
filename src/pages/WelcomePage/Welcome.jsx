 
 //import Animation from '../../components/Welcome/animation.jsx';
 import ContactUs from '../../components/Welcome/contact.jsx';
 import OurTeam from '../../components/Welcome/ourTeam.jsx';
 import Hero from '../../components/Welcome/heroSection.jsx';
 
 
 
 
function App() {
  return (
    <div className='w-screen  h-screen grid grid-cols-2 max-sm:h-full  '>
     <div className="App w-screen">
       < Hero/>
        <ContactUs/>
        < OurTeam/>

       
       
    </div>
    </div>
  );
}

export default App;


 
