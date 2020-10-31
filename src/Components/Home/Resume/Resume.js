import React from 'react';
import resume from '../../../Image/resume.pdf'
import Navbar from '../Navbar/Navbar';
import './Resume.css';

const Resume = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container resume">
             <embed src={resume} width="800px" height="2100px" />
        </div>

        </div>
        
    );
};

export default Resume;