import React from 'react'
import { StyledButton } from '../../components/StyledButton'
import ContactForm from '../../components/ContactForm/ContactForm'
import gif from '../../assets/images/squaregif.gif'
import "./Contact.css"

function Contact() {
  return (
<>
 <h2 className="headText" id="contact">&lt;&gt;  CONTACT  &lt;/&gt;</h2>
 <div className="contact">
    <div className='rows'>
      <div className='contactText'>
      <p>If you're interested in collaborating with me on a project or have any questions about my work, I would love to hear from you! Whether you are an individual, a startup, an organization, an artist, or just a curious visitor, I am always excited to take on new challenges and help bring your ideas to life.</p>  
      </div>
      <div className='contacLinks'>
      <a href="mailto: flavia.fogliato@gmail.com">flavia.fogliato@gmail.com</a>
      <br />

        <p>Find out more about me ...</p>
           <a href="https://www.linkedin.com/in/flaviafogliato/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
           <a href="https://github.com/Foglia" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <br />
          <div className='butttonCv'>
          <p style={{ color: 'aquamarine'}}>
          &lt;br /&gt;
          </p>
         <StyledButton onClick={(e) => {window.open("https://drive.google.com/file/d/1TPgAfE1QCwpuufSrjztdfmGcgiai8Uhw/view?usp=sharing/uc?id=<fileId>&export=download", "_blank", "noopener noreferrer");}}
       value="download">Download my CV</StyledButton>
         </div>
        </div>
      </div>
      <div className='contacForm'>
      <ContactForm />
      </div>
      <img src={gif} alt='gif' className='gifImage' />
   </div>
</>

  )
}

export default Contact