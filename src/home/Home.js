

import React, { useRef, useState } from "react";
import heroBanner from "../images/gallery-banner01.png";
import heroBanner1 from "../images/about-banner.png";
import heroBanner2 from "../images/contact-banner.png";
import heroBanner3 from "../images/home-banner02.png";
import Destination from "./Destination";
// import About from "./about/About";
// import Contact from "./contact/Contact";
// import Gallery from "./gallery/Gallery";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home.css";

import { useAuth0 } from "@auth0/auth0-react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function App() {
  const { isAuthenticated,  user } = useAuth0();
  return (
    <div id="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide><img src={heroBanner1} alt="banner" className="w-100"/>
        <div className="hero-text">
        <h1>Welcome to Amrutha Sree <br />Varshini School<br/>Of M.A.D.</h1>
         <div className="school">
 {isAuthenticated && (
           <li>
            <p> Welcome to dance school {user.name}</p>
            </li>
    )}
    </div> 

        </div>
        </SwiperSlide>
        <SwiperSlide>  <img src={heroBanner} alt="banner" className="w-100"/>
        <div className="hero-text">
        <h1>Classical dance is a performance <br/>art used for both education<br/> and performance.</h1>
        
            

        </div>
        </SwiperSlide>
        <SwiperSlide><img src={heroBanner2} alt="banner" className="w-100"/>
        <div className="hero-text">
            <h1>Bharatanatyam is a classical<br/> Indian dance form that <br/>originated in Tamil Nadu, <br/>India.</h1>

        </div>
        </SwiperSlide>
        <SwiperSlide><img src={heroBanner3} alt="banner" className="w-100"/>
        <div className="hero-text">
            <h1>Kuchipudi is a classical<br/> Indian dance form from <br/>Andhra Pradesh</h1>

        </div>
        </SwiperSlide>
       
      </Swiper>
      <Destination />
     
           {/* <About />
           <Gallery />
           
           <Contact/> */}
         
    </div>
  );
}




