import React, { Component } from 'react'
import './App.css'
import About from './components/About.js'
import ProjectList from './containers/ProjectList.js'
import Medium from './components/Medium.js'
import Contact from './components/Contact.js'
import Articles from './components/Articles.js'

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1 className='title'>Hi, I am Chandler. I am a Software Engineer!</h1>
      <About />
      <ProjectList/>
      <Medium/>
      <Articles /> 
      <Contact />
    </div>
  );
  }
}

export default App;
