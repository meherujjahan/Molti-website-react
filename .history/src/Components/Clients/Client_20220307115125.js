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
            </div>
        </div>
    );
};

export default Client;