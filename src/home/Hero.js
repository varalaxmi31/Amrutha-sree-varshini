import "./home.css";

function Hero(props){
    return (
    <>
   
    <section id="Home">
    <div className="hero" >
    <img src="http://localhost:52330/public/assets/gallery-banner01.png" height="50px" width="auto" alt="HerpImg"/>    
    </div>

     <div className="hero-text">
        <h1>{props.title}</h1>
       
        <p>Classical dance is a performance art used for both education <br /> and  performance. It has evolved from early dance forms used <br />in religious ceremonies.</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a> 
    </div> 
      
    </section>
    </>)
}



export default Hero;


// import React from 'react'
// import Home from './Home';
// import Branding from './Branding';

// const Hero = () => {
//   return (
//     <div>
//       <Home />
//       <Branding />
//     </div>
//   )
// }

// export default Hero