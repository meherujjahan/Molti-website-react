import React from 'react';
import moltiLogo from '../../Image/Molti-Logo-White.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src={moltiLogo} alt="" />
                <p>Molti is a Professionally Designed <br />  Multipurpose Child Theme for Divi. And you <br /> can use it to create almost any kind of Website with Divi.</p>
            </div>
        </div>
    );
};

export default Footer;