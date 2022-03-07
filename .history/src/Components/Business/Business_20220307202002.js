import React from 'react';
import awards from '../../Image/Awards.png';
import client from '../../Image/Clients.png';
import coffees from '../../Image/Coffees.png';
import projects from '../../Image/Projects.png';
import './Business.css';

const Business = () => {
    return (
        <div className='business'>
            {/* business title */}
            <div className='business-text'>
                <h1>
                Best Solutions for your <br />
                <span>Business</span>
                </h1>
                <p>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common that of <br /> the individual languages.</p>
            </div>
            {/* business Icon */}
            <div className='business-icon'>
                <div>
               <img src={projects} alt="" />
                    <h1>3581</h1>
                    <h6>Projects</h6>
                </div>
                <div>
               <img src={client} alt="" />
                    <h1>3581</h1>
                    <h6>No. of Clients</h6>
                </div>
                <div>
               <img src={coffees} alt="" />
                    <h1>3581</h1>
                    <h6>Cups of Coffees</h6>
                </div>
                <div>
               <img src={awards} alt="" />
                    <h1>3581</h1>
                    <h6>Awards</h6>
                </div>
                <p></p>
            </div>
        </div>
    );
};

export default Business;