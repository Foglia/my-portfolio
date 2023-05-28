import React from 'react'
import uniqid from 'uniqid'
import { skills, softSkills } from '../../portfolio'
import InfiniteText from '../../components/InfiniteText/InfiniteText'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
    <header className="infin">
    <InfiniteText  text="&lt;&gt;  SKILLS  &lt;/&gt;" />
    </header>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain' id="hard">
            {skill}
          </li>
        ))}
        {softSkills.map((soft) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain' id="soft">
            {soft}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills