import React, {useState} from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import project_img1 from '../assets/img/html_project.jpg'
import project_img2 from '../assets/img/react_project.jpg'
import virtual_piano from '../assets/img/piano_project_pic.png'
import photo_filter from '../assets/img/photofilter_project_pic.png'
import bmw_webpage from '../assets/img/bmw_project_pic.png'
import {Project} from './project/Project'
import {Title} from '../common/components/title/Title.jsx'
import {v1} from "uuid";

const projects = [
  {
    id: v1(),
    title: 'Virtual piano app',
    shortDescription: 'Play your favourite melodies',
    fullDescription: '',
    style: {backgroundImage: `url(${virtual_piano})`},
    technologies: '',
    link: 'https://wizardly-haibt-ae0f59.netlify.app/',
  },
  {
    id: v1(),
    title: 'Photo filter app',
    shortDescription: 'Apply filters to your photos',
    fullDescription: '',
    style: {backgroundImage: `url(${photo_filter})`},
    technologies: '',
    link: 'https://vigorous-leavitt-54b204.netlify.app/',
  },
  {
    id: v1(),
    title: 'BMW landing web page',
    shortDescription: 'BMW landing page',
    fullDescription: '',
    style: {backgroundImage: `url(${bmw_webpage})`},
    technologies: '',
    link: 'https://smovg-by.github.io/BMW_web_page_JS/',
  },
]

export const Projects = () => {

  let [viewMode, setViewMode] = useState('false')

  const viewModeSwitcher = () => {
    setViewMode(!viewMode)
  }

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title title={'Projects'}/>
        <div className={style.projects}>
          {projects.map(item => {
            return (
              <Project key={item.id}
                       title={item.title}
                       shortDescription={item.shortDescription}
                       fullDescription={item.fullDescription}
                       style={item.style}
                       technologies={item.technologies}
                       link={item.link}
                       viewModeSwitcher={viewModeSwitcher}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
