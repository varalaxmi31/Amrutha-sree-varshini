import "./dance.css";
import DanceData from "./DanceData";
import Trip1 from "../images/img1.jpg"
import Trip2 from "../images/img4.jpg"
import Trip3 from "../images/img6.jpg"


function Dance(){
    return(
        <>
        <div className="back">
        <h1 className="headin">ABOUT US</h1>
        <p className="paragraph">Amrutha Sree Varshini School Of M.A.D. provide classes for music(vocal),and various Dance forms like kuchipudi, bharatanatyam, folk and western with the concept of education through art. The dance school starts training from age 6 and ladies of all ages. Dance lessons include theory as well as practical in progressive succession inculcating technique, artistry and creativity.</p>
     
        <div className="trip">
            {/* <h1>COURSE CURRICULUM</h1>
            <p>Amrutha Sree Varshini’s School of Classical Dance follows an institution based course curriculum, programmed for gradual progression from one lesson to the next ensuring perfection of each and every dance lesson be it the adavus (steps), mudras (hand gestures) or dance songs.</p> */}
            <div className="tripcard">
                <DanceData 
                image={Trip1}
                heading = "Emphasis"
                text= "Amrutha Sree varshini School Of M.A.D. emphasizes on achieving excellence leading to perfection in each of our student’s performance and execution of this beautiful classical dance."
                />

               <DanceData 
                image={Trip2}
                heading = "Dance for All"
                text= "Amrutha Sree varshini School Of M.A.D. fee structure is designed to serve students from all economic strata with the criteria being passion to learn classical dance."
                />

                <DanceData 
                image={Trip3}
                heading = "Punctuality and Discipline"
                text= "At Amrutha Sree varshini School Of M.A.D., punctuality and discipline is a religion which is strictly monitored and implemented with a never-late policy in either starting or finishing the class."
                />
                
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Dance;