import React from 'react';
import design from '../../Image/Design.png';
import strategy from '../../Image/Strategy.png';
import './WorkProcess.css';

const WorkProcess = () => {
    return (
        <div className='work-process'>

            {/* work process text */}
            <div className='workProcess-text'>
                <h2>Our Process of Work</h2>
                <p></p>
            </div>

            {/* work process card */}
            <div className='WP-card'>
            <div  className='WP-single-card'>
            <div>
                <img src={strategy} alt="" />
            </div>
            <div>
                <h4>Strategy</h4>
                <p>Your content goes here. Edit or remove <br /> this text inline or in the module Content <br /> settings. You can also style every aspect <br /> of this content in the module Design <br /> settings.</p>
            </div>
            </div>
            <div className='WP-single-card'>
            <div>
                <img src={design} alt="" />
            </div>
            <div>
                <h4>Design</h4>
                <p>Your content goes here. Edit or remove <br /> this text inline or in the module Content <br /> settings. You can also style every aspect <br /> of this content in the module Design <br /> settings.</p>
            </div>
            </div>

            </div>
        </div>
    );
};

export default WorkProcess;