import React from 'react';
import { Link } from 'react-router-dom'; 
import contact from '../../../Image/contact.jpg'
import './Contact.css';

const Contact = () => {
    return (
        <div className="body">
            <img className="contact" src={contact} /> 

            <div className="info" ><h2>Contact</h2> 
               <h5>Email:Khanmdpialebnyhabib@gmail.com</h5>
               <h5>Mobile:018271802XX</h5>
               <a href="https://www.facebook.com/pialebnyhabib">Facebook</a> <br></br>
               <a href="https://www.youtube.com/channel/UCryx1gV_ETJmxNKx3p7deNA?sub_confirmation=1">Youtube</a>
               <h5>Address:3/1X ,college gate, Dhaka</h5>

             </div>
            
        </div>
    );
};

export default Contact;  