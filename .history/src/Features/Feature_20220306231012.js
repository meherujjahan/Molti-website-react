import React from 'react';
import workProcess from '../Image/Work-Process (1).png';
import './Features.css';

const Feature = () => {
    return (
      <div className='features'>
          {/* features heading */}
        <div className='feature-text'> 
            <h1>Our<span> Features</span></h1>
            <p>Maecenas tempus tellus eget condimentum rhoncus sem quam <br /> semper libero pulvinar hendrerit id lorem.</p>
         </div>
            {/* features banner */}
        <div>
        <div>
            <img src={workProcess} alt="" />
        </div>
        </div>

      </div>
    );
};

export default Feature;