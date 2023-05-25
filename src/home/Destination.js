import "./destination.css";
import  Mountain1 from "../images/img3.jpg"
import Mountain2 from "../images/img2.jpg"
import DestinationData from "./DestinationData";
import Mountain3 from "../images/img5.jpg"
import Mountain4 from "../images/img4.jpg"
import Mountain5 from "../images/img6.jpg"
import Mountain6 from "../images/img8.png"


const Destination = () => {
return (
<>
    <div className="background"> 
    <div className="destination" data-aos='fade-right' data-aos-duration='1500'>
        <h1>Classical Dances Instills Grace, Style & Sophistication</h1>
        <p>Our dance school trains students of various age groups through an established program with multiple levels of training and skill level. The school regularly presents “Nrithya Sandhya” (evening of dance), a stage performance by students.

Alumnus of Sreejaya's School of Classical Dance have attained distinction as star performers, many of our students are reputed Bharatanatyam dance teachers and recognized choreographers successfully fulfilling the school’s aim of preserving and spreading the art form of Bharatanatyam in its purest form with devotion and dedication.</p>
   
        <DestinationData 
        className="first-des"
        heading="Kuchipudi"
        text="Kuchipudi is indigenous to the state of Andhra Pradesh and differs from the other five classical styles by the inclusion of singing. Kuchipudi originated in the 17th century with the creation by Sidhyendra Yogi of the dance-drama Bhama Kalapam, a story of Satyabhāma, the charming but jealous wife of the god Krishna."
        img1={Mountain1}
        img2={Mountain2}
        />

        <DestinationData 
        className="first-des-reverse"
        heading="Bharatanatyam"
        text="Bharatanatyam is an Indian classical dance form that originated in Tamil Nadu. It is one of eight Indian classical dance forms recognized by the Sangeet Natak Akademi, and expresses South Indian religious themes and spiritual ideas, particularly of Shaivism and in general of Hinduism."
        img1={Mountain3}
        img2={Mountain4}
        />

        <DestinationData 
        className="first-des"
        heading="Folk"
        text="folk dance, Dance that has developed without a choreographer and that reflects the traditional life of the common people of a country or region. The term was coined in the 18th century and is sometimes used to distinguish between dances of the people and those of the aristocracy."
        img1={Mountain5}
        img2={Mountain6}
        />

      </div>
    </div>
     </>

)
}
export default Destination;