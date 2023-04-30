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
        To me, a great website is more than just functionality - it's about creating an experience that users will love and remember.
        I'm passionate about web development because it allows me to solve problems and make a difference through my work. Whether you're looking to launch a new website, update an existing one, or just need some advice on how to improve your online presence, I'm here to help.
        <br />
        When I'm not tinkering with code, you can find me exploring the local coffee scene, trying out new recipes in the kitchen, or immersing myself in the local arts and culture scene. I also believe in the power of technology for good, and I'm always looking for ways to make a positive impact through my work.
        <br />
        I believe that technology can be a powerful tool for positive change.</p>
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