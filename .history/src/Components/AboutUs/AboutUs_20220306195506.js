import React from 'react';
import './About.css';


const AboutUs = () => {
    return (
        <div>
            <div className='about-text'>
                <h1> About <span>Us</span></h1>
                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam <br /> semper libero pulvinar hendrerit id lorem.</p>
            </div>
            <div>
                <div>
                    <h3>We’re <span>Passionate</span> About Creating beautiful <span>web <br /> Projects</span>  for people</h3>
                <p>At vero eos accusamus iusto odio dignissim <br /> ducimus a blandi praesentium voluptatum <br /> deleniti.</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h6></h6>
                    <p>At vero eos accusamus iusto odio dignissim <br /> ducimus a blandi praesentium voluptatum <br /> deleniti atque corrupti quos dolores et quas <br /> molestias excepturi sit occaecati cupiditate <br /> provident similique sunt.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;