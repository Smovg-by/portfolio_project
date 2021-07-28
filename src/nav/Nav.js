import React from 'react'
import style from './Nav.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

export const Nav = () => {
  return (
    <div className={styleContainer.container}>
      <div className={style.navBlock}>
        <a href='#'>Main</a>
        <a href='#'>Skills</a>
        <a href='#'>Projects</a>
        <a href='#'>Contact me</a>
      </div>
    </div>
  )
}
