import React from 'react'
import { StyledButton, StyledButton2 } from "../../components/StyledButton"
import avatar from "../../assets/images/squaregif.gif"
import "./About.css"

function About() {
  return (
    <div className='about' id="about">
    <article className='aboutContainer'>
      <div className="aboutText">
        <h3 className="typeHead">Hello! I'm</h3>
        <h1><span>FLAVIA FOGLIATO</span></h1> 
        <h3>a Web Developer based in Lisbon</h3>
        <br/>
        <p>
        I believe that great web design isn't just about making things look pretty, but about creating intuitive and user-friendly experiences that truly engage and inspire. That's why I'm dedicated to delivering clean, elegant code that puts the user first.
        When I'm not coding, you can find me hiking through the mountains, reading a good book, or indulging in my love of all things sci-fi. I'm also passionate about social justice and believe that technology can be a powerful tool for positive change.</p>
      <div className='aboutButtons'>
        <StyledButton onClick={() => window.open("https://www.linkedin.com/in/flaviafogliato/", "_blank")} className='button1'>LinkedIn</StyledButton>    
        <StyledButton2 onClick={() => window.open("https://github.com/Foglia", "_blank")} className='button1'>Github</StyledButton2>    
        </div>    
        </div>
        <img className="avatar" src={avatar} alt="Avatar" />
      </article>    
    </div>
  )
}

export default About