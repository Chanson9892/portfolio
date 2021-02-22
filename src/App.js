import React from 'react'
import './App.css'
import resume from './resume/Chandler Hanson - SE Resume 2,15,21.pdf'
import image from './images/chandler photo.jpg'
import ProjectList from './containers/ProjectList.js'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Hello! I am Chandler Hanson! I am a Software Engineer!</h1>
      
      <div className='aboutDiv'>
        <img className='photo' src={image} alt='chandler photo' width='200px'/>
        <h3>About Me</h3>
        <p>Hello, my name is Chandler Hanson and I am from Sammamish, WA. 
          I recently I graduated from University of Washington with a Bachelor of Science in Earth and Space Science 
          with a focus in physics and a Minor in Physics. Once COVID-19 lockdown protocols happened I took a hard look 
          about what I want to do with my life. I looked at my university courses and noticed that my favorite classes 
          had a programming aspect to them. The feeling of getting your code to work is a feeling like no other. 
          I wanted to pursue that feeling and make a career out of it. This led me to Flatiron School Software Engineering 
          Bootcamp where I learned web development skills and languages such as Ruby, Ruby on Rails, JavaScript, and React.js 
          to make full-fledged web applications! When I am not coding, I like to bake, read, play videogames, and play basketball. </p>
          <br></br>
      </div>
      <div className='resumeDiv'>
        <a target="_blank" rel="noreferrer" href={resume}>Resume</a>
      </div>
      <div id='projects' className='projectsDiv'>
        <ProjectList/>
      </div>
      <div className='articlesDiv'>
        <h4>here is the link to my medium homepage where I post articles weekly!</h4>
        <a target="_blank" rel="noreferrer" href='https://chandler-hanson.medium.com/'>Medium</a>
      </div>
      <div className='contactDiv'>
        <h2>Contact Me</h2>
        <p>Feel free to contact me via LinkedIn or my email.</p>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/chandler-hanson/'>
        <img  alt='Chandler Hanson LinkedIn' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg' />
        </a>
        <br></br>
        <a target="_blank" rel="noreferrer" href='https://github.com/Chanson9892'>
        <img  alt='Chandler Hanson Github' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg' /> 
        </a>

      </div>
    </div>
  );
}

export default App;
