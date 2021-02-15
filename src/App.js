import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Hello! I am Chandler Hanson! I am a Software Engineer</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='aboutDiv'>
        <h3>About Me</h3>
        <p>Hello, my name is Chandler Hanson and I am from Sammamish, WA. 
          I recently I graduated from University of Washington with a Bachelor of Science in Earth and Space Science 
          with a focus in physics and a Minor in Physics. Once COVID-19 lockdown protocols happened I took a hard look 
          about what I want to do with my life. I looked at my university courses and noticed that my favorite classes 
          had a programming aspect to them. The feeling of getting your code to work is a feeling like no other. 
          I wanted to pursue that feeling and make a career out of it. This led me to Flatiron School Software Engineering 
          Bootcamp where I learned web development skills and languages such as Ruby, Ruby on Rails, JavaScript, and React.js 
          to make full-fledged web applications. When I am not coding, I like to bake, read, play videogames, and play basketball. </p>
          <br></br>
      </div>
      <div className='contactDiv'>
        <h2>Contact Me</h2>
        <p>Feel free to contact me via LinkedIn or my email.</p>
      </div>
    </div>
  );
}

export default App;
