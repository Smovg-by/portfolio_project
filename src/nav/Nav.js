import React from 'react'
import style from './Nav.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Nav = () => {
  return (
    <div className={styleContainer.container}>
      <div className={style.navBlock}>
        <a href='#'>Главная</a>
        <a href='#'>Скилы</a>
        <a href='#'>Проекты</a>
        <a href='#'>Контакты</a>
      </div>
    </div>
  )
}
