import React from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Home from '../Home'
import './About.css' ; 
import image from "../../.././Image/18-12-2018-(3).png" 
import AOS from 'aos' ;
import "aos/dist/aos.css";
import pial from '../../../Image/pial.png'
import University from '../../../Image/University.png'
import Collage from '../../../Image/Collage.png'
import School from '../../../Image/School.png'
import Footer from '../Footer/Footer';

const About = () => {
    AOS.init({duration:2000})
    return ( 
        <div>
            <Navbar/>
            <div className="container " >
                
                <div className='row'>
                    <div className='col-md-7 aboutcontent'>
                    <h6 className='aboutwriting' data-aos="zoom-in-left"> I'm a Passionate Front-end developer who loves to create something different. Having years of experience in various fields related to web/Android development gives me the confidence
                        to satisfy clients. I love to learn new things if it increases my productivity and simplifies my Work. Being A quick learner and focused guy, I'm always
                        looking to achieve the highest possible result with my consistency. And I try to create unique designs to impress anyone at first glance.  </h6>
                        
                    </div>

                    <div className='col-md-5 aboutcontent' data-aos="fade-left">
                          
                    <img src={pial} height={300} width={270}></img>
                    </div>
                </div>

                <div className='row'>
                  <div className='col-4'></div>
                  <div className='col-4 educationtitle'>
                  <h1  data-aos="zoom-in" >Education</h1>
                  </div>
                  <div className='col-4'></div>
                </div>

                <div className='row education'>
                  

                  <div className='col'>
                        <div className='row'>
                                <div className="educationname" data-aos="zoom-in-down">
                                <img src={University} height={50} width={50}></img>
                                </div>
                               <div className="educationname" data-aos="fade-right" data-aos-offset="300"data-aos-easing="ease-in-sine" >
                               <h4>North south university</h4>
                               <h6>Bs in Computer Science and Engineering</h6>
                               <h6>2017-2022</h6>
                            </div>
                        </div>

                        <div className='row'>
                        <div className="educationname" data-aos="zoom-in-down">
                            <img src={Collage} height={50} width={50}></img>
                          </div>
                            <div className=" educationname" data-aos="fade-right" data-aos-offset="300"data-aos-easing="ease-in-sine">
                                <h4>Dhaka City Collage </h4>
                                <h6>Groupe-Science</h6>
                                <h6>HSC Batch 2016</h6>
                            </div>
                        </div>

                        <div className='row'>
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
                  
                  
                  
                  
                </div>

                
            </div>

            <div >
                    <br></br>
                    <Footer></Footer>
                </div>
        </div>
       
    );
};

export default About; 