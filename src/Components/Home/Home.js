import React from 'react';
import './Home.css'; 
import Navbar from './Navbar/Navbar'
import background from '../../Image/IMG_1139.jpg' 
import Music from '../../Image/Music.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import blog from '../../Image/blog.png';
import AOS from 'aos' ;
import "aos/dist/aos.css";
import TextTransition, { presets } from "react-text-transition";
import Project from './Projects/Project';
import MovingText from 'react-moving-text';
import Info from '../Education & About/Info';
import Skills from './Skills/Skills';




const Home = () => {
    
    
    return (
        <div>
              <Navbar></Navbar>

                 <div className="Intro">
                    <div className="Introduction">
                    <MovingText
                        type="glowing"
                        duration="2000ms"
                        delay="1s"
                        direction="normal"
                        timing="linear"
                        iteration="infinite"
                        fillMode="forwards">
                       Pial Ebny Habib
                        </MovingText>

                        <MovingText type="typewriter"
                            dataText={[
                            'Software Engineer',
                            'Front-end Devloper',
                            'Ui/Ux Designer',
                            'A Musician'

                            ]} />
                    
                    
                    </div>
                    

                 </div>
                 
                 <div>
                    <Info></Info>
                 </div>

              <div>
                <Project></Project>
              </div>
                
                <div>
                    <Skills></Skills>
                </div>

              <div className="container">
              <div className="container row Information">
                  <div className="col-md-6 blog" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                                <h2 className="projecttitle">Read Blog</h2>
                  <img className="blogimage" src={blog}/>
                   <button type="button" class="btn btn-dark"><a className="See" href='https://khanmd-pialebnyhabib.medium.com/' target='_blank'>Read</a></button>
                  </div>
                  <div className="col-md-6 projects"  data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                      <h2 className="projecttitle">My Music</h2>
                     <img className="projectimg" src={Music} alt=""/> 
                     <button type="button" class="btn btn-dark"><a className="See" href="https://www.youtube.com/channel/UCryx1gV_ETJmxNKx3p7deNA" target='_blank'>See</a></button>
                  </div>
              </div>
              </div>

            
          
              <div>
                  <Footer></Footer>
              </div>
               

             
             

              
        </div>
    );

    }
export default Home;   