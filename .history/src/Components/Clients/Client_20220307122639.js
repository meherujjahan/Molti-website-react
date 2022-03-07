import React from 'react';
import women1 from '../../Image/download (4).jfif';
import men1 from '../../Image/download.jfif';
import women2 from '../../Image/images (1).jfif';
import men2 from '../../Image/images.jfif';
import trastedclient from '../../Image/trusted-clients (1).jpg';
import './Client.css';

const Client = () => {
    return (
        <div className='clients'>
            <div className='choosePlan-text'>
                <b>TESTIMONIALS</b>
                <h1>Happy <span>Clients</span></h1>
                <p>It will be as simple as occidental in fact, it will be Occidental.</p>
            </div>
            <div className='clients-section'>
                <div className='star-icon'><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> </div>
                <p>Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias <br /> consequatur. Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus <br /> maiores alias <br /> <span>Tom Ashley </span> – website.com</p>
            <div className='clientImg'>
                <img src={men1} alt="" />
                <img src={women2} alt="" />
                <img src={women1} alt="" />
                <img src={men2} alt="" />
                <p></p>
            </div>
            <div>
                <img style={{width:'200px'}} src={trastedclient} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Client;