import React from 'react';
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
            <div>
                <div>
                <i class="fa-solid fa-rocket"></i>
                    <h3> </h3>
                    <h6>Projects</h6>
                </div>
            </div>
        </div>
    );
};

export default Business;