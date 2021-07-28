import React from 'react'
import style from './Project.module.scss'

export const Project = ({ title, description, img }) => {
  return (
    <div className={style.project}>
      <div className={style.imageContainer}>
        <img src={img} alt='html project logo' className={style.image} />
        <div>
          <a className={style.button} href='#'>
            View
          </a>
        </div>
      </div>
      <h4>{title}</h4>
      <p className={style.description}>{description}</p>
    </div>
  )
}
