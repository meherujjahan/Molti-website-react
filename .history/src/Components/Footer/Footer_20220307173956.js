import React from 'react';
import moltiLogo from '../../Image/Molti-Logo-White.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
         
           <div className='footer-section-1'>
                <img src={moltiLogo} alt="" />
                <p>Molti is a Professionally Designed <br />  Multipurpose Child Theme for Divi. And you <br /> can use it to create almost any kind of Website with Divi.</p>
                <b>SUBSCRIBE TO NEWSLETTER</b> <br />
                <input type="text" placeholder='Email' /><button>SUBSCRIBE</button>
            </div>
            <div>
            <h5>NAVIGATE</h5><br />
            <b>HomePage</b> <br />
            <b>Careers</b> <br />
            <b>News</b> <br />
            <b>Affiliates</b><br /> 
            </div>
          
        </div>
    );
};

export default Footer;