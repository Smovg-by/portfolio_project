import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { Project } from './project/Project'
import project_img1 from '../assets/img/html_project.jpg'
import project_img2 from '../assets/img/react_project.jpg'
import { Title } from '../common/components/title/Title.jsx'

const projects = [
  {
    title: 'TodoList',
    description: 'See how I did my best todolist ever',
    img: project_img1
  },
  {
    title: 'Social network',
    description: 'The social network you must join in!',
    img: project_img2
  }
]

export const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title title={'Projects'} />
        <div className={style.projects}>
          {projects.map(item => {
            return (
              <Project
                title={item.title}
                description={item.description}
                img={item.img}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
