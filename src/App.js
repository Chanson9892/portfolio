import React, { Component } from 'react'
import './App.css'
import resume from './resume/Chandler Hanson - SE Resume 2,15,21.pdf'
import image from './images/chandler photo.jpg'
import ProjectList from './containers/ProjectList.js'
import 'bootstrap/dist/css/bootstrap.min.css';

//https://www.youtube.com/watch?v=huVJW23JHKQ
//https://www.youtube.com/watch?v=JcHLxzrsRS4 
//https://stackoverflow.com/questions/59595700/how-to-make-a-react-component-fade-in-on-scroll-using-intersectionobserver-but


class App extends Component {
  render() {
  return (
    <div className="App">
      <h1 className='title'>Hi, my name is Chandler Hanson! I am a Software Engineer!</h1>
      <div className='aboutDiv'>
      <div class="container">
        <h1 class="section-title">
          About me
        </h1>
        <div class="row about-wrapper">
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__image">
              <img
                class="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={image}
                alt="Profile Image"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__info">
              <p class="about-wrapper__info-text">
              I recently I graduated from University of Washington with a Bachelor of Science in Earth and Space Science 
          with a focus in physics and a Minor in Physics. Once COVID-19 lockdown protocols happened I took a hard look 
          about what I want to do with my life. I looked at my university courses and noticed that my favorite classes 
          had a programming aspect to them. The feeling of getting your code to work is a feeling like no other. 
          I wanted to pursue that feeling and make a career out of it. This led me to Flatiron School Software Engineering 
          Bootcamp where I learned web development skills and languages such as Ruby, Ruby on Rails, JavaScript, and React.js 
          to make full-fledged web applications! When I am not coding, I like to bake, read, play videogames, and play basketball. 
          </p>
              <span class="d-flex mt-3">
                <a target="_blank" class="cta-btn cta-btn--resume" rel="noreferrer" href={resume}>
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
        {/* <img className='photo' src={image} alt='chandler photo' />
        <h3>About Me</h3>
        <p>Hello, my name is Chandler Hanson and I am from Sammamish, WA. 
          I recently I graduated from University of Washington with a Bachelor of Science in Earth and Space Science 
          with a focus in physics and a Minor in Physics. Once COVID-19 lockdown protocols happened I took a hard look 
          about what I want to do with my life. I looked at my university courses and noticed that my favorite classes 
          had a programming aspect to them. The feeling of getting your code to work is a feeling like no other. 
          I wanted to pursue that feeling and make a career out of it. This led me to Flatiron School Software Engineering 
          Bootcamp where I learned web development skills and languages such as Ruby, Ruby on Rails, JavaScript, and React.js 
          to make full-fledged web applications! When I am not coding, I like to bake, read, play videogames, and play basketball. </p>
          <br></br> */}
      </div>
      {/* <div className='resumeDiv'>
        <a target="_blank" rel="noreferrer" href={resume}>Resume</a>
      </div> */}
      <h1>Projects</h1>
        <ProjectList/>
      <div className='articlesDiv'>
        <h4>Here is the link to my medium homepage where I post articles weekly!</h4>
        <a target="_blank" rel="noreferrer" href='https://chandler-hanson.medium.com/'>Medium</a>
      </div>
      <div className='contactDiv'>
        <h2>Contact Me</h2>
        <p>Feel free to contact me via LinkedIn or my email @ chan.hanson5@gmail.com</p>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/chandler-hanson/'>
        <img  alt='Chandler Hanson LinkedIn' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg' />
        </a>
        <a target="_blank" rel="noreferrer" href='https://github.com/Chanson9892'>
        <img  alt='Chandler Hanson Github' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg' /> 
        </a>

      </div>
    </div>
  );
  }
}

export default App;
