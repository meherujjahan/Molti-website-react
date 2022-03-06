import React from 'react';
import workProcess from '../Image/Easy-Work-Process.png';
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
        <div>
            <img src="" alt="" />
            <h4>EASY WORK PROCESS</h4>
            <p>Your content goes here. Edit or remove this text inline or in the module <br /> Content settings. You can also style every aspect of this content in the <br /> module Design settings and even apply custom CSS to this text in the <br /> module Advanced settings.</p>
        </div>
        </div>

      </div>
    );
};

export default Feature;