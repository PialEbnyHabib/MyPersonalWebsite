import React from 'react';
import { Link } from 'react-router-dom'; 
import project1 from '../../../Image/project1.png'
import project2 from '../../../Image/project2.png'
import project3 from '../../../Image/project3.png'
import project4 from '../../../Image/project4.png'
import Navbar from '../Navbar/Navbar';
import "./Project.css";


const Project = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="title">

            <div className="container">

                
<div className="row">
           <div className= "col-md-5 box projectinfo"> 
               <img className="projectimg" src={project1}></img>
               <br></br>
               <h3>Creative Agency</h3>
               <h5> Full stack SIte using React.js ,MongoDB and firebase.</h5>
               <button type="button" class="btn btn-dark"><a className="visitsite" href="//agency-acd69.web.app">Visit Site</a></button>
           </div>
           <div className="col-md-2"></div>
           <div className= "col-md-5 box projectinfo"> 
               <img className="projectimg" src={project2}></img>
               <br></br>
               <h3>Travel Guru</h3>
               <h5>A Travel website useing React.JS , MongoDB and Firebase.User can Travel easily by using this site</h5>
               <button type="button" class="btn btn-dark"><a className="visitsite" href="https://travelguru-d5855.web.app/">Visit Site</a></button>
           </div>
       </div>
                  <br></br>
       <div className="row">
           <div className= "col-md-5 box projectinfo"> 
               <img className="projectimg" src={project3}></img>
               <h3>Online course</h3>
               <h5>A responsive site using React.js , user can enroll in any course with this site.</h5>
               <button type="button" class="btn btn-dark"><a className="visitsite" href="https://xenodochial-pike-cc6c59.netlify.app">Visit Site</a></button>
           </div>
           <div className="col-md-2"></div>
           <div className= "col-md-5 box projectinfo"> 
               <img className="projectimg" src={project4}></img>
               <h3> E-School</h3>
               <h5>A responsive Using HTML, CSS and Bootstrap.</h5>
               <button type="button" class="btn btn-dark"><a className="visitsite" href="pialebnyhabib.github.io/E-School">Visit Site</a></button>
           </div>
       </div>


</div>

            </div>
           
        </div>
    );
};

export default Project;