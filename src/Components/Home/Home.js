import React from 'react';
import './Home.css'; 
import Navbar from './Navbar/Navbar'
import background from '../../Image/IMG_1139.jpg' 
import projects from '../../Image/projects.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import blog from '../../Image/blog.png'
import AOS from 'aos' ;
import "aos/dist/aos.css";


const Home = () => {
    AOS.init({duration:1500});

    return (
        <div>
              <Navbar></Navbar>
              <img className="background" src={background}/>
              

              <div className="container">
              <div className="container row Information">
                  <div className="col-md-6 blog" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                  <img className="blogimage" src={blog}/>
                  <Link  to="/Blog" target="blank"> <button type="button" class="btnbtn btn-secondary btn-lg btn-block btn-dark">Read Blog</button></Link>
                  </div>
                  <div className="col-md-6 projects"  data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                      <h2 className="projecttitle">Projects</h2>
                     <img className="projectimg" src={projects} alt=""/> 
                     <Link  to="/Projects"> <button type="button" class="btn btn-dark">Veiw Projects</button></Link>
                  </div>
              </div>
              </div>
   
              <div>
                  <Footer></Footer>
              </div>
               
             

              
        </div>
    );
};

export default Home;   