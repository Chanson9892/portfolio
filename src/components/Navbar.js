import React from 'react';

function Navbar(props){
  return(
    <div className="mainHeader">
      <div className="navbar">
        <div>
          <p onClick={()=>props.scrollToHome()}>HOME</p>
        </div>
        <div>
          <p onClick={()=>props.scrollToAbout()}>ABOUT</p>
        </div>
        <div>
          <p onClick={()=>props.scrollToProjectList()}>PROJECTS</p>
        </div>
        <div>
          <p onClick={()=>props.scrollToMedium()}>ARTICLES</p>
        </div>
        <div>
          <p onClick={()=>props.scrollToContact()}>CONTACT</p>
        </div>
      </div>
    </div>
  )
  
}

export default Navbar;