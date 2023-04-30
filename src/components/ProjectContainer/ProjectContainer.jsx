import React from 'react'
import uniqid from 'uniqid'
import { FaGithub } from 'react-icons/fa';
import { MdLaunch } from 'react-icons/md'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <img src={project.image} alt="project 8bit icon"/>
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        target="_blank"
        rel="noopener noreferrer"
        className='link link--icon'
      >
        <FaGithub />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <MdLaunch />
      </a>
    )}
  </div>
)

export default ProjectContainer
