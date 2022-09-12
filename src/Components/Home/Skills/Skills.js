import React from 'react';
import "./Skills.css";
import python from "../../../Image/python.png";
import C from "../../../Image/c-document.png";
import Css from "../../../Image/css.png";
import Dart from "../../../Image/Dart.png";
import Firebase from "../../../Image/Firebase.png";
import Flutter from "../../../Image/Flutter.png";
import Html from "../../../Image/html-5.png";
import java from "../../../Image/java.png";
import javascript from "../../../Image/java-script.png";
import node from "../../../Image/nodejs.png";
import php from "../../../Image/php.png";
import react from "../../../Image/react.png";
import Matlab from "../../../Image/MATLAB-logo.png";
import Mongo from "../../../Image/mongodb.png";



const Skills = () => {
    return (

        <div className='skillcontainer'> 
        <div className='container md'>

            
                    <div className="Skills"> <h1 data-aos="fade-up" data-aos-duration="3000">Skills</h1></div>
            <br></br>

            <div className='row skillitems'>
              
               <div className='col-md-1'> </div>

              <div className="col-md-1 skillbox" data-aos="flip-left">
               <img src={Flutter} height={50} width={50}></img>
                <h4 className='skillname'>Flutter</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-right">
               <img src={react} height={50} width={50}></img>
                <h4 className='skillname'>React.Js</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-left">
               <img src={python} height={50} width={50}></img>
                <h4 className='skillname'>Python</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-right">
               <img src={C} height={50} width={50}></img>
                <h4 className='skillname'>C</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-left">
               <img src={javascript} height={50} width={50}></img>
                <h4 className='skillname'>JavaScript</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-right">
               <img src={Dart} height={50} width={50}></img>
                <h4 className='skillname'>Dart</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-left">
               <img src={php} height={50} width={50}></img>
                <h4 className='skillname'>PHP</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-right">
               <img src={java} height={50} width={50}></img>
                <h4 className='skillname'>Java</h4>
              </div>            

              <div className='col-md-1'> </div> 

            </div>

            <div className='row skillitems'>

            <div className='col-md-1'> </div>

            <div className="col-md-1 skillbox" data-aos="flip-left">
               <img src={node} height={50} width={50}></img>
                <h4 className='skillname'>Node.Js</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-right">
               <img src={Matlab} height={50} width={50}></img>
                <h4 className='skillname'>MATLAB</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-left">
               <img src={Html} height={50} width={50}></img>
                <h4 className='skillname'>HTML</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-right">
               <img src={Css} height={50} width={50}></img>
                <h4 className='skillname'>CSS</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-left">
               <img src={Firebase} height={50} width={50}></img>
                <h4 className='skillname'>Firebase</h4>
              </div>

              <div className="col-md-1 skillbox" data-aos="flip-right">
               <img src={Mongo} height={50} width={50}></img>
                <h4 className='skillname'>MongoDB</h4>
              </div>

              <div className='col-md-1'> </div>



            </div>
                
                   
                

        </div>
            
            <br></br>
      
        </div>
            
    );
};

export default Skills;