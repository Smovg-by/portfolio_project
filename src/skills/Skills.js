import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
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
          {/* <Skill
            title={'JS'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
          />
          <Skill
            title={'CSS'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
          />
          <Skill
            title={'React'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
          /> */}
        </div>
      </div>
    </div>
  )
}
