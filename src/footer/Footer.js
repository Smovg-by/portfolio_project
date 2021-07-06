import React from 'react'
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>Владимир Смовж</h2>
        <div className={style.socialsContainer}>
          <div className={style.socialLink}></div>
          <div className={style.socialLink}></div>
          <div className={style.socialLink}></div>
          <div className={style.socialLink}></div>
        </div>
        <h3 className={style.copyright}>© 2021 Все права защищены</h3>
      </div>
    </div>
  )
}
