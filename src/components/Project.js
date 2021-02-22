import React, { Component } from 'react';

export default class Project extends Component {

    render(){
        let {title, description, github, youtube_link, video} = this.props.project
        return(
            <div className='projectVideoCard'>
                <video className="video" controls preload="auto" width="250" height="250">
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="projectTextCard">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a target="_blank" rel="noreferrer" href={youtube_link}>Video Link</a>
                    <br></br>
                    <a target="_blank" rel="noreferrer" href={github}>Github</a>
                </div>
                

            </div>
        )
    }
}