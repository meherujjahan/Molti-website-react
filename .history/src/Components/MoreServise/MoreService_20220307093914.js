import React from 'react';
import logoImg from '../../Image/Molti-Logo-Design.png';
import './MoreService.css';

const MoreService = () => {
    return (
        <div className='container'>
            <div className='choosePlan-text'>
                <h1>More <span> Services</span></h1>
                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam <br /> semper libero pulvinar hendrerit id lorem.</p>
            </div>
           <div className='morePlan-card'>
           <div className='morePlan-single-card'>
                <div>
                    <img src={logoImg} alt="" />
                </div>
                <div>
                    <h2>Logo Design</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not <br /> simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC.</p>
                    <button>GET STARTED</button>
                </div>
            </div>
           <div className='morePlan-single-card'>
                <div>
                    <img src={logoImg} alt="" />
                </div>
                <div>
                    <h2>Logo Design</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not <br /> simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC.</p>
                    <button>GET STARTED</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default MoreService;