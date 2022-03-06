import React from 'react';
import webImg3 from '../../Image/molti-hosting-service.png';
import webImg1 from '../../Image/Web-Design.png';
import webImg2 from '../../Image/web-developement.png';

const Services = () => {
    return (
        <div>
            <div>
                <h1>Our Services</h1>
                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam <br /> semper libero pulvinar hendrerit id lorem.</p>
            </div>
            <div>
                <div>
                <div>
                    <img src={webImg1} alt="" />
                    <h3>Web Design</h3>
                    <p>Et harum quidem rerum facilis <br /> expedita distinctio nam libero <br /> tempore cum quibusdam nobis.</p>
                </div>
                <div>
                    <img src={webImg2} alt="" />
                    <h3>Web Development</h3>
                    <p>Et harum quidem rerum facilis <br /> expedita distinctio nam libero <br /> tempore cum quibusdam nobis.</p>
                </div>
                <div>
                    <img src={webImg3} alt="" />
                    <h3>Web Hosting</h3>
                    <p>Et harum quidem rerum facilis <br /> expedita distinctio nam libero <br /> tempore cum quibusdam nobis.</p>
                </div>
               
                </div>
               
            </div>
        </div>
    );
};

export default Services;