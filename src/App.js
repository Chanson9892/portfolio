import React, { Component } from 'react'
import './App.css'
import resume from './resume/Chandler Hanson - SE Resume 2,15,21.pdf'
import image from './images/chandler photo.jpg'
import ProjectList from './containers/ProjectList.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1 className='title'>Hi, my name is Chandler Hanson! I am a Software Engineer!</h1>
      <div className='aboutDiv'>
        <div class="container">
          <h1 class="section-title">About me</h1>
          <br></br>
          <div class="row about-wrapper">
            <div class="col-md-6 col-sm-12">
              <div class="about-wrapper__image">
                <img class="img-fluid rounded shadow-lg" height="auto" width="300px" src={image} alt="Profile Image"/>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="about-wrapper__info">
                <p class="about-wrapper__info-text">
                  My journey to Software Engineering was definitely not typical. I graduated from University of Washington in June 2020
                with a Bachelor of Science in Earth and Space Science with a focus in physics and a Minor in Physics. I graduated in the
                middle of the pandemic! My last quarter of college was online and I lived at home to stay safe. 
                I had some more free time on my hands since I was not able to be with my friends or able to play basketball. 
                I took this chance to add another course to my workload. I took a scientific computing course that focused in
                programming in Matlab. I had taken some courses already that had programming aspects to them, so I thought it would be fun.
                I did not expect that I would completely fall in love with coding. The feeling of getting your code to work is a feeling like no other. 
                I knew that I wanted to pursue that feeling and make a career out of it. This led me to Flatiron School Software Engineering 
                Bootcamp where I learned web development skills and languages such as Ruby, Ruby on Rails, JavaScript, and React.js 
                to make full-fledged web applications! I continue to develop and learn new skills as I strive to become a Software Engineer!
                </p>
                <span class="d-flex mt-3">
                  <a target="_blank" class="cta-btn cta-btn--resume" rel="noreferrer" href={resume}>View Resume</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
