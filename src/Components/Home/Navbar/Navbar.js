import React from 'react';
import { Link } from 'react-router-dom';
import Github from '../../../Image/Git.png'
import Gmail from '../../../Image/G.png'
import Linkedin from '../../../Image/L.png'
import Facebook from '../../../Image/F.png'
import logo from '../../../Image/pialebnyhabib.png'
import "./Navbar.css";




const Navbar = () => {
    return (
        <nav className="container navbar navbar-expand-md navbar-light" fixed="top"  >
            <Link className="navbar-brand" to="/">
                <img src={logo} height={80} width={150}></img>
            </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item navmenu">
                        <Link className="nav-link" to="/">Home</Link>
                    </li> <br></br>
                    <li className="nav-item navmenu">
                        <Link className="nav-link" to="/Projects">Projects</Link>
                    </li>
                    <li className="nav-item navmenu">
                        <Link className="nav-link" to="/About">About Me</Link>
                    </li>
                </ul>                
            </div>

            <div className='icons'>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item icons">
                   <a href='https://github.com/PialEbnyHabib' target="_blank"><img src={Github} height={40} width={40} ></img></a>
                   </li>
                   <li className="nav-item icons">
                   <a href='pialeh87@gmail.com' target="_blank"><img src={Gmail} height={40} width={40} ></img></a>
                   </li>
                   <li className="nav-item icons">
                   <a href='https://www.linkedin.com/in/pialebnyhabib/' target="_blank"><img src={Linkedin} height={40} width={40} ></img></a>
                   </li>
                   <li className="nav-item icons">
                   <a href='https://www.facebook.com/pialebnyhabib/' target="_blank"><img src={Facebook} height={40} width={40} ></img></a>
                   </li>

                </ul>
           

            </div>

          
        </nav>
    );
};

export default Navbar;