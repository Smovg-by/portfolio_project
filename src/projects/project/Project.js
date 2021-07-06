import React from 'react'
import style from './Project.module.css'

export const Project = props => {
  return (
    <div className={style.skill}>
      <div className={style.image}>
        <button>Смотреть</button>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  )
}
