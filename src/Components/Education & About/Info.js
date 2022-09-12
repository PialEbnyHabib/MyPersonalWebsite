import React from "react";
import "./info.css";
import University from '../../Image/University.png'
import Collage from '../../Image/Collage.png'
import School from '../../Image/School.png'
import pial from '../../Image/pial.png'
import AOS from 'aos' ;


const Info = () => {

    return(
      
    <div className="container">

        <div className="row">

            <div className="col-md-6">
                    <div className="row educationname">
                    <h1></h1>
                    </div>
                <div className="row educationname">
                    <h1 data-aos="zoom-in" >Education</h1>
                    </div>
                <br></br>
                <div className="row">
                    <div className="educationname" data-aos="zoom-in-down">
                      <img src={University} height={50} width={50}></img>
                    </div>
                     <div className="educationname" data-aos="fade-right" data-aos-offset="300"data-aos-easing="ease-in-sine">
                    <h4>North south university</h4>
                    <h6>Bs in Computer Science and Engineering</h6>
                    <h6>2017-2022</h6>
                    </div>
                </div>

                <div className="row">
                <div className="educationname" data-aos="zoom-in-down">
                      <img src={Collage} height={50} width={50}></img>
                    </div>
                <div className=" educationname" data-aos="fade-right" data-aos-offset="300"data-aos-easing="ease-in-sine">
                    <h4>Dhaka City Collage </h4>
                    <h6>Groupe-Science</h6>
                    <h6>HSC Batch 2016</h6>
                </div>
                </div>

                <div className="row">
                <div className="educationname" data-aos="zoom-in-down">
                      <img src={School} height={50} width={50}></img>
                    </div>
                <div className="educationname" data-aos="fade-right" data-aos-offset="300"data-aos-easing="ease-in-sine">
                    <h4>Mohammadpur Model School</h4>
                    <h6>Groupe-Science</h6>
                    <h6>SSC Batch 2014</h6>
                </div>
                </div>
            

            </div>




            <div className="col-md-6">
                 
                    <div className="row educationname">
                    <h1></h1>
                    </div>

                <div className="row educationname">
                    <div className="educationname">
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" >About Me</h1>
                    </div>
                    <br></br>
                    
                    <div className="row educationname">  
                    <div className="col 6">
                        <br></br>
                        <h6 data-aos="zoom-in-left"> I'm a Passionate Front-end developer who loves to create something different. Having years of experience in various fields related to web/Android development gives me the confidence
                        to satisfy clients. I love to learn new things if it increases my productivity and simplifies my Work. Being A quick learner and focused guy, I'm always
                        looking to achieve the highest possible result with my consistency. And I try to create unique designs to impress anyone at first glance.  </h6>
                    </div>
                        <div className="col 6" data-aos="fade-left">
                        <img src={pial} height={300} width={270}></img>
                        </div>
                    </div>
                    
                
                </div>

                    


            </div>

        </div>

        <br></br>
        <br></br>


    </div>
    
  


    );
}

export default Info; 