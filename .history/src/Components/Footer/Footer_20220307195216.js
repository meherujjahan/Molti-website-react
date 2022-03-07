import React from 'react';
import moltiLogo from '../../Image/Molti-Logo-White.png';
import './Footer.css';

const Footer = () => {
    return (
      <div className='footer'>
        <div className='footer-section'>
         
         <div className='footer-section-1'>
              <img src={moltiLogo} alt="" />
              <p>Molti is a Professionally Designed <br />  Multipurpose Child Theme for Divi. And you <br /> can use it to create almost any kind of Website with Divi.</p>
              <b>SUBSCRIBE TO NEWSLETTER</b> <br />
              <input type="text" placeholder='Email' /><button>SUBSCRIBE</button>
          </div>
          <div>
          <h5>NAVIGATE</h5>
          <p>HomePage</p> <br />
          <p>Careers</p> <br />
          <p>News</p> <br />
          <p>Affiliates</p><br /> 
          </div>
        <div>
        <h5>RESOURCES</h5>
          <p>Blog</p> <br />
          <p>Documentation</p> <br />
          <p>Community</p> <br />
          <p>Pricing</p><br /> 
          <p>Design Case</p><br /> 
        </div>
        <div>
        <h5>COMPANY</h5>
          <p>Services</p> <br />
          <p>About Us</p> <br />
          <p>Happy Customer</p> <br />
          <p>Portfolio</p><br /> 
          <p>Help Center</p><br /> 
        </div>
        <div>
        <h5>HELP</h5>
          <p>+49 892 358 75</p> <br />
          <p>contact@molti.com</p> <br />
          <p>49 Uniqe Square D, New York,</p> <br />
        </div>
      </div>
      <div>
        <div className='footer-section-2'>
       <p> &copy Copyright Molti 2020. Made with by ❤ SamarJ.</p>
       <p>Privacy Policy • Terms of Service • Cookie Policy</p>
       <div><i class="fa-brands fa-facebook"></i>   <i class="fa-brands fa-twitter"></i>  <i class="fa-brands fa-instagram"></i>  <i class="fa-brands fa-dribbble"></i></div>
        </div>
      </div>
      </div>
        
    );
};

export default Footer;