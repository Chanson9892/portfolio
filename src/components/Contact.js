import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import email from '../images/email.svg'

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

    return(
        <div data-aos="fade-up" className='contactDiv'>
            <h2>Contact Me</h2>
            < a href="mailto:chan.hanson5@gmail.com">
                <img  alt='Email' width='22px' src={email}/>
            </a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/chandler-hanson/'>
                <img  alt='Chandler Hanson LinkedIn' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg' />
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/Chanson9892'>
                <img  alt='Chandler Hanson Github' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg' /> 
            </a>
            <a target="_blank" rel="noreferrer" href='https://chandler-hanson.medium.com/'>
                <img  alt='Chandler Hanson Medium' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/medium.svg' />
            </a>

        </div>
    )
}

export default Contact