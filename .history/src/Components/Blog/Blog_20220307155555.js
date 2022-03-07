import React from 'react';
import image1 from '../../Image/pexels-aleksandar-pasaric-325185-400x250.jpg';
// import image2 from '../../Image/pexels-essow-kedelina-936722-400x250.jpg'
// import image3 from '../../Image/pexels-pixabay-35550-400x250.jpg'
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='choosePlan-text'>
                <b>OUR NEWS</b>
                <h1>
                Latest from <span> Blog</span> 
                </h1>
                <p>It will be as simple as occidental in fact, it will be Occidental. It will be as <br /> simple as occidental in fact, it will be Occidental.</p>
            </div>
            <div>
                <div>
                    <img src={image1} alt="" />
                   <div className='img-btn'> <button>BUSINESS</button> <button>WEBSITE</button></div>
                </div>
                <div>
                <button className='date-btn'>Dec 22</button>
                </div>
                <div>
                    <h6>Risus sed vulputate <br /> odio ut enim blandit <br /> eiu tempor incididunt</h6>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;