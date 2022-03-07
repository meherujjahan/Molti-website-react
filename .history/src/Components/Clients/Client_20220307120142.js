import React from 'react';
import './Client.css';

const Client = () => {
    return (
        <div className='clients'>
            <div className='choosePlan-text'>
                <b>TESTIMONIALS</b>
                <h1>Happy <span>Clients</span></h1>
                <p>It will be as simple as occidental in fact, it will be Occidental.</p>
            </div>
            <div>
                <div className='star-icon'><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> </div>
                <p>Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias <br /> consequatur. Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus <br /> maiores alias <br /> <span>Tom Ashley </span> – website.com</p>
            </div>
        </div>
    );
};

export default Client;