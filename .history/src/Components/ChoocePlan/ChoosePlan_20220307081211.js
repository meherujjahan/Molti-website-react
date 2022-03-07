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
                <div>
                        <b>ECONOMY</b>
                        <h3>$25 / Month</h3>
                        <button>JOIN NOW</button>
                        <p>1 Mobile Responsive Website <br /> SEO Friendly for Google <br />Social media integration <br />1 Year Free Hosting (Included) <br />Free SSL Security</p>
                        <button>See More</button>
                </div>
                <div>
                        <b>PREMIUM</b>
                        <h3>$45 / Month</h3>
                        <button>JOIN NOW</button>
                        <p>1 Mobile Responsive Website <br /> SEO Friendly for Google <br />Social media integration <br />1 Year Free Hosting (Included) <br />Free SSL Security</p>
                        <button>See More</button>
                </div>
                <div>
                        <b>ULTRA</b>
                        <h3>$75 / Month</h3>
                        <button>JOIN NOW</button>
                        <p>1 Mobile Responsive Website <br /> SEO Friendly for Google <br />Social media integration <br />1 Year Free Hosting (Included) <br />Free SSL Security</p>
                        <button>See More</button>
                </div>
            </div>
        </div>
    );
};

export default ChoosePlan;