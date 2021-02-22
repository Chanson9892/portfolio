import React, {Component} from 'react';
import Project from '../components/Project'
import projectData from '../projectData'


export default class ProjectList extends Component{

    render(){
        return(
            <div className='container'>
                {projectData.map((project) => <Project project={project} key={project.title} />)}
            </div>
        )   
    }
}