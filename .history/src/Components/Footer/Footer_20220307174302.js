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
            <h5>NAVIGATE</h5>
            <b>HomePage</b> <br />
            <b>Careers</b> <br />
            <b>News</b> <br />
            <b>Affiliates</b><br /> 
            </div>
          <div>
          <h5>RESOURCES</h5>
            <b>Blog</b> <br />
            <b>Documentation</b> <br />
            <b>Community</b> <br />
            <b>Pricing</b><br /> 
            <b>Design Case</b><br /> 
          </div>
        </div>
    );
};

export default Footer;