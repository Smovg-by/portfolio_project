import React from 'react'
import style from './Project.module.css'

export const Project = props => {
  return (
    <div className={style.project}>
      <div className={style.imageContainer}>
        <img src={props.img} alt='html project logo' className={style.image} />
        <button className={style.butn}>Смотреть проект</button>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  )
}
