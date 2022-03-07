import React from 'react';
import moltiLogo from '../../Image/Molti-Logo-White.png';
import './Footer.css';

const Footer = () => {
    return (
      <div >
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
        <div>
        <h5>COMPANY</h5>
          <b>Services</b> <br />
          <b>About Us</b> <br />
          <b>Happy Customer</b> <br />
          <b>Portfolio</b><br /> 
          <b>Help Center</b><br /> 
        </div>
        <div>
        <h5>HELP</h5>
          <b>+49 892 358 75</b> <br />
          <b>contact@molti.com</b> <br />
          <b>49 Uniqe Square D, New York,</b> <br />
        </div>
      </div>
      <div>
        <div>
        &copy Copyright Molti 2020. Made with by ❤ SamarJ.
        </div>
      </div>
      </div>
        
    );
};

export default Footer;