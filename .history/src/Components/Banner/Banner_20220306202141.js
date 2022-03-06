import React from 'react';
import BannerImg from '../../Image/Hero-Illustration-Molti.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className='Banner-text'>
                <b>CREATIVE MARKETING</b>
                <h1>Get Your Professional <br /> Website Done With <span>Molti</span></h1>
                <p>At vero eos et accusamus iusto odio dignissimos ducimus qui blanditiis <br /> praesentium voluptatum deleniti atque corrupti quos at dolores molestias <br /> excepturi sint occaecati cupiditate.</p>
               <div className='Banner-btn'> <button>ABOUT US</button><button>OUR SERVICES</button></div>
           
            </div>
            <div>
                <img className='Banner-img' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;