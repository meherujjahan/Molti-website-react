import React from 'react';
import './ChoosePlan.css';

const ChoosePlan = () => {
    return (
        <div className='choosePlan'>
            <div className='choosePlan-text'>
                <b>Our pricing plan</b>
                <h1>Choose your <span>Plan</span></h1>
                <p>It will be as simple as occidental in fact, it will be Occidental.</p>
            </div>
            <div className='choosePlan-card'>
                <div className='choosePlan-single-card'>
                        <b>ECONOMY</b>
                        <h3>$25 / Month</h3>
                        <button>JOIN NOW</button>
                        <p>1 Mobile Responsive <span> Website <br /> SEO </span> Friendly for Google <br />Social media integration <br />1 Year <span> Free Hosting </span> (Included) <br />Free SSL Security</p>
                        <button>See More</button>
                </div>
                <div className='choosePlan-single-card'>
                        <b>PREMIUM</b>
                        <h3>$45 / Month</h3>
                        <button>JOIN NOW</button>
                        <p>1 Mobile Responsive <span> Website <br /> SEO </span> Friendly for Google <br />Social media integration <br />1 Year <span> Free Hosting </span> (Included) <br />Free SSL Security</p>
                        <button>See More</button>
                </div>
                <div className='choosePlan-single-card'>
                        <b>ULTRA</b>
                        <h3>$75 / Month</h3>
                        <button>JOIN NOW</button>
                        <p>1 Mobile Responsive <span> Website <br /> SEO </span> Friendly for Google <br />Social media integration <br />1 Year <span> Free Hosting </span> (Included) <br />Free SSL Security</p>
                        <button>See More</button>
                </div>
            </div>
        </div>
    );
};

export default ChoosePlan;