import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { Skill } from './skill/Skill'
import { Title } from '../common/components/title/Title'
import ReactSkill from '../assets/icons/react_ico.png'
import Reduxkill from '../assets/icons/redux_ico.png'

export const Skills = () => {
  const skills = [
    {
      title: 'React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${ReactSkill})` }
    },
    {
      title: 'Redux',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${Reduxkill})` }
    },
    {
      title: 'React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${ReactSkill})` }
    },
    {
      title: 'Redux',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      style: { backgroundImage: `url(${Reduxkill})` }
    }
  ]

  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title={'Skills'} />
        <div className={style.skills}>
          {skills.map(item => {
            return (
              <Skill
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
