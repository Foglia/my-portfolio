import React from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer'
import InfiniteText from '../../components/InfiniteText/InfiniteText'
import './Project.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <header className="infin">
      <InfiniteText text="&lt;&gt;  PROJECTS  &lt;/&gt;" />
      </header>
      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects