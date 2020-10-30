import React from 'react';
import './Home.css'; 
import Navbar from './Navbar/Navbar'
import background from '../../Image/IMG_1139.jpg' 
import About from './About/About';
import projects from '../../Image/projects.jpg'
import { Link } from 'react-router-dom';
import Musics from './Musics/Musics';
import Footer from './Footer/Footer';
import blog from '../../Image/blog.png'


const Home = () => {
    return (
        <div>
              <Navbar></Navbar>
              <img className="background" src={background}/>
              
              <div className="container row">
                  <div className="col-md-6">
                      <About></About>
                  </div>
                  <div className="col-md-6 projects">
                      <h2>Projects</h2>
                     <img className="projectimg" src={projects} alt=""/> 
                     <Link  to="/Projects"> <button type="button" class="btn btn-dark">Veiw Projects</button></Link>
                  </div>
              </div>



              <div className="container row third">
                  <div className="col-md-6">
                   <img className="blogimage" src={blog}/>
                  <Link  to="/Blog" target="blank"> <button type="button" class="btnbtn btn-secondary btn-lg btn-block btn-dark">Read Blog</button></Link>
                  </div>
                  <div className="col-md-6">
                      <Musics></Musics>
                  </div>
              </div>
             

              <div>
                  <Footer></Footer>
              </div>
               
              

              
        </div>
    );
};

export default Home;   <h1>Pial </h1>