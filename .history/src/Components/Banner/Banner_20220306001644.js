import React from 'react';
import BannerImg from '../../Image/Hero-Illustration-Molti.png';

const Banner = () => {
    return (
        <div>
            <div>
                <p>CREATIVE MARKETING</p>
                <h1>Get Your Professional <br /> Website Done With Molti</h1>
                <p>At vero eos et accusamus iusto odio dignissimos ducimus qui blanditiis <br /> praesentium voluptatum deleniti atque corrupti quos at dolores molestias <br /> excepturi sint occaecati cupiditate.</p>
                <button className='Header-btn'>ABOUT US</button><button className='Header-btn'>OUR SERVICES</button>
           
            </div>
            <div>
                <img className='Banner-img' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;