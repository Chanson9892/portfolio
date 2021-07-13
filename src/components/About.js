import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import resume from '../resume/Chandler Hanson - SE Resume 6,15,21.pdf'
import image from '../images/chandler photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import email from '../images/email.svg'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);


  return(
    <div data-aos="fade-up" className='aboutDiv'>
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
                with a Bachelor of Science in Earth and Space Science with a focus in physics and a Minor in Physics. 
                In my final quarter at University of Washington, I took a beginning scientific computing course that focused on 
                programming in Matlab. This course changed my life. I fell in love with the struggle and satisfaction that comes with coding. 
                I wanted to pursue that feeling and make a career out of it. This led me to completing Flatiron School’s Software Engineering 
                Bootcamp in December 2020, where I learned web development skills and languages such as Ruby, Ruby on Rails, HTML, CSS, JavaScript, and React.js 
                to make full-stack web applications. I continue to develop and learn new skills as I strive to become a Software Engineer!
              </p>
              <span class="d-flex mt-3">
                <a target="_blank" class="cta-btn cta-btn--resume" rel="noreferrer" href={resume}>Resume</a>
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
