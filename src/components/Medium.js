import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Medium = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

        return(
            <div data-aos="fade-up" className='articlesDiv'>
                <h4>Here is the link to my medium homepage where I post articles weekly!</h4>
                <a target="_blank" rel="noreferrer" href='https://chandler-hanson.medium.com/'>Medium</a>
            </div>
        )
}

export default Medium