import React from 'react';
import { Link } from 'react-router-dom'; 
import Projecttitle from '../../../Image/P.png'
import project1 from '../../../Image/project1.png'
import project2 from '../../../Image/project2.png'
import project3 from '../../../Image/project3.png'
import project4 from '../../../Image/project4.png'
import project0 from '../../../Image/project0.jpg'
import project6 from '../../../Image/project6.jpg'
import project7 from '../../../Image/project7.png'
import Navbar from '../Navbar/Navbar';
import "./Project.css";
import AOS from 'aos' ;
import "aos/dist/aos.css";


const Project = () => {
    AOS.init({ duration : 1500});
    return (
        <div>
            

            <div className="title">
            
            <div className="container">
                <br></br>
            <div className="titletext"> <h1 data-aos="fade-up" data-aos-duration="3000">Projects</h1></div>
                
            <div className="row">
           <div className= "col-md-4 box projectinfo" data-aos="zoom-in-right"> 
               <img className="projectimg" src={project0}></img>
               <div className="projectdescription">
               <h5>Recycle App</h5>
               <h6>An App using Flutter</h6>
               <button type="button" class="btn btn-dark"><a className="visitsite" href="https://github.com/PialEbnyHabib/Recycleapp">Veiw</a></button>
               </div>               
           </div>
           
           
           <div className= "col-md-4  box projectinfo" data-aos="zoom-out"> 
               <img className="projectimg" src={project1}></img>
               <div className="projectdescription">
               <h5>Creative Agency</h5>
               <h6>Full stack Website</h6>
               <button type="button" class="btn btn-dark"><a className="visitsite" href="//agency-acd69.web.app">Veiw</a></button>
               </div>    
           </div>
           
           <div className= "col-md-4 box projectinfo" data-aos="zoom-in-left"> 
                <img className="projectimg" src={project6}></img>
               <div className="projectdescription">
               <h5>Vehicle detection and Counting</h5>
               <h6> Using YoloV5 and Deepsort algorithms</h6>
               <button type="button" class="btn btn-dark"><a className="visitsite" href="https://github.com/PialEbnyHabib/Vehicle-Detection-Using-YoloV5-Model">Veiw</a></button>
               </div>   
              
           </div>        

       </div>

       <div className="row">
         
         <div className= "col-md-4 box projectinfo" data-aos="zoom-in-right"> 
         <img className="projectimg" src={project2}></img>
             <div className="projectdescription">
             <h5>Travel Guru</h5>
             <h6> A Travel website</h6>
             <button type="button" class="btn btn-dark"><a className="visitsite" href="https://travelguru-d5855.web.app/">Veiw</a></button>
             </div>               
         </div>
         
         
         <div className= "col-md-4 box projectinfo" data-aos="zoom-out"> 
         <img className="projectimg" src={project3}></img>
             <div className="projectdescription">
             <h5  >Online course</h5>
             <h6>A responsive site</h6>
             <button type="button" class="btn btn-dark"><a className="visitsite" href="//agency-acd69.web.app">Veiw</a></button>
             </div>    
         </div>
         
         <div className= "col-md-4 box projectinfo" data-aos="zoom-in-left"> 
         <img className="projectimg" src={project4}></img>
             <div className="projectdescription">
             <h5  >E-School</h5>
             <h6>A responsive Using HTML, CSS and Bootstrap.</h6>
             <button type="button" class="btn btn-dark"><a className="visitsite" href="//agency-acd69.web.app">Veiw</a></button>
             </div>   
            
         </div>        

     </div>

        <div className="row">
         <div className= "col-md-4 box projectinfo"  data-aos="zoom-out-left"> 
              <img className="projectimg" src={project7}></img>
             <div className="projectdescription">
             <h5  >Pin Matcher</h5>
             <h6>Pic matcher using Javascript </h6> 
             <button type="button" class="btn btn-dark"><a className="visitsite" href="https://pialebnyhabib.github.io/PIN-Matcher-Master/?fbclid=IwAR0JxH5DehVW6kLzgNBUXmOSfptFqwohtQCoYFl8wohLRQW-YtJLBzfwwqg">Veiw</a></button>
             </div>   
            
         </div>        

     </div>

<br></br>
      

</div> 
</div>

</div>

            
    );
};

export default Project;