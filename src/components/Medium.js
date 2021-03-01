import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Medium = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

        return(
            <div data-aos="fade-up" className='articlesDiv'>
                <h1>Medium Articles</h1>
                <h4>I post articles weekly!</h4>
            </div>
        )
}

export default Medium