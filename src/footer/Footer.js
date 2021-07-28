import React from 'react'
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { Title } from '../common/components/title/Title.jsx'

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <Title title={'Social media'} />
        <div className={style.socialsContainer}>
          <div className={style.socialLink}></div>
          <div className={style.socialLink}></div>
          <div className={style.socialLink}></div>
          <div className={style.socialLink}></div>
        </div>
        <h3 className={style.copyright}>© 2021 All right reserved</h3>
      </div>
    </div>
  )
}
