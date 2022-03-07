import React from 'react';
import moltiLogo from '../../Image/Molti-Logo-White.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
           <div>
           <div className='footer-section-1'>
                <img src={moltiLogo} alt="" />
                <p><ul>Molti is a Professionally Designed <br />  Multipurpose Child Theme for Divi. And you <br /> can use it to create almost any kind of Website with Divi.</ul></p>
            </div>
            
           </div>
        </div>
    );
};

export default Footer;