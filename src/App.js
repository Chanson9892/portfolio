import React, { Component } from 'react'
import './App.css'
import About from './components/About.js'
import ProjectList from './containers/ProjectList.js'
import Medium from './components/Medium.js'
import Contact from './components/Contact.js'
import Articles from './components/Articles.js'
import Navbar from './components/Navbar.js'

function scrollToHome(){
  document.getElementById("home").scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToAbout(){
  document.getElementById("about").scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToProjectList(){
  document.getElementById("projectList").scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToMedium(){
  document.getElementById("medium").scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToContact(){
  document.getElementById("contact").scrollIntoView({ 
    behavior: 'smooth' 
  });
}


function App() {

  return (
    <div className="App">
      <Navbar
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToProjectList={scrollToProjectList}
          scrollToMedium={scrollToMedium}
          scrollToContact={scrollToContact}
        />
      <p id="home"></p>
      <h1 className='title'>Hi, I am Chandler. I am a Software Engineer!</h1>
      <p id="about"></p>
      <About />
      <p id="projectList"></p>
      <ProjectList/>
      <p id="medium"></p>
      <Medium/>
      <Articles /> 
      <p id="contact"></p>
      <Contact />
    </div>
  );
}

export default App;
