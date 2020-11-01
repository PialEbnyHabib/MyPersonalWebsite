import React from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Home from '../Home'
import './About.css' ; 
import image from "../../.././Image/18-12-2018-(3).png" 
import AOS from 'aos' ;
import "aos/dist/aos.css";

const About = () => {
    AOS.init({duration:2000})
    return ( 
        <div>
            <Navbar/>
            <div className="container " >
                
                <img className="images" data-aos="zoom-in" src={image}/>
                <h1 className="Box" data-aos="zoom-out-up">  Hello, <br></br> <br></br>I'm a passionate  Web developer , everyday trying to learn something new and excitng things so that i can contribute something to my country and people. </h1> 
                <br></br>
                <div className="resume"><Link  target="blank"  to="https://drive.google.com/file/d/1s7cKVVRJ0XBjyj6_0OEAHHENNaQaxolN/view?usp=sharing "download >  <button type="button" class="btn btn-light">Downlode Resume</button></Link></div>
                
            </div>

        </div>
       
    );
};

export default About; 