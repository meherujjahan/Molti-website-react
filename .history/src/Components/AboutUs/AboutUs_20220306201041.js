import React from 'react';
import missionImg from '../../Image/Our-Mission.png';
import visionImg from '../../Image/Our-Vision.png';
import './About.css';


const AboutUs = () => {
    return (
        <div>
            <div className='about-text'>
                <h1> About <span>Us</span></h1>
                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam <br /> semper libero pulvinar hendrerit id lorem.</p>
            </div>
            <div className='aboutUs-card'>
            <div className='aboutUs-single-card'>
                <div className='single-card'>
                <h3>We’re <span>Passionate</span> About <br /> Creating beautiful <span>web <br /> Projects</span>  for people</h3>
                <p>At vero eos accusamus iusto odio dignissim <br /> ducimus a blandi praesentium voluptatum <br /> deleniti.</p>
                
                </div>
                    </div>
                <div className='aboutUs-single-card'>
                    <img src={missionImg} alt="" />
                    <h5>OUR MISSION</h5>
                    <p>At vero eos accusamus iusto odio dignissim <br /> ducimus a blandi praesentium voluptatum <br /> deleniti atque corrupti quos dolores et quas <br /> molestias excepturi sit occaecati cupiditate <br /> provident similique sunt.</p>
                </div>
                <div className='aboutUs-single-card'>
                    <img src={visionImg} alt="" />
                    <h5>OUR VISION</h5>
                    <p>At vero eos accusamus iusto odio dignissim <br /> ducimus a blandi praesentium voluptatum <br /> deleniti atque corrupti quos dolores et quas <br /> molestias excepturi sit occaecati cupiditate <br /> provident similique sunt.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;