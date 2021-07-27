import React from 'react'
import style from './Skill.module.css'

export const Skill = props => {
  return (
    <div className={style.skill}>
      <div className={style.icon}></div>
      <h4>{props.title}</h4>
      <p className={style.description}>{props.description}</p>
    </div>
  )
}
