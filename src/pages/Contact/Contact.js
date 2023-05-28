import React from 'react'
import { StyledButton } from '../../components/StyledButton'
import ContactForm from '../../components/ContactForm/ContactForm'
import Circle from '../../components/Circle/Circle'
import InfiniteText from '../../components/InfiniteText/InfiniteText'
import "./Contact.css"

function Contact() {
  return (
<>
<header className="infin" id="contact">
 <InfiniteText text="&lt;&gt;  CONTACT  &lt;/&gt;" />
 </header>
 <div className="contact">
    <div className='rows'>
      <div className='contactText'>
      <h3>OPEN TO TALK</h3>
      <h6>If you're interested in collaborating with me on a project or have any questions about my work, I would love to hear from you! Whether you are an individual, a startup, an organization, an artist, or simply a curious visitor, I am always excited to take on new challenges or engage in meaningful discussions. Feel free to reach out to me, and let's explore the possibilities together!</h6>  
      </div>
      <div className='contacLinks'>
      <p style={{ color: 'aquamarine'}}>
          &lt;br /&gt;
          </p>
        <p id="more">Find out more ...</p>
           <a href="https://www.linkedin.com/in/flaviafogliato/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
           <a href="https://github.com/Foglia" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <br />
          <div className='cv'>
          <p style={{ color: 'aquamarine'}}>
          &lt;br /&gt;
          </p>
          <h6><a href="mailto: flavia.fogliato@gmail.com">flavia.fogliato@gmail.com</a></h6>
         </div>
        </div>
      </div>
      <div className='contacForm'>
      <ContactForm />
      </div>
      <div className='dowload'>
      <Circle  className='gifImage'/>
      <StyledButton onClick={(e) => {window.open("https://drive.google.com/file/d/1TPgAfE1QCwpuufSrjztdfmGcgiai8Uhw/view?usp=sharing/uc?id=<fileId>&export=download", "_blank", "noopener noreferrer");}}
       value="download" id='buttonCv'>Download my CV</StyledButton>
       </div>
   </div>
</>

  )
}

export default Contact