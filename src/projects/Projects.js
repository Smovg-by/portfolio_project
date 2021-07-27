import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './project/Project'
import html_project_img1 from '../assets/img/html_project.jpg'
import html_project_img2 from '../assets/img/react_project.jpg'
import { Title } from '../common/components/title/Title.jsx'

export const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title title={'Projects'} />
        <div className={style.projects}>
          <Project
            title={'Project1'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
            img={html_project_img1}
          />
          <Project
            title={'Project2'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
            img={html_project_img2}
          />
        </div>
      </div>
    </div>
  )
}
