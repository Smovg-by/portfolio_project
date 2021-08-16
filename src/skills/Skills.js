import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { Skill } from './skill/Skill'
import { Title } from '../common/components/title/Title'
import ReactSkill from '../assets/icons/react_ico.png'
import Reduxkill from '../assets/icons/redux_ico.png'
import html from '../assets/icons/html.png'
import rest from '../assets/icons/rest.png'
import github from '../assets/icons/git_skill.png'
import tests from '../assets/icons/tests.png'
import {v1} from "uuid";

export const Skills = () => {
  const skills = [
    {
      id: v1(),
      title: 'React | Redux | Thunk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${Reduxkill})` }
    },
    {
      id: v1(),
      title: 'JavaScript | TypeScript',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${ReactSkill})` }
    },
    {
      id: v1(),
      title: 'HTML | CSS | SASS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${html})` }
    },
    {
      id: v1(),
      title: 'REST API | AXIOS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${rest})` }
    },
    {
      id: v1(),
      title: 'GIT | GITHUB',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${github})` }
    },
    {
      id: v1(),
      title: 'UNIT TESTS | STORYBOOK',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${tests})` }
    },
  ]

  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title={'Skills'} />
        <div className={style.skills}>
          {skills.map(item => {
            return (
              <Skill key={item.id}
                title={item.title}
                description={item.description}
                style={item.style}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
