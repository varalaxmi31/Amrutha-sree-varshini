import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

import About from "./about/About";
import Home from "./home/Home";



import Contact from "./contact/Contact";
import Gallery from "./gallery/Gallery";




const Layout = () => {
  
    return (
    
         


     <section>
         
         <Navbar />
         <div>
          <Home/>
           <About />
           <Gallery />
           
           <Contact/>
         </div>
         <Footer/> 
   </section>
     
    
   
     
  
    )
}

export default Layout;





// import React from "react";
// import Navbar from "./navbar/Navbar";
// import Footer from "./footer/Footer";

// import About from "./about/About";
// import Home from "./home/Home";



// import Contact from "./contact/Contact";
// import Gallery from "./gallery/Gallery";




// const Layout = () => {
  
//     return (
    
// <div>
//   <Navbar />
         
//         <section>
        
//            <Home/>
//            <About />
//            <Gallery />
           
//            <Contact/>
          
        
  
      
      
//       </section>
//       <Footer/> 
//      </div> 
     
  
//     )
// }

// export default Layout;



