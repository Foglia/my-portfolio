import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import "./Contact.css"
import { StyledButton } from '../../components/StyledButton'

function Contact() {
  return (
<>
 <h1 className="headText" id="contact">CONTACT</h1>
 <div className="contact">
      <div className='contacForm'>
      <ContactForm />
      </div>
    <div className='rows'>
      <div className='contactText'>
      <p>If you're interested in collaborating with me on a project or have any questions about my work, I would love to hear from you! Whether you are an individual, a startup, an organization, an artist, or just a curious visitor, I am always excited to take on new challenges and help bring your ideas to life...</p>  
      </div>
      <br />  
      <a>flavia.fogliato@gmail.com</a>
      <br/>
      <div className='contacLinks'>
        <p>Find out more about me ...</p>
          <ul>
           <li><a href="https://www.linkedin.com/in/flaviafogliato/" target="_blank">LinkedIn</a></li>
           <li><a href="https://github.com/Foglia" target="_blank">GitHub</a></li>
          </ul>
      <br/>
        <p>... get a bit closer</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/flaviafogliato/" target="_blank">Instagram</a></li>
         </ul>
         <StyledButton onClick={(e) => {window.open("https://drive.google.com/file/d/1TPgAfE1QCwpuufSrjztdfmGcgiai8Uhw/view?usp=sharing/uc?id=<fileId>&export=download", "_blank");}}
       value="download" className='butttonCv'>Download my CV</StyledButton>
        </div>
      </div>
   </div>
</>

  )
}

export default Contact