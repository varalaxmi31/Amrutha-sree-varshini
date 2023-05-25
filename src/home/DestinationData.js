import "./destination.css";
// import Mountain1 from "./images2/img11.jpg"
// import Mountain2 from "./images2/img12.webp"
import {Component} from "react";
class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>

        <div className="image">
            <img alt="img" src={this.props.img1}data-aos='fade-left' data-aos-duration='1500' />
            <img alt="img" src={this.props.img2} data-aos='fade-left' data-aos-duration='1500'/>
        </div>
        </div>
        )
    }
}
export default DestinationData;