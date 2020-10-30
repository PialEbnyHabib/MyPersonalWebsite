import React from 'react';
import resume from '../../../Image/resume.pdf'
import './Resume.css';

const Resume = () => {
    return (
        <div className="container resume">
             <embed src={resume} width="800px" height="2100px" />
        </div>
    );
};

export default Resume;