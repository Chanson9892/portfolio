import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Project = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);


        let {title, description, github, youtube_link, video} = props.project
        return(
            <div data-aos="fade-up" className='projectVideoCard'>
                <video className="video" controls preload="auto" width="500" height="300" >
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="projectTextCard">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a target="_blank" rel="noreferrer" href={youtube_link} class="button">Demo</a>
                    <a target="_blank" rel="noreferrer" href={github}>Github</a>
                </div>
                

            </div>
        )
}

export default Project