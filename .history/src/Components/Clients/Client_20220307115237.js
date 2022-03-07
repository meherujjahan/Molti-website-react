import React from 'react';
import { AiFillStar } from 'react-icons/fa';
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
                <div className='star-icon'> amama<AiFillStar/>?</div>
                <p>Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias <br /> consequatur. Itaque earum rerum tenetur a sapiente delectus ut aut reiciendis voluptatibus <br /> maiores alias </p>
            </div>
        </div>
    );
};

export default Client;