import React from 'react'
import style from './Project.module.css'

export const Project = props => {
  return (
    <div className={style.project}>
      <div className={style.imageContainer}>
        <img src={props.img} alt='html project logo' className={style.image} />
        <button className={style.butn}>Check it out</button>
      </div>
      <h4>{props.title}</h4>
      <p className={style.description}>{props.description}</p>
    </div>
  )
}
